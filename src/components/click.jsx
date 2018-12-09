import React from "react"

export default class Btn extends React.Component{
    constructor(){
        super()
    }
    render(){
        // return <button onClick={this.handelClick}>按钮</button>
        return <button onClick={()=>{this.handelClick(1)}}>按钮</button>
    }

    handelClick(a){
        console.log(a+1)
    }
}