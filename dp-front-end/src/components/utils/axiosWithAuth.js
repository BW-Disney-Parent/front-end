import axios from 'axios'

export default function axiosWithAuth() {

    return axios.create({
        baseURL: 'https://disney-parent-lambda.herokuapp.com/api/auth/login',
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}