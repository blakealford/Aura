declare module 'endb' {
  import { EventEmitter } from 'events';

  type FindPredicate<V> = (value: V, key: string) => boolean;
  type OrPromise<T> = T | Promise<T>;

  export interface EndbAdapter<TVal, TSerialized = string> {
    on?(event: 'error', callback: (error: Error) => void | never): void;
    namespace: string;
    all?(): OrPromise<Element<TSerialized>[]>;
    clear(): OrPromise<void>;
    delete(key: string): OrPromise<boolean>;
    get(key: string): OrPromise<void | TVal | TSerialized>;
    has(key: string): OrPromise<boolean>;
    set(key: string, value: TSerialized): OrPromise<unknown>;
  }

  export interface EndbOptions<TVal, TSerialized = string> {
    uri?: string;
    namespace: string;
    serialize: (data: TVal) => TSerialized;
    deserialize: (data: TSerialized) => TVal;
    adapter?: 'mongodb' | 'mysql' | 'postgres' | 'postgresql' | 'redis' | 'sqlite' | 'sqlite3';
    store: EndbAdapter<TVal, TSerialized>;
    collection?: string;
    table?: string;
    keySize?: number;
  }

  type Element<V> = {
    key: string;
    value: V;
  };

  export class Endb<TVal> extends EventEmitter {
    public options: EndbOptions<TVal>;
    constructor(options?: string | Partial<EndbOptions<TVal>>);
    public all(): Promise<Element<TVal>[] | undefined>;
    public clear(): Promise<undefined>;
    public delete(key: string): Promise<boolean>;
    public entries(): Promise<[string, TVal][]>;
    public find(fn: FindPredicate<TVal>): Promise<TVal | undefined>;
    public get<V>(key: string, path?: string): Promise<V | undefined>;
    public has(key: string, path?: string): Promise<boolean>;
    public keys(): Promise<string[]>;
    public set<V>(key: string, value: V, path?: string): Promise<true>;
    public values(): Promise<TVal[]>;
  }
}
