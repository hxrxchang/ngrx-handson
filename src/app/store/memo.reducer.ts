import { createReducer } from '@ngrx/store';

interface State {
  memo: string[];
}

const initialState: State = {
  memo: []
};

export const memoReducer = createReducer(initialState);
