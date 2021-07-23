import axios from "./http"

const user={
    login(params){
        return axios.post('/user/login',params)
    },
    register(params){
        return axios.post('/user/register',params)
    }
}
export default user