import axios from 'axios';
import { setAlert } from './alert';
import {
    POST_SUCCESS,
    POST_FAIL,
} from './types';


export const post = (title, description,need_type) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ title, description,need_type });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/listings/create`, body, config);

        dispatch({
            type: POST_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert('Posted successfully', 'success'));
    } catch (err) {
        dispatch({
            type: POST_FAIL
        });
        dispatch(setAlert('Error in POST', 'error'));
    }
};
