import { jwtDecode } from 'jwt-decode';

const checkTokenValidity = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        return false;
    }
    return true;
}

export default checkTokenValidity;
