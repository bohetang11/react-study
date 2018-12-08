// 1.导入react react-dom 
import React from 'react'
import ReactDom from 'react-dom'

//2.创建虚拟dom元素

const myh1=React.createElement('h1',{id:'myh1',title:'this is a h1'},'这是一个h1元素')
const mydiv=React.createElement('div',null,'哈哈',myh1)

//3.使用react-dom 把虚拟dom渲染到页面上

ReactDom.render(mydiv,document.querySelector('#app'))