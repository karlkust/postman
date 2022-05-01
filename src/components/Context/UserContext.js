import { createContext } from "react";

export const UserCtx = createContext({
    token: "",
    user: "",
    setToken: () => {},
    setUser: () => {},
});

export const UserValue = {
    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjZhYWNlNzI2YzBiNzI5MDY1OGU2YWIiLCJpYXQiOjE2NTExNjQ2MTYsImV4cCI6MTY4MjcwMDYxNn0.61ANfGgvjUzSFNJu5DUHhsZK2BOimXWaHlC15s157_Q",
    user: localStorage.getItem("user") || "",
    setUser: (id) => {
        console.log(this.user);
        // this.user = id;
        localStorage.setItem("user", id);
    }
}