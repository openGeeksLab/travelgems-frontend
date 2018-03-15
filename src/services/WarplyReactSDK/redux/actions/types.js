
export type Action =
      { type: 'SET_WEB_ID', value: string }
    | { type: 'SET_API_KEY', value: string  }
    | { type: 'QUEUE_REQUEST', request: string }
    | { type: 'QUEUE_EVENT', event: string }
    | { type: 'DEQUEUE_REQUEST', request: string }
    | { type: 'EMPTY_EVENT_QUEUE' }
    | { type: 'SET_CONTEXT_VARIABLES', variables: json }

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
