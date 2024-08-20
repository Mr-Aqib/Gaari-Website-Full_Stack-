import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginUser } from './authService.js'

const userExsists=JSON.parse(localStorage.getItem('user'))
// Define the initial state
const initialState = {
    user: userExsists ? userExsists:null,
    userLoading: false,
    userMessage: '',
    userSucess: false,
    userError: null
}
// Creating aysncThunk function to handle function login from service
export const sigIn = createAsyncThunk('sign-in', async (frontendData, thunkAPI) =>
{
    try {
        return await loginUser(frontendData)

    } catch (error) {
        throw new Error(error)
    }
})
// Define the async action creator 
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sigIn.pending, (state, action) => {
                state.userLoading = true
            })
            .addCase(sigIn.rejected, (state, action) => {
                state.userLoading = false
                state.userMessage = action.payload
                state.userError = true
                state.user = null
            })
            .addCase(sigIn.fulfilled, (state, action) => {
                state.userSucess = true
            }
            )
    }
    
})
export default authSlice.reducer