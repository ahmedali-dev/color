import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const lightOrDark = (color) => {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "light";
  } else {
    return "dark";
  }
};
export const rand = (e) => Math.floor(Math.random() * e);
export const randLong = () => Math.floor(Math.random() * 9000000000);
export const randColor = (count) => {
  const a2 = [
    "aa",
    "ab",
    "ac",
    "ad",
    "ba",
    "bb",
    "bc",
    "bd",
    "ca",
    "cb",
    "cc",
    "cd",
    "da",
    "db",
    "dc",
    "dd",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
  ];

  const returnColor = [];
  for (let i = 0; i < count; i++) {
    const len = a2.length;
    let p1 = a2[rand(len)];
    let p2 = a2[rand(len)];
    let p3 = a2[rand(len)];

    if (p1 != p2 || p2 != p3) {
      const c = "#" + p1 + p2 + p3;
      returnColor.push(c);
    }
  }

  return returnColor;
};

export const ColorSlice = createSlice({
  name: "product",
  initialState: {
    color: [],
    colorFilter: [],
    colorFinish: [],
  },
  reducers: {
    addColor: (state, action) => {
      // state.colorFinish.push(randColor(500));

      //set color and push color if colorFinish length == 0
      state.color = [...state.color, ...randColor(200), ...state.colorFilter];

      //get state.color and filter similar color
      if (state.color.length > 0) {
        let colorSplit = 0;
        let colorSplitarray = [];
        state.color.forEach((e, i) => {
          if (state.color.includes(e) && !state.colorFilter.includes(e)) {
            if (colorSplit < 5) {
              colorSplitarray.push([e, lightOrDark(e)]);
              colorSplit++;
            } else {
              state.colorFilter.push({
                hex: colorSplitarray,
                id: randLong(),
              });
              colorSplitarray = [];
              colorSplit = 0;
            }
          }
        });
      }

      //set colorFilter object in colorFinish
      state.colorFinish.push(...state.colorFilter);
      //and remove color from array color
      state.color = [];
    },
  },
});

export const { addColor } = ColorSlice.actions;

export default ColorSlice.reducer;
