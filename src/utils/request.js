/**
 * @author luof
 * @date 2024/9/18 21:26
 */
import axios from 'axios';
import {message} from "ant-design-vue";
import router from "@/router/index.js";

// import config from '@/config'
// 创建一个自定义的Axios对象
const Axios = axios.create({

    baseURL: import.meta.env.VUE_APP_API_BASE_URL,
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json'
    },
});

/**
 * 请求拦截器
 */
Axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
}, err => {
    console.log('在发送请求时发生错误，错误为', err);
    //这里不能直接放回err,需要按照官方说明返回一个Promise
    return Promise.reject(err);
})

/**
 * 响应拦截处理
 */
Axios.interceptors.response.use(res => {
    return res.data;
}, error => {
    if (error.response?.status === 401) {
        message.error("请重新登录");
        localStorage.clear();
        router.push('/login'); // 跳转到登录页面
    } else {
        let error_message = error.response?.data?.message || error.message;
        message.error(error_message);
    }
    return Promise.reject(error);
})

export default Axios;
