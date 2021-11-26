import { TFunction } from './types';

const isFunction = (value: unknown): value is TFunction => typeof value === 'function';

export { isFunction };
