export type Action =
  { type: 'PUSH_NEW_ROUTE', route: string }
    | { type: 'POP_ROUTE' }
    | { type: 'POP_TO_ROUTE', route: string }
    | { type: 'REPLACE_ROUTE', route: string }
    | { type: 'REPLACE_OR_PUSH_ROUTE', route: string }
    | { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'SET_USER', name: string}
    | { type: 'SET_LIST', list: string}
    | { type: 'SET_DESTINATIONS', payload: array}
    | { type: 'SET_ACTIVITIES', payload: array}
    | { type: 'SET_POLL', payload: json}
    | { type: 'SET_PROFILE', payload: json}
    | { type: 'SET_FAVOURITE_DESTINATIONS'}
    | { type: 'SET_FAVOURITE_ACTIVITIES'}
    | { type: 'SET_CONTENT_PERMISSION', permission: sting}

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
