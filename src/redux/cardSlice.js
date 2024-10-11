import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "Card",
  initialState: {
    cards: [
      {
        id: 1,
        number: 123456,
        activate: true,
        holder: "Yukako Sakozono",
        expire: "2/2025",
        CCV: 123,
        vendor: "Nordea",
      },
    ],
  },
  reducers: {},
});

export default cardSlice.reducer;
