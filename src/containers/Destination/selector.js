import { createSelector } from 'reselect';

const destinationsById = state => state.content.destinationsById;
const destinationsActivities = state => state.content.destinationsActivities;

export const destinationsByIdSelector = createSelector(
  (_, id) => id,
  destinationsById,
  (id, items) => items[id],
);

export const activitiesSelector = createSelector(
  (_, id) => {
    console.log('id', id);
    return id;
  },
  destinationsActivities,
  (uuid, activities) => activities[uuid],
);
