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
        CVV: 123,
        vendor: "JCB",
      },
      {
        id: 2,
        number: 123456,
        activate: false,
        holder: "Dan Isacson",
        expire: "2/2025",
        CVV: 123,
        vendor: "AMEX",
      },
    ],
  },
  reducers: {
    addCard: (state, action) => {
      if (state.cards.length < 4) {
        state.cards = [...state.cards, action.payload];
        alert("Card has created.");
      } else {
        alert("Max 4 cards");
      }
    },
    deleteCard: (state, action) => {
      state.cards = state.cards.filter((card) => {
        return card.id !== action.payload.id;
      });
      console.log(state.cards);
    },
    editCard: (state, action) => {
      state.cards = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          return (card = action.payload);
        } else {
          return card;
        }
      });
    },
  },
});

export default cardSlice.reducer;
export const { addCard, deleteCard, editCard } = cardSlice.actions;
