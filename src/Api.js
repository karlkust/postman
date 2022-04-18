const responseHandler = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    getPostList() {
        return fetch(`${this.path}/posts`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
}

const config = {
    path: 'https://api.react-learning.ru',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU1YTVmNTk0N2M3MjkyZDhjMjA0ZTkiLCJpYXQiOjE2NDk3ODAyMTksImV4cCI6MTY4MTMxNjIxOX0.rKMiNAcYsxkJAPdbjlYJ-py6VY0Ko4S6WDB7_rZBbUU'
}

const api = new Api(config)

export default api;
