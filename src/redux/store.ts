import { configureStore } from '@reduxjs/toolkit'
import navReducer from './reducer/mostarNav'


const store = configureStore({
    reducer: {
        mostarNav: navReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store