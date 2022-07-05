import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { beerApi } from "../constants/beer.api";
import { withOutTokenGet } from "../services/common.service";

export const getBeerWithPagination = createAsyncThunk("get_beer_with_pagination",
    (page_number) => withOutTokenGet(beerApi.GET_BEERS_WITH_PAGINATION + `page=${page_number}&per_page=12`));

export const getBeerWithFilter = createAsyncThunk("get_beer_with_filter",
    (food) => withOutTokenGet(beerApi.GET_BEERS_WITH_FILTER + `food=${food}`));

const initialState = {
    status: null,
    data: null,
    favorites: [],
    filterData: []
};

export const beerSlice = createSlice({
    name: "beerSlice",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            let favorites = state.favorites;
            favorites.push(action.payload);
            state.favorites = favorites;
        },
        removeFavorite: (state, action) => {
            let favorites = state.favorites;
            favorites = favorites.filter((item) => item.id !== action.payload)
            state.favorites = favorites;
        },
        clearFavorites: (state, action) => {
            state.favorites = [];
        },
        setFilterData: (state) => {
            state.filterData = [];
        },


        addRank: (state, action) => {
            let favorites = state.favorites;
            let index = favorites.findIndex(item => item.id == action.payload.id);
            let data = favorites[index];
            data = { ...data, rank: action.payload.value };
            favorites[index] = data;
            state.favorites = favorites;
        }
    },
    extraReducers: {
        [getBeerWithPagination.pending]: (state, action) => {
            state.status = "pending";
        },
        [getBeerWithPagination.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
        },
        [getBeerWithPagination.rejected]: (state, action) => {
            state.status = "rejected";
        },


        [getBeerWithFilter.pending]: (state, action) => {
            state.status = "pending";
        },
        [getBeerWithFilter.fulfilled]: (state, action) => {
            state.status = "fulfilled";
            state.filterData = action.payload;
        },
        [getBeerWithFilter.rejected]: (state, action) => {
            state.status = "rejected";
        },
    },
});


export const { addFavorite, removeFavorite, clearFavorites, setFilterData, addRank } = beerSlice.actions;
export default beerSlice.reducer;
