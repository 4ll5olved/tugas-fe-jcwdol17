import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:2000",
});

// api.get("/products"); //getall
// api.get("/users"); //slice data
// api.delete("/products/1"); //delete data num 1
// // so does with all the method, yu figure it out

// axios.get("https://localhost:2000.com")