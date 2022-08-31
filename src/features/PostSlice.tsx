import { createSlice } from "@reduxjs/toolkit";

export interface PostState {
  id: string;
  header: string;
  content: string;
}

const initialState: PostState[] = [
  { id: '1', header: 'Header A', content: 'Content A' }
]

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    },
    postEdited(state, action) {
      const { payload }: { payload: PostState } = action;
      const idx = state.findIndex(post => post.id === payload.id)
      if (idx !== -1) state.splice(idx, 1, payload);
    }
  }
});

export const { postAdded, postEdited } = postSlice.actions

export default postSlice.reducer