import axios from 'axios'


export default axios.create({
    baseURL: 'http://playonnuat-env.eba-ernpdw3w.ap-south-1.elasticbeanstalk.com/api/v1/establishment/test/list?offset=0&limit=10'
})