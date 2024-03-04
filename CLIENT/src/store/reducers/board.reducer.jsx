import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../config";
import { toastFNC } from "../../config/toast";
import { arrayMove } from "@dnd-kit/sortable";

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
export const ReOrderPosition = createAsyncThunk("board/ReOrderPosition", async (data) => {
    try {
        const res = await axios.post(
        api + `list/${data.list_id}/${data.board_id}`,
        {
            position: data.position + 1,
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
  reducers: {
    reorderList: (state, action) => {
      const { oldIndex, newIndex } = action.payload;
      state.board.lists = arrayMove(state.board.lists, oldIndex, newIndex);
    },
  },
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
      })
      .addCase(ReOrderPosition.pending , (state,action) => {

      })
      .addCase(ReOrderPosition.fulfilled, (state, action) => {
        if(action.payload.status != 201){
          toastFNC("Reorder Failed", "error");
          return 
        }
      })
  },
});

export default boardSlice.reducer;
export const { reorderList } = boardSlice.actions;