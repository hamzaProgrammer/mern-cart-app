import {loginStart ,  loginFailure } from './userReducer'
import { loginFunc } from '../server_api/Api'


export const login = async(dispatch , user) => {
    dispatch(loginStart());
    try {
        const { data } = await loginFunc(user)
        console.log(data)
    } catch (error) {
        dispatch(loginFailure())
    }
}