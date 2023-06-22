import React,{Component} from "react";

export default class Classcomponent extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    ChangeCounter =()=>
    {
        this.setState({
            count:this.state.count + 100
        })
    }
    render()
    {
        return(
            <>
            total class count is:{this.state.count}<br></br>
            <button onClick={this.ChangeCounter}>Click Me!</button>
            </>
        )
    }

}