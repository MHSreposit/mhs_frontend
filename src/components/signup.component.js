import React, { Component } from 'react'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname:"",
            lname:"",
            email:"",
            password:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const {fname, lname, email, password} = this.state;
        console.log(fname, lname, email, password);
        fetch("https://backend-mhs.vercel.app/register",{
          method:"POST",
          crossDomain: true,
          headers:{
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body:JSON.stringify({
            fname,
            lname,
            email,
            score:0,
            password,
          }),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if(data.status == "ok"){
            alert("Usuário cadastrado com sucesso. Realize o Login!");
            window.location.href="./sign-in"
          }else{
            alert("Erro: Usuário ja cadastrado com esses dados! Tente novamente com outro tipo de dado!");
          }

          
        });
    }
    
  render() {
    return (
      <div className="container"> 
      <div class="row justify-content-center">       
        <form onSubmit={this.handleSubmit}>
          <div className='App'>
            <h1 style={{color: "red", background: "black", fontWeight:"bold"}}>
              Register
              <l><img src="logomhs.png" width={150} alt="MHS"></img></l>
            </h1>
          </div>
          <div className="App">
            <h3 style={{color: "red"}}>First name</h3>
            <input
              type="text"
              id="fname"
              className="form-control"
              placeholder="First name"
              onChange={(e)=> this.setState({fname: e.target.value})}/>
          </div>

          <div className="App">
            <h3 style={{color: "red"}}>Last name</h3>
            <input type="text" 
              id="lname"
            className="form-control" 
            placeholder="Last name"
            onChange={(e)=> this.setState({lname: e.target.value})}/>
          </div>

          <div className="App">
            <h3 style={{color: "red"}}>Email address</h3>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e)=> this.setState({email: e.target.value})}/>
          </div>

          <div className="App">
            <h3 style={{color: "red"}}>Password</h3>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
            onChange={(e)=> this.setState({password: e.target.value})}/>
          </div>

          <div className="d-grid">
            <button type="submit" id="btn" className="btn btn-dark">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              Register
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
      </div>
    )
  }
}