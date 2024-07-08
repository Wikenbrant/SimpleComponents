import { signal, Signal } from "./reactivity";
import { addHookState, getCurrentHookState } from "./hook-state";

export type HookState = SignalHookState;

type SignalHookState<T = unknown> = Signal<T>;

export function useSignal<T>(value: T): Signal<T>;
export function useSignal<T = undefined>(): Signal<T | undefined>;
export function useSignal<T>(value?: T) {
  let state = getCurrentHookState<SignalHookState<T | undefined>>();

  if (!state) {
    state = signal<T | undefined>(value);
    addHookState(state);
  }

  return state;
}
