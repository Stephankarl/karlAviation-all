import axios from 'axios';
import * as actions from '../api';

import handleToken from '../utils/handleToken'

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const { url, method, data, onStart, onSuccess, onError } = action.payload

    const bearerToken = localStorage.getItem('token')

    if (onStart) dispatch({ type: onStart })

    next(action)

    try {
        const config = {
            headers: { Authorization: `Bearer ${bearerToken}` }
        }
        const res = await axios.request({
            method,
            url,
            headers: config.headers,
            data
        })

        switch (onSuccess) {
            case 'user/authCallSuccess':
                handleToken.storeToken(res.data.data)
                break;
            case 'USER_LOGOUT':
                handleToken.removeToken()
                break;
            default:
                break;
        }

        dispatch(actions.apiCallSuccess(res.data))
        dispatch({ type: onSuccess, payload: res.data})
    } catch (err) {
        dispatch(actions.apiCallFailed(err.message))
        dispatch({ type: onError, payload: err.message })
    }
}

export default api