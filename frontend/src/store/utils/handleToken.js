const handleToken = {
    storeToken: (token) => {
        localStorage.setItem('token', token)
    },
    removeToken: () => {
        localStorage.removeItem('token')
    }
}

export default handleToken