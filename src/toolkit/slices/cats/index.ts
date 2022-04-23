import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from "../../../api/index";
import { ICategories, IFilters, IImages } from "../../../types";

export const fetchCategories = createAsyncThunk('cats/fetchCategories',
    async () => {
        const data = await api.getCategories()
        return data
    }
)

export const fetchImages = createAsyncThunk('cats/fetchImages',
    async (params: IFilters) => {
        const data = await api.getImages(params)
        return data
    }
)


const catsSlice = createSlice({
    name: 'cats',
    initialState: {
        categoryId: null as number | null,
        limit: 10 as number,
        categories: [] as ICategories[],
        images: [] as IImages[],
    },
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.images = action.payload
            })
    }

})

export const { setCategoryId, setLimit } = catsSlice.actions

export default catsSlice.reducer;