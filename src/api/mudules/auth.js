import axios from 'axios'
import { API_ROOT } from '../../config'

export default {
    login(username, password) {
        return axios.post(API_ROOT + '/login', {
            username: username,
            password: password
        })
    }
}