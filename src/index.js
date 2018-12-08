// 1.导入react react-dom 
import React from 'react'
import ReactDom from 'react-dom'

//2.创建虚拟dom元素

import Movie from "@/07.class创建组件"
const dog={
  name: 'xiaobai',
  age: 2,
  gender: '公'
}


import '@/06.class继承.js'

//3.使用react-dom 把虚拟dom渲染到页面上

ReactDom.render(<div>
  <Movie {...dog}></Movie>
</div>,document.querySelector('#app'))