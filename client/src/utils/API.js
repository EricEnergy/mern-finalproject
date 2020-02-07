import axios from "axios";

export default {

    getPosts: function () {
        return axios.get('/api/posts')
    },

    removePost: function (id) {
        return axios.delete('/api/posts/' + id)
    },

    editPost: function (id, data) {
        return axios.put('/api/posts/' + id, data)
    },

    getimages: function (id) {
        return axios.put('/api/posts/' + id)
    },

    addPost: function (data) {
        return axios.post('/api/posts', data)
    },

    getAppts: function () {
        return axios.get('/api/appts')
    },

    addAppt: function (data) {
        return axios.post('/api/appts',data)
    },

//=========log in and sign up functions must be verified=================
    getAccounts: function () {
        return axios.get('/api/accounts')
    },


    userLogin: function (data) {
        return axios.post('/api/accounts/login' , data)
    },

    userSignUp: function (data) {
        return axios.post('/api/accounts/signup', data)
    }

}