const responseHandler = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

class Api {
    constructor({path, token}) {
        this.path = path;
        this.token = token;
    }
    
    getPosts() {
        return fetch(`${this.path}/posts`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    getSinglePost() {
        return fetch(`${this.path}/posts/:id`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        }).then(responseHandler);
    }
    postPost() {
        return fetch(`${this.path}/posts`, {
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }
    
    getUsers() {
        return fetch(`${this.path}/users/`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this.token}`,
            }
        }).then(responseHandler);
    }
    
    getAllComments() {
        return fetch(`${this.path}/posts/comments/`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${this.token}`
            }
        }).then(responseHandler);
    }

    signup(body) {
        return fetch(`${this.path}/signup`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    login(body) {
        return fetch(`${this.path}/signin`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(responseHandler);
    }

    addPost(newPost) {
        return fetch(`${this.path}/posts`, {
            method: "post",
            headers: {
                authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        }).then(responseHandler);
    }
    getUser() {
        return fetch(`${this.path}/users/:userId`, {
            method: 'get',
            headers: {
                authorization: `Bearer ${this.token}`,
                
            },
        }).then(responseHandler)
    }

    getPersonalCard() {
        return fetch(`${this.path}/users/:userId`, {
            method: 'get',
            headers: {
                authorization: `Bearer ${this.token}`,
            },
        }).then(responseHandler)
    }
}


const config = {
    path: 'https://api.react-learning.ru',
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZhYWNlNzI2YzBiNzI5MDY1OGU2YWIiLCJpYXQiOjE2NTExNjQ2MTYsImV4cCI6MTY4MjcwMDYxNn0.61ANfGgvjUzSFNJu5DUHhsZK2BOimXWaHlC15s157_Q"
}

const api = new Api(config);

export default api;
