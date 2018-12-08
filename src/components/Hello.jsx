// 1.导入react react-dom 
import React from 'react'

export default function Hello(props){
  // console.log(props)
  //props为只读属性,不能被重新赋值
  return <div>子组件--{props.name}--{props.age}--{props.gender}</div>;
}

// export default Hello