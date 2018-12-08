// 1.导入react react-dom 
import React from 'react'
import ReactDom from 'react-dom'

//2.创建虚拟dom元素
//组件名首字母要大写
function Hello(props){
  console.log(props)
  //props为只读属性,不能被重新赋值
  return <div>子组件--{props.name}--{props.age}--{props.gender}</div>;
}

const dog={
  name: 'xiaobai',
  age: 2,
  gender: '公'
}

//3.使用react-dom 把虚拟dom渲染到页面上

ReactDom.render(<div>
  父组件
  {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
  {/* 展开运算符 */}
  <Hello {...dog}></Hello>
</div>,document.querySelector('#app'))