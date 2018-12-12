// 1.导入react react-dom 
import React from 'react'
import ReactDom from 'react-dom'



//2.创建虚拟dom元素

import Movie from "@/07.class创建组件"
const dog={
  name: 'xiaobai',
  gender: '公'
}


import Cmtlist from '@/components/cmtList.jsx'
import Btn from '@/components/click.jsx'
import Child from '@/08.生命周期函数.js'
import Get from '@/components/get'

class Parents extends React.Component{
  constructor(){
    super()
    this.state={
      c:100
    }
  }
  render(){
    return <div>
      <Get></Get>
      <button onClick={()=>this.add()}>点击加1</button>
      <h1>{this.state.c}</h1>
      <hr/>
      <Child c={this.state.c}></Child>
      <Movie {...dog}></Movie>
    </div>
  }
  add(){
    this.setState({c:this.state.c+1})
  }
  
}



// import '@/06.class继承.js'

//3.使用react-dom 把虚拟dom渲染到页面上

ReactDom.render( < div > 
 <Parents></Parents>
<Cmtlist> < /Cmtlist> 
<Btn></Btn>
</div>,document.querySelector('#app'))