import React from 'react'

import '@/globalConfig.js'
export default class HandelGet extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return <div>
            <button onClick={()=>this.handelGet()}>发送get请求</button>
        </div>
    }
    handelGet=async ()=>{
        console.log(1)
        this.$http.post('http://klxin.cn:8899/api/post',{name:'zs',age:18}).then(res=>{
          console.log(res)
        })
        const {data}=await this.$http.post('http://klxin.cn:8899/api/post',{name:'zs',age:18})
        console.log(data)
      }

      
    
}