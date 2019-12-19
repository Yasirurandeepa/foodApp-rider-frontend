import React from "react";
import {Menu, Icon} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import WrappedLoginForm from "./Login";
import WrappedRegistrationForm from "./Register";
import Home from "./Home";
import '../css/header.css';

class CustomHeader extends React.Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Router>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    theme="dark"
                    style={{paddingLeft: "950px", backgroundColor: "green"}}
                    defaultSelectedKeys={['1']}
                >
                    <Menu.Item key="1">
                        {/*<Icon type="login"/>*/}
                        <Link to="/home"><b className="navbarLogin">Home</b></Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        {/*<Icon type="login"/>*/}
                        <Link to="/login"><b className="navbarLogin">Login</b></Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        {/*<Icon type="user"/>*/}
                        <Link to="/register"><b className="navbarRegister">Register</b></Link>
                    </Menu.Item>
                </Menu>
                <Switch>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <WrappedLoginForm />
                    </Route>
                    <Route path="/register">
                        <WrappedRegistrationForm />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default CustomHeader;
