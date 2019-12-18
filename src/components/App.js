import React from 'react';
import { DatePicker, message, Alert } from 'antd';
import 'antd/dist/antd.css';
import LoginForm from './Login';
import RegistrationForm from './Register';

class App extends React.Component {
    state = { login_or_register: "login"};

    logreg = (term) => {
        this.setState({login_or_register: term});
    }

    render() {
        if (this.state.login_or_register === "login") {
            return <LoginForm log_reg={this.logreg}></LoginForm>
        }
        if (this.state.login_or_register === "register") {
            return <RegistrationForm log_reg={this.logreg}></RegistrationForm>
        }
    }
}

export default App;