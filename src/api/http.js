// import requestLoading from './requestloading'
import axios from 'axios';
import {
  getToken,
  removeToken
} from '@/utils/auth'
import store from '@/store'
import {
  Message
} from 'element-ui'
import router from '@/route'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

let message = false, timers = null;

const service = axios.create({
  baseURL: '/api',
  timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {
    let app_id = getAppId();
    app_id = -1
    const token = getToken();
    token && (config.headers.Authorization = token) && (config.headers.app_id = app_id);
    return config;
  }
)
async function getAppId () {
  let app_id = await store.state.user.appId;
  if (app_id === undefined || app_id === null || app_id === '') {
    app_id = "";
  }
  return app_id
}


// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    const status = response.status;
    // 判断请求状态
    if (status === 200) {
      if (res.code === 200 || res.code === 0) {
        return Promise.resolve(res.result);
      } else if (res.code === 401) {
        removeToken('token');
        router.replace({
          path: '/login',
        });
      } else {
        //判断错误信息是中文还是英文
        Message.error(res.msg)
        return Promise.reject(res);
      }
    } else {
      Message.error(res.msg);
      return Promise.reject(res);
    }
  },
  error => {
    if (error.response.status) {
      if (message) {
        clearTimeout(timers);
        timers = setTimeout(() => {
          message = false;
        }, 1000);
        return Promise.reject(error.response);
      } else {
        message = true;
        switch (error.response.status) {
          case 401:
            // Message.error('登录已过期')
            store.dispatch("user/overdue");
            break;
          case 403:
            Message.error('权限不足')
            break;
          case 404:
            Message.error('网络请求不存在');
            break;
          case 503:
            Message.error('服务不可用');
            break;
          case 500:
            Message.error('内部服务器错误');
            break;
          case 10018:
            Message.error('请登录');
            router.replace({
              path: '/login',
            });
            break;
          // 其他错误，直接抛出错误提示
          default:
            Message.error('请求超时!')
        }
        return Promise.reject(error.response);
      }
    }
  })

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
  });
}

/**
 * 导出Excel
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getFile (url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params,
      responseType: 'blob'
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      })
  });
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}

/**
 * 封装delete请求
 * @param url
 * @param params
 * @returns {Promise}
 */

export function remove (url, params = {}) {
  return new Promise((resolve, reject) => {
    service.delete(url, {
      data: params
    })
      .then(res => {
        resolve(res);
      }, err => {
        reject(err)
      })
  })
}
/**
 * 封装put请求
 * @param url
 * @param params
 * @returns {Promise}
 */

export function put (url, params = {}) {
  return new Promise((resolve, reject) => {
    service.put(url, params)
      .then(res => {
        resolve(res);
      }, err => {
        reject(err)
      })
  })
}
