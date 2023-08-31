import axios from "axios"



class TodoApi {


    //CREATE
    todoApiCreate(todoDto) {
        return axios.post('/create', todoDto)
    }

    //LIST
    todoApiList() {
        return axios.get('/list')
    }

    //FIND
    todoApiFindById(id) {
        return axios.get(`/find/${id}`)
    }

    //UPDATE
    todoApiUpdate(id, todoDto) {
        return axios.put(`/update/${id}`, todoDto)
    }

    //DELETE
    todoApiDelete(id) {
        return axios.delete(`/delete/${id}`)
    }

    // delete all todo

}

export default new TodoApi();