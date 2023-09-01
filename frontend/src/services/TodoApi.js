import axios from "axios"

const BASE_URL = "http://localhost:8080/api/"

class TodoApi {


    //CREATE
    todoApiCreate(todoDto) {
        return axios.post(`${BASE_URL}create`, todoDto)
    }

    //LIST
    todoApiList() {
        return axios.get(`${BASE_URL}list`)
    }

    //FIND
    todoApiFindById(id) {
        return axios.get(`${BASE_URL}find/${id}`)
    }

    //UPDATE
    todoApiUpdate(id, todoDto) {
        return axios.put(`${BASE_URL}update/${id}`, todoDto)
    }

    //DELETE
    todoApiDelete(id) {
        return axios.delete(`${BASE_URL}delete/${id}`)
    }

    // delete all todo

}

export default new TodoApi();