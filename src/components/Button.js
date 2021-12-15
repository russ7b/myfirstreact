import React from "react"

class Button extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    addCount = () =>{
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }

    render(){
        return (
            <div>
                <button onClick={this.addCount} class="btn btn-primary"> BOOP </button>
                <p> Booped {this.state.count} times! </p> 
            </div>
        )
    }
}

export default Button