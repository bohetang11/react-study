import React from "react"

export default class Submit extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return <div>
            评论人: <input ref='user' type='text'/>   
            评论内容: <input ref='content' type='text'/>   
            <button onClick={()=>this.postCmt()}>提交评论</button>
        </div>
    }
    postCmt=()=>{
        const user=this.refs.user.value
        const content=this.refs.content.value
        if(user.trim().length==0 ||content.trim().length==0) return alert('信息不完整!')
        const cmtobj={id:Date.now(),user,content}
        // console.log(cmtobj)
        this.props.func(cmtobj)
    }
}