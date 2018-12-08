// 1.导入react react-dom 
import React from 'react'
import ReactDom from 'react-dom'

//2.创建虚拟dom元素
//组件名首字母要大写
//引用文件时要加上后缀名
import Hello from './components/Hello.jsx'

const dog={
  name: 'xiaobai',
  age: 2,
  gender: '公'
}

class Person {
  constructor(name,age){
    this.name=name
    this.age=age
  }
  //前面加了static 的就是静态属性
  static info='aaa'
  gender='男'
  static show(){
    console.log('这是静态方法')
  }
  say(){
    console.log('这是实例方法')
  }
}
//创建实例
const p1=new Person('zs',18)
console.log(p1)
console.log(Person.info)
console.log(p1.gender)
Person.show()
p1.say()

//3.使用react-dom 把虚拟dom渲染到页面上

ReactDom.render(<div>
  父组件
  {/* <Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello> */}
  {/* 展开运算符 */}
  <Hello {...dog}></Hello>
</div>,document.querySelector('#app'))