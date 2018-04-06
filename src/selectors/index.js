import R from 'ramda';

export const getPriceTextActivity = (activity: Object) =>
  activity.price + ' ' + activity.currency;

export const getTextFilterHelper = filters => {
  const valueIsTrue = R.compose(R.keys, R.pickBy(val => val === true));
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
