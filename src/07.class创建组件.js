import React from 'react'

export default class Movie extends React.Component{
    constructor(){
        super()
        this.state={
            msg:'这是组件中的私有值',
            // sex:this.props.gender
        }
    }
    render(){
        return <div>
            这是movie组件--{this.props.name}--{this.props.age}--{this.props.gender}
            <p>{this.state.msg}</p>
        </div>
    }
}