import { createSelector } from 'reselect';
import { getFiltersObject } from 'src/selectors/index';
import { keys, sort } from 'ramda';
const activitiesFilters = state => state.content.activitiesFilters;

export const filtersSelector = createSelector(activitiesFilters, filters => {
  const obj = getFiltersObject(filters);

  const diff = (a, b) => {
    const numberA = a.replace(/^\D+/g, '');
    const numberB = b.replace(/^\D+/g, '');
    return numberA - numberB;
  };
  const sortObj = sort(diff, keys(obj.price));
  const data = sortObj.reduce((result, text) => {
    result[text] = false;
    return result;
  }, {});
  return { ...obj, price: data };
});
