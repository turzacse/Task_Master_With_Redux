import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: 'Turza',
    email: 'turza@gmail.com',
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers: {},
});

export default userSlice.reducer;