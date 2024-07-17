import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
    fetch("https://backend-mhs.vercel.app/login",{
      method:"POST",
      crossDomain: true,
      headers:{
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body:JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if(data.status == "ok"){
        alert("Login realizado com sucesso");
        window.localStorage.setItem("token", data.data);
        window.location.href="./userDetails"
      } else {
        alert("Login ou Senha Incorreto!!");
      }
    });
  }
  render() {
    return (
      <div className="container"> 
      <div class="row justify-content-center">         
        <form onSubmit={this.handleSubmit}>
          <div className="App">
            <div className='App'>
              <h1 style={{color: "red", background: "black", fontWeight:"bold"}}>Login
                <l><img src="logomhs.png" width={150} alt="MHS"></img></l>
              </h1>
            </div>
            
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
          <div className="App">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                  Lembre - me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" id="btn" className="btn btn-dark">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              LOGIN
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="sign-up">Register?</a>
          </p>
        </form>
    </div>
    </div>
    )
  }
}