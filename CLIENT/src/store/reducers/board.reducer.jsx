import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { api } from '../../config';
import { toastFNC } from '../../config/toast';
import { logout } from './auth.reducer';

export const addBoard = createAsyncThunk('board/addBoard', async (data) => {
  try {
    const res = await axios.post(
      api + 'board',
      {
        name: data,
        description: '',
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );
    return res;
  } catch (err) {
    return err.response;
  }
});
export const getBoards = createAsyncThunk('board/getBoards', async (data) => {
  try {
    const res = await axios.get(api + 'board', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
});
export const getBoard = createAsyncThunk('board/getBoard', async (id) => {
  try {
    const res = await axios.get(api + `board/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
});
export const addList = createAsyncThunk('board/addList', async (data) => {
  try {
    const res = await axios.post(
      api + `list/${data.id}`,
      {
        name: data.name,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );
    return res;
  } catch (err) {
    return err.response;
  }
});
export const ReOrderPosition = createAsyncThunk(
  'board/ReOrderPosition',
  async (data) => {
    try {
      const res = await axios.post(
        api + `list/${data.list_id}/${data.board_id}`,
        {
          position: data.position + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      return res;
    } catch (err) {
      return err.response;
    }
  },
);
export const addCard = createAsyncThunk('board/addCard', async (data) => {
  try {
    const res = await axios.post(
      api + `card/${data.id}`,
      {
        name: data.name,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    );
    return res;
  } catch (err) {
    return err.response;
  }
});
const initialState = {
  boards: null,
  pendingBoards: false,
  board: null,
  pendingBoard: false,
  pendingAddBoard: false,
  pendingCard: false,
  fetchErr: false,
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    reorderList: (state, action) => {
      const { oldIndex, newIndex } = action.payload;
      state.board.lists = state.board.lists.map((list, index) => {
        if (index === oldIndex) {
          return state.board.lists[newIndex];
        }
        if (index === newIndex) {
          return state.board.lists[oldIndex];
        }
        return list;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, (state) => {
        state.pendingBoards = true;
        state.fetchErr = false;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.pendingBoards = false;
        console.log('1');
        if (action.payload.status === 200) {
          state.boards = action.payload.data;
          state.fetchErr = false;
        } else {
          toastFNC('invalid session', 'error');
          state.fetchErr = true;
        }
      })
      .addCase(getBoards.rejected, (state) => {
        state.pendingBoards = false;
        toastFNC('Boards aFetch Failed', 'error');
      })
      .addCase(getBoard.pending, (state) => {
        state.pendingBoard = true;
      })
      .addCase(getBoard.fulfilled, (state, action) => {
        state.pendingBoard = false;
        if (action.payload.status === 200) {
          state.board = action.payload.data;
        }
      })
      .addCase(getBoard.rejected, (state) => {
        state.pendingBoard = false;
        toastFNC('Board Fetch Failed', 'error');
      })
      .addCase(addList.pending, (state) => {})
      .addCase(addList.fulfilled, (state, action) => {
        if (action.payload.status === 201) {
          state.board.lists.push(action.payload.data);
        }
      })
      .addCase(ReOrderPosition.pending, (state, action) => {})
      .addCase(ReOrderPosition.fulfilled, (state, action) => {
        if (action.payload.status != 201) {
          toastFNC('Reorder Failed', 'error');
          return;
        }
      })
      .addCase(addBoard.pending, (state) => {
        state.pendingAddBoard = true;
      })
      .addCase(addBoard.fulfilled, (state, action) => {
        state.pendingAddBoard = false;
        if (action.payload.status === 201) {
          state.boards.push(action.payload.data);
          toastFNC('Board Created', 'success');
        } else {
          toastFNC('Board Creation Failed', 'error');
        }
      })
      .addCase(addBoard.rejected, (state) => {
        state.pendingAddBoard = false;
        toastFNC('Board Creation Failed', 'error');
      })
      .addCase(addCard.pending, (state) => {
        state.pendingCard = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.pendingCard = false;
        if (action.payload.status === 201) {
          state.board.lists = state.board.lists.map((list) => {
            if (list._id === action.payload.data.list) {
              list.cards.push(action.payload.data);
            }
            return list;
          });
        }
      });
  },
});

export default boardSlice.reducer;
export const { reorderList } = boardSlice.actions;
