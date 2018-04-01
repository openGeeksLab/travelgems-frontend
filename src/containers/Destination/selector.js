import { createSelector } from 'reselect';

const destinationsById = state => state.content.destinationsById;
const destinationsActivities = state => state.content.destinationsActivities;

export const destinationsByIdSelector = createSelector(
  (_, id) => id,
  destinationsById,
  (id, items) => items[id],
);

const activityIds = createSelector(
  destinationsByIdSelector,
  destinationsActivities,
  (destination, activities) => activities[destination.custom_id],
);

export const activitiesSelector = createSelector(
  activityIds,
  state => state.content.activitiesById,
  (Ids, activitiesById) => (Ids ? Ids.map(id => activitiesById[id]) : null),
);
