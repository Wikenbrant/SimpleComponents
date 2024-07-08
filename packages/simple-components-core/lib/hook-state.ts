import { HookState } from "./hooks";
import type { FunctionComponent, FunctionVNode } from "./vNode";

type GlobalHookState = {
  hooks: HookState[];
};

const globalHookState = new Map<
  FunctionComponent,
  Map<number, GlobalHookState>
>();

let currentState: GlobalHookState | undefined;
let currentHookIndex = 0;

const setCurrentComponentState = (node: FunctionVNode) => {
  let functionState = globalHookState.get(node.function);
  if (!functionState) {
    functionState = new Map();
    globalHookState.set(node.function, functionState);
  }
  let state = functionState.get(node.id);

  if (!state) {
    state = {
      hooks: [],
    };
    functionState.set(node.id, state);
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

const resetHookIndex = () => {
  currentHookIndex = 0;
};

export const renderFunctionComponent = (node: FunctionVNode, props: any) => {
  setCurrentComponentState(node);
  const result = node.function(props);
  resetHookIndex();

  return result;
};
