declare module 'redux-persist' {
  type Function = (_: any) => any;
  type Action = Object
  type Dispatch = (a: Action) => any
  interface Store {
    dispatch: Dispatch;
    subscribe: (listener: () => void) => () => void;
  }
  interface Storage {
    setItem: Function,
    getItem: Function,
    removeItem: Function,
    getAllKeys: Function,
  }
  interface Config {
    blacklist?: Array<string>,
    whitelist?: Array<string>,
    storage?: Storage,
    transforms?: Array<Object>,
    debounce?: number,
    keyPrefix?: string,
  }
  type Purge = (keys: Array<string>) => void
  type Rehydrate = (incoming: Object, options: { serial: boolean }) => void
  interface Persistor {
    purge: Purge,
    rehydrate: Rehydrate,
    pause: () => void,
    resume: () => void,
  }
  type OnComplete = (err?: any, result?: Object) => void
  type PersistStore<S> = (store: Redux.Store<S>, config: Config, onComplete: OnComplete)  => Persistor
  type GetStoredState = (config: Config, onComplete: OnComplete) => void
  type CreatePersistor<S> = (store: Redux.Store<S>, config: Config) => Persistor
  type StoreEnhancer = (next: Function) => Function
  type AutoRehydrate<S> = () => Redux.StoreEnhancer<S>;

  export function persistStore<S>(store: Redux.Store<S>, config: Config, onComplete?: OnComplete): Persistor;
  export function autoRehydrate<S>(): Redux.StoreEnhancer<S>;
  export var getStoredState: GetStoredState;
  export function createPersistor<S>(store: Redux.Store<S>, config: Config): Persistor;
}

declare module 'redux-persist/constants' {
  export var REHYDRATE: string;
}
