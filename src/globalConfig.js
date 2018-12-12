import React from 'react'

import axios from 'axios'
// 将 axios 挂载 到 父类的 原型上；
React.Component.prototype.$http = axios

import qs from 'qs'

axios.defaults.transformRequest=[function(data){
    return qs.stringify(data)
}]
