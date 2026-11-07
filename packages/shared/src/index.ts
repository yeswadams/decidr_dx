/** Shared utilities belong here only when they have multiple real consumers. */
export type MaybePromise<T> = T | Promise<T>;
