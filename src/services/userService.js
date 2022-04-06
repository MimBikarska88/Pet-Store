const baseUrl = 'http://localhost:3030/users';

export const getUser = () => {
    let user = localStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    } else {
        return undefined;
    }
}
export const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}
export const deleteUser = () => {
    localStorage.removeItem('user');
}
export const login = (email, password) =>
    fetch(`${baseUrl}/login`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json());

export const register = (email, password) =>
    fetch(`${baseUrl}/register`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json());
export const logout = () =>
    fetch(`${baseUrl}/logout`, {
        headers: {
            'X-Authorization': getUser().accessToken
        }
    });