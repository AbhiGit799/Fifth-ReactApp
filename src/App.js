import { Component } from "react";

class AppStudent extends Component
{
    render()
    {
        console.log(this.props);  //{name: 'N/A', id: 0}  //If not passed.
        return(
        <>
         <h1>Id: {this.props.id}</h1>
         <h1>Name:{this.props.name}</h1>
        </>)
    }
}

export {AppStudent}

