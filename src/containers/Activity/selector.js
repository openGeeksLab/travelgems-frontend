import { createSelector } from 'reselect';

const activitiesById = state => state.content.activitiesById;

export const activityByIdSelector = createSelector(
  (_, id) => id,
  activitiesById,
  (id, items) => items[id],
);
