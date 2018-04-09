import R from 'ramda';

export const getPriceTextActivity = (activity: Object) =>
  activity.price + ' ' + activity.currency;

export const valueIsTrue = R.compose(R.keys, R.pickBy(val => val === true));

export const getTextFilterHelper = filters => {
  return R.compose(
    R.flatten,
    R.values,
    R.mapObjIndexed((val, key) => valueIsTrue(val).map(val => key + ':' + val)),
  )(filters);
};

export const arrayContainsArray = (superset, subset) => {
  if (subset && 0 === subset.length) {
    return true;
  }
  return subset.every(value => superset.indexOf(value) >= 0);
};

export const getFiltersObject = filters => {
  const data = filters.reduce((result, text, index) => {
    const array = text.split(':');
    if (array.length > 1) {
      result[array[0]] = result[array[0]]
        ? { ...result[array[0]], [array[1]]: false }
        : { [array[1]]: false };
    }
    return result;
  }, {});
  return data;
};
