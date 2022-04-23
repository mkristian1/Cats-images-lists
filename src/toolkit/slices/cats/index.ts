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
        page: 1 as number,
        categories: [] as ICategories[],
        images: [] as IImages[],
    },
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        clearDataImages: (state) => {
            state.images = []
            state.page = 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                return { ...state, images: [...state.images, ...action.payload] }
            })
    }

})

export const { setCategoryId, setPage, clearDataImages } = catsSlice.actions

export default catsSlice.reducer;