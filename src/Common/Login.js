import React from 'react';
import '../Style/GEMS.css';
import Clock from './Clock.js'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            psw: '',
            msg: '',                  
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
        this.setState({[name]: value});
      }
    handleClick(event) {
        if(this.state.name.length < 1){
            this.setState({msg: 'noUsername'})
            event.preventDefault();
        } else if(this.state.psw.length < 1){
            this.setState({msg: 'noPassword'})
            event.preventDefault();
        } else if(this.state.name !== 'gskaar' && this.state.psw !== "password"){
            this.setState({msg: 'invalidLogin'})
            event.preventDefault();
        }
        else{
            this.props.onLoginAttempt(true);
        }
      }
    render(){
        const msg = this.state.msg;
        return (
            <div className="container">
                <form>
                    <input name ="name" placeholder="user name" type="text" value={this.state.name} onChange={this.handleChange} />
                    <input name="psw" placeholder="password" type="password" value={this.state.psw} onChange={this.handleChange} />
                    <button onClick={this.handleClick}>
                        Log in
                    </button>
                    <LoginVerdict msg={msg}/>
                </form>
                <Clock />
            </div>
        );
    }
}

function LoginVerdict(props) {
    if (props.msg === 'noUsername') {
        return <p>Please Enter a Username.</p>;
    } else if(props.msg === 'noPassword'){
        return <p>Please Enter a Password.</p>;
    } else  if(props.msg === 'invalidLogin'){
        return <p>Invalid login, please try again.</p>;
    }else{
        return null;
    }
}

export default Login;
