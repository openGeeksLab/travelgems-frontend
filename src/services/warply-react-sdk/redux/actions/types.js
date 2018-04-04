
export type Action =
      { type: 'SET_WEB_ID', value: string }
    | { type: 'SET_API_KEY', value: string  }
    | { type: 'QUEUE_REQUEST', request: string }
    | { type: 'QUEUE_EVENT', event: string }
    | { type: 'DEQUEUE_REQUEST', request: string }
    | { type: 'EMPTY_EVENT_QUEUE' }
    | { type: 'SET_CONTEXT_VARIABLES', variables: json }
    | { type: 'SET_MICRO_APPS', mapps: json }
    | { type: 'DELETE_AYTH_KEYS'}

    | { type: 'SET_ACCESS_TOKENS', tokens: json }
    | { type: 'DELETE_ACCESS_TOKENS' }
    | { type: 'SET_AUTH_CLIENT', data: json }
    | { type: 'DELETE_AUTH_CLIENT' }

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
