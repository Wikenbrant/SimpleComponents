import { Signal } from "@preact/signals-core";

export * from "@preact/signals-core";

export type Signalish<T> = T | Signal<T>;

export type UnpackSignal<T> = T extends Signal<infer V> ? V : T;

export const isSignal = (value: any): value is Signal =>
  value instanceof Signal;

export const getValue = <T>(value: Signalish<T>): UnpackSignal<T> =>
  value instanceof Signal ? getValue(value.value) : (value as UnpackSignal<T>);
