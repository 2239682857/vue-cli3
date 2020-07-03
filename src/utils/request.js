import axios from 'axios'
import {Message} from 'element-ui'
import {baseUrl} from '@/utils/global.js'

// create an axios instance

let OK = 20000;//成功
let ERROR = 20001;//失败
let LOGIN_ERROR = 20002;//用户名或密码错误
let ACCESS_ERROR = 20003;//权限不足
let REMOTE_ERROR = 20004;//远程调用失败
let REP_ERROR = 20005;//重复操作

const service = axios.create({
    baseURL: baseUrl, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 50000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent

        /*if (store.getters.token) {
          // let each request carry token
          // ['X-Token'] is a custom headers key
          // please modify it according to the actual situation
          config.headers['admin-token'] = getToken()
    /!**!/
        } else {
        }*/
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data;
        // if the custom code is not 20000, it is judged as an error.
        if (res.flag) {
            if (res.code == null || res.code == ERROR) {
                console.error("Error Info", res);
                Message({
                    message: "服务器错误，请联系管理员",
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject(res.message);
            } else if (res.code == LOGIN_ERROR) {
                Message({
                    message: "用户名或密码错误",
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject("用户名或密码错误")
            } else if (res.code == ACCESS_ERROR) {
                Message({
                    message: "权限不足",
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject("权限不足")
            } else if (res.code == REMOTE_ERROR) {
                Message({
                    message: "远程调用失败",
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject("远程调用失败")
            } else if (res.code == REP_ERROR) {
                Message({
                    message: "重复操作",
                    type: 'error',
                    duration: 5 * 1000
                })
                return Promise.reject("重复操作")
            } else if (res.code == OK) {
                return res
            }
        }
    },
    error => {
        console.log('err' + error) // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default service
