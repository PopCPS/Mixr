import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { IStates } from "../../utils/interfaces/states";

const initialState: IStates = {
  isPlaying: false,
  isAboutOpen: false,
  trackIndex: undefined,
  aboutIndex: 0,
}

export const dataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    set_isPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload
    },
    set_isAboutOpen: (state, action: PayloadAction<boolean>) => {
      state.isAboutOpen = action.payload
    },
    set_trackIndex: (state, action: PayloadAction<number>) => {
      state.trackIndex = action.payload
    },
    set_aboutIndex: (state, action: PayloadAction<number>) => {
      state.aboutIndex = action.payload
    },
  }
})

export const {
  set_isPlaying,
  set_isAboutOpen,
  set_trackIndex,
  set_aboutIndex,
} = dataSlice.actions

export default dataSlice.reducer