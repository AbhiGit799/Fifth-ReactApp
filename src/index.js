import { Component } from "react";
import ReactDOM from "react-dom/client";
import {AppStudent} from "./app"

//AEmployee is child component
// function AEmployee(props)
// {
//     console.log(props);
//     return(<>
     
//      <h2>Employee Details</h2>
    
//     </>)
// }


//AIndex is parent component
// function AIndex()
// {
//     return(
//         <>

//          <AEmployee 
//          name="Ajeet Singh" 
//          empId={101} 
//          gender={true} 
//          status={false} 
//          friendList={["Chandan", "Pawan","Samir"]}
//          studentDetails = {{mobileNo:1234567890,emailId:"arj12@gmail.com"}}

//          />


//         </>
//     )
// }


// function AIndex()
// {
//     let friends = ["Chandan", "Pawan","Samir"];
//     let details = {mobileNo:1234567890,emailId:"arj12@gmail.com"}
//     return(
//         <>

//          <AEmployee 
//          name="Ajeet Singh" 
//          empId={101} 
//          gender={true} 
//          status={false} 
//          friendList= {friends}
//          studentDetails = {details}

//          />


//         </>
//     )
// }

// const aroot = ReactDOM.createRoot(document.getElementById("root"));         

// aroot.render(<AIndex/>)


// let friends = ["Chandan", "Pawan","Samir"];
// let details = {mobileNo:1234567890,emailId:"arj12@gmail.com"}

// const broot = ReactDOM.createRoot(document.getElementById("root"));         

// broot.render( <AEmployee 
//              name="Ajeet Singh" 
//              empId={101} 
//              gender={true} 
//              status={false} 
//              friendList= {friends}
//              studentDetails = {details}
    
//              />)


// function BEmployee(props)
// {
//     console.log(props);
//     const {name,empId,gender,status,friendList,studentDetails,fun1,fun2,fun3,fun4} = props;
//     const {mobileNo,emailId} = studentDetails;
//     return(<>
     
//      <h2>Employee Details</h2>
//      <hr />
//      <h3>Hello, {name}</h3>
//      <h3>Your Emp Id = {empId}</h3>
//      <h3>Your Gender = {gender?'Male':"Female"}</h3>
//      <h3>Status = {status?"New":"Old"}</h3>

//      <h3>FriendList = 
//         <ul>
//            {
//             friendList.map((n,i)=>{
//                return <li key={i}>{n}</li>    //return is required here.
//             })
//            }
//         </ul>
//      </h3>

//      <h3>
//         Student Mobile No = {mobileNo}
//      </h3>

//      <h3>
//         Student Email ID = {emailId}
//      </h3>

//      <h4>
//         Fun1 : {fun1()}
//      </h4>

//      <h4>
//         Fun2 : {fun2()}
//      </h4>

//      <h4>
//         Fun3 : {fun3("How are you??")}
//      </h4>

//      <h4>
//         Fun4 : {fun4(10,20)}
//      </h4>
    
//     </>)
// }

// function BIndex()
// {
//     let friends = ["Chandan", "Pawan","Samir"];
//     let details = {mobileNo:1234567890,emailId:"arj12@gmail.com"}
//     return(
//         <>

//          <BEmployee 
//          name="Ajeet Singh" 
//          empId={101} 
//          gender={true} 
//          status={false} 
//          friendList= {friends}
//          studentDetails = {details}
//          fun1={()=>"Hi Ajeet"}
//          fun2={()=>{return "How are you"}}  //return is used because we used {} 
//          fun3={(msg)=>{return msg}}
//          fun4 = {(a,b)=>{return a+b}}
//          isActive //true  //If no value passed in boolean property then default is true

//          />


//         </>
//     )
// }

// const croot = ReactDOM.createRoot(document.getElementById("root"));         
// croot.render(<BIndex/>)


// class Parent extends Component
// {
//     render()
//     {
//         return (<>
//          <Child mobileNo={1237418520}/>
//         </>)
//     }
// }


// class Child extends Component
// {
    
//     constructor(props)
//     {
//         super(props);
//         //console.log(this.props.mobileNo); //Error
//         //If we want props inside consturctor, then we need to give props in constructor + super() 
//         console.log(this.props.mobileNo);
//     }
//     render()
//     {
//         console.log(this.props.mobileNo); //no error here.
//         return(<>
//            <h2>Child Component</h2>
//           <p>Mobile No: {this.props.mobileNo}</p>
//         </>)
//     }
// }

// const droot = ReactDOM.createRoot(document.getElementById("root"));         
// droot.render(<Parent/>)



// class AStudent extends Component
// {
//     render()
//     {
//         console.log(this.props); // {}  if no parameter is passed.

//         return(
//         <>
//          <h1>Id: {this.props.id}</h1>
//          <h1>Name:{this.props.name}</h1>
//         </>)
//     }
// }

// const eroot = ReactDOM.createRoot(document.getElementById("root"));

// eroot.render(<AStudent id={102} name="Raman"/>)

//eroot.render(<AStudent/>)
//Output = Id: Name:


//Default props



// class BStudent extends Component
// {
//     render()
//     {
//         console.log(this.props);  //{name: 'N/A', id: 0}  //If not passed.
//         return(
//         <>
//          <h1>Id: {this.props.id}</h1>
//          <h1>Name:{this.props.name}</h1>
//         </>)
//     }
// }

// BStudent.defaultProps ={
//     name:"N/A",
//     id:0
// }

// const froot = ReactDOM.createRoot(document.getElementById("root"));

// froot.render(<BStudent/>)



// const groot = ReactDOM.createRoot(document.getElementById("root"));
// AppStudent.defaultProps ={
//         name:"N/A",
//         id:0
//     }
// groot.render(<AppStudent/>);


// class CStudent extends Component
// {
//     render()
//     {
//         return(<>
//         <h2>My name is {this.props.name}</h2>
//         <h3>My friends </h3>

//         <ul> 
//          <h3>
//                 {
                
//                 this.props.friendList.map((n,i)=>{
//                     return <li key={i}> {n} </li>
//                 })
                
//                 }
//             </h3>
//         </ul>

//         </>)
//     }
// }
// const hroot = ReactDOM.createRoot(document.getElementById("root"));


// hroot.render(<CStudent name="Ajeet" friendList={["Pawan","Samir"]}/>);

// CStudent.defaultProps = {
//     name:"N/A",
//     friendList:[]
// }

// hroot.render(<CStudent/>);



//Topic = Children Props

//when we write tags in <> </>

function Sidebar(props)
{
    console.log(props);
    return(<>
      
      <h2>Sidebar</h2>
      {
        props.children
      }

    </>)
}

const iroot = ReactDOM.createRoot(document.getElementById("root"));

iroot.render(<Sidebar>

   {/* this code will send in props  */}

   <nav>

    <a href="/abc/home">Home</a> | 

    <a href="/abc/about">About</a> |

    <a href="/abc/info">Info</a> |

    <a href="/abc/contact">Contact</a> 

  </nav>

</Sidebar>)


