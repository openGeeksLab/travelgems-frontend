import { createSelector } from 'reselect';

const destinationsActivities = state => state.content.destinationsActivities;
const activitiesById = state => state.content.activitiesById;

export const activityByIdSelector = createSelector(
  (_, id) => id,
  activitiesById,
  (id, items) => items[id],
);
