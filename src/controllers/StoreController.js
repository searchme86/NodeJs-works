import Store from '../models/Store';

export const getAllProudctsStatic = async (req, res) => {
  const search = 'a';
  const products = await Store.find({ price: { $gt: 30 } })
    .sort('price')
    .select('name price');
  // .limit(10)
  // .skip(5);

  return res.status(200).json({ products, nbHits: products.length });
};

export const getAllProudcts = async (req, res) => {
  const { featured, company, name, sort, fields, numericFilters } = req.query;
  const queryObject = {};
  // console.log('featured', featured);
  console.log('numericFilters', numericFilters);

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }

  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = {
      $regex: name,
      $options: 'i',
    };
  }

  if (numericFilters) {
    console.log('numericFilters', numericFilters);
    const operatorMap = {
      '>': '$gt',
      '>=': '$gte',
      '=': '$eq',
      '<': '$lt',
      '<=': '$lte',
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );
    console.log('이거 뭐진fileters', filters);
    const options = ['price', 'rating'];
    filters = filters.split(',').forEach((item) => {
      const [field, operator, value] = item.split('-');
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  console.log('queryObject', queryObject);
  let result = Store.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    result = result.sort(sortList);
  } else {
    result = result.sort('createdAt');
  }

  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    result = result.select(fieldsList);
  }

  // pagination
  // 설정하려는 페이지 수
  const page = Number(req.query.page) || 1;
  // 한 페이지당 총 넣을 아이템
  const limit = Number(req.query.limit) || 10;
  // 다른 페이지에 시작할 아이템을 지정하기 위해
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  // total :  23
  // per : 7
  // 4 7 7 7 2

  const products = await result;
  return res.status(200).json({ products, nbHits: products.length });
};
