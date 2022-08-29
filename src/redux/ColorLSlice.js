import { createSlice } from "@reduxjs/toolkit";
import { rand, randLong, randColor } from "./ColorSlice";

export const ColorLSlice = createSlice({
  name: "ColorL",
  initialState: {
    // linear color
    colorL: [],
    colorFilterL: [],
    colorFinishL: [],
  },
  reducers: {
    addColorL: (state, action) => {
      const { colorL, colorFinishL, colorFilterL } = state;

      //set color and push color if colorFinish length == 0
      state.colorL = [
        ...state.colorL,
        ...randColor(200),
        ...state.colorFilterL,
      ];

      if (state.colorL.length > 0) {
        let count = 0;
        let linear = []; // {c1, c2, deg, id}
        let colorarray = [];
        state.colorL.forEach((e, i) => {
          let randDeg = rand(200);
          let id = randLong();

          if (state.colorL.includes(e) && !state.colorFilterL.includes(e)) {
            //check count > 2 true or false
            //true
            if (count > 2) {
              state.colorFinishL.push({
                c1: linear[0],
                c2: linear[1],
                deg: randDeg,
                id,
              });
              count = 0;
              linear = [];
            } else {
              count++;
              linear.push(e);
            }
          }
        });
      }
    },
  },
});

export const { addColorL } = ColorLSlice.actions;
export default ColorLSlice.reducer;
