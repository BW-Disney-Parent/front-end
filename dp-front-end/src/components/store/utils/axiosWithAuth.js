import axios from 'axios';

export default function axiosWithAuth() {

    return axios.create({
        baseURL: 'https://disney-parent-lambda.herokuapp.com/api/',
        headers: {
            Authorization: localStorage.getItem("Authorization")
        }
    })
}