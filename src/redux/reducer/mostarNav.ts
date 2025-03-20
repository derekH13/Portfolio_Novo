import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialType = {
    itens: boolean
}

const initialState: initialType = {
    itens: false
}

const mostarNavSlice = createSlice({
    name: 'mostarNav',
    initialState,
    reducers: {
        mostarNav: (state, action: PayloadAction<boolean>) => {
            state.itens = action.payload
            console.log(state.itens);
            
        }
    }
})

export const { mostarNav } = mostarNavSlice.actions

export default mostarNavSlice.reducer