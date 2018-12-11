import React from 'react'

export default class Child extends React.Component{
    constructor(props){
        super()
        this.state={
            count: props.c
        }
    }
    render(){
        return <div>
            <h1>数值:{this.props.c}</h1>
            <h1>{this.state.count}</h1>
        </div>
    }
    componentWillReceiveProps(nextProps,nextState){
        console.log(nextProps.c,nextState)
        this.setState({count:nextProps.c})
    }
}