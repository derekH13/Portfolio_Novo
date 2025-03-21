import { configureStore } from '@reduxjs/toolkit'
import navReducer from './reducer/mostarNav'
import competenciReducer from './reducer/competencia'


const store = configureStore({
    reducer: {
        mostarNav: navReducer,
        mostarCompetencia: competenciReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store