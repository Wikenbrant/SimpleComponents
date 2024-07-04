import { HookState } from "./hooks";

type State = {
  hooks: HookState[];
};

const globalState = new Map<Function, State>();

let currentState: State | undefined;
let currentHookIndex = 0;

export const setCurrentComponentState = (node: any) => {
  if (typeof node !== "function") return;
  let state = globalState.get(node);

  if (!state) {
    state = {
      hooks: [],
    };
    globalState.set(node, state);
  }

  currentHookIndex = 0;
  currentState = state;
};

export const getCurrentComponentState = () => currentState;

export const addHookState = (hookState: HookState) => {
  const state = getCurrentComponentState();

  if (!state)
    throw new Error("You can't use hooks outside of a functional component.");

  state.hooks[currentHookIndex] = hookState;
  currentHookIndex++;
};

export const getCurrentHookState = <THookState extends HookState>():
  | THookState
  | undefined => {
  const state = getCurrentComponentState();
  return state?.hooks[currentHookIndex] as THookState;
};

export const resetHookIndex = () => {
  currentHookIndex = 0;
};
