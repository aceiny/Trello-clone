import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../config";
import { toastFNC } from "../../config/toast";

export const getBoards = createAsyncThunk("board/getBoards", async (data) => {
  try {
    const res = await axios.get(api + "board", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
});
export const getBoard = createAsyncThunk("board/getBoard", async (id) => {
  try {
    const res = await axios.get(api + `board/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res;
  } catch (err) {
    return err.response;
  }
});
export const addList = createAsyncThunk("board/addList", async (data) => {
  try {
    const res = await axios.post(
      api + `list/${data.id}`,
      {
        name: data.name,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return res;
  } catch (err) {
    return err.response;
  }
});
export const addCard = createAsyncThunk("board/addCard", async (data) => {
    try {
        const res = await axios.post(
        api + `card/${data.id}`,
        {
            name: data.name,
        },
        {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
        );
        return res;
    } catch (err) {
        return err.response;
    }
}
);
const initialState = {
  boards: null,
  pendingBoards: false,
  board: null,
  pendingBoard: false,
};

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBoards.pending, (state) => {
        state.pendingBoards = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.pendingBoards = false;
        if (action.payload.status === 200) {
          state.boards = action.payload.data;
        }
      })
      .addCase(getBoards.rejected, (state) => {
        state.pendingBoards = false;
        toastFNC("Boards Fetch Failed", "error");
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
        toastFNC("Board Fetch Failed", "error");
      })
      .addCase(addList.pending, (state) => {
        state.pendingBoard = true;
      })
      .addCase(addList.fulfilled, (state, action) => {
        state.pendingBoard = false;
        if (action.payload.status === 201) {
            state.board.lists.push(action.payload.data);  
        }
      });
  },
});

export default boardSlice.reducer;
