import axios from "./http"

const cases = {
    creatCaseByText(params){
        return axios.post('/testCase/text',params)
    },
    creatCaseByFile(params){
        return axios.post('/testCase/text',params)
    }
}
export default cases