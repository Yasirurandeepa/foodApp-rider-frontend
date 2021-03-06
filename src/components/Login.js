import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import '../css/login.css'
import connection from './backendConnection/connection';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class LoginForm extends React.Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    connection.get('users')
    .then((response) => {
      console.log(response.data.content[0]);
    }, (error) => {
      console.log(error);
    });
  };

  loadRegisterComponent = e =>{
    e.preventDefault();
    this.props.log_reg("register");
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-form-position">
        <h1 className="company-header">Asiri <span className="company-sub-header">Foods</span></h1>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="">
              Forgot password
          </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            Or <a><Link to="/register">Register Now!</Link></a>
          </Form.Item>
        </Form>
      </div>

    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);

export default WrappedLoginForm;