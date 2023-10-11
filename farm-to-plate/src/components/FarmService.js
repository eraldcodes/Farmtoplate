import axios from 'axios';


class FarmService {

    getFarms(){
        return axios.get("http://localhost:8080/user");
    }}
    export default new FarmService()
