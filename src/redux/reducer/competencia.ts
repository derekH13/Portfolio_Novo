import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialType = {
    itens: 'frontend' | 'backend' | 'banco' | 'outros'
}

const initialState: initialType = {
    itens: 'frontend'
}

const competenciaSlice = createSlice({
    name: 'competencia',
    initialState,
    reducers: {
        mostarCompetencia: (state, action: PayloadAction<'frontend' | 'backend' | 'banco' | 'outros'>) => {
            state.itens = action.payload
            console.log(state.itens);
            
        }
    }
})

export const { mostarCompetencia } = competenciaSlice.actions

export default competenciaSlice.reducer