import React from 'react'

import Types from 'prop-types'

export default class Movie extends React.Component{
    // 限制父组件传过来的值的类型(类型校验)
    static propTypes={
        name: Types.string.isRequired
    }
    // 默认值
    static defaultProps={
        name: 'xiaoming'
    }

    constructor(props){
        super()
        this.state={
            msg:'这是组件中的私有值',
            sex:props.gender
        }
    }
    componentWillMount(){
        console.log(document.getElementById('myp'))
    }
    componentDidMount(){
        console.log(document.getElementById('myp').innerText)
        this.setState({sex:'母'})
    }
    componentWillReceiveProps(){

    }
    shouldComponentUpdate(nextProps,nextState){
        // 要获取最新的值要用nextState.xxx来获取
        return true
    }
    render(){
        return <div>
            <p id='myp'>这是movie组件--{this.props.name}</p>
            <p>{this.state.msg}</p>
            <h1>{this.state.sex}</h1>
        </div>
    }
}