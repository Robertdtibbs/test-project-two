// this file is for hitting our customer register end point
import Api from '@/services/Api'

export default {
    register (info) {
        return Api().post('register', info)
    }
}

// CustomerRegister.register({
//     email: 'testing@gmail.com',
//     password: 'thisisIt'
// })