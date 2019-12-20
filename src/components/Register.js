import React from 'react';
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    Icon,
} from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../css/register.css';
import connection from './backendConnection/connection';
import axios from 'axios';

const {Option} = Select;

class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values["status"] = "available";
                console.log('Received values of form: ', values);
                // connection.post('users', values).then((response) => {
                //     console.log(response);
                // }, (error) => {
                //     console.log(error);
                // });
                // send a POST request
                axios({
                    method: 'post',
                    url: 'http://localhost:8080/users',
                    data: values,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then(
                    success => alert("Successfully Registered!!!"),
                    error => console.log(error)
                )
            }
        });
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: {span: 16},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 20},
                sm: {span: 15},
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '94',
        })(
            <Select style={{width: 70}}>
                <Option value="94">+94</Option>
                <Option value="87">+87</Option>
            </Select>,
        );

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');

        return (
            <div className="register-form-position">
                <h1 className="company-header">Asiri <span className="company-sub-header">Foods</span></h1>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="Username" validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(<Input/>,)}
                    </Form.Item>
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(<Input.Password/>)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur}/>)}
                    </Form.Item>

                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: 'Please input your phone number!'}],
                        })(<Input addonBefore={prefixSelector} style={{width: '100%'}}/>)}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                I have read the <a href="">agreement</a>
                            </Checkbox>,
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className="register-form-button">
                            Register
                        </Button>
                        <Button type="primary" className="register-form-button">
                            <Link to="/login">Login</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(RegistrationForm);

export default WrappedRegistrationForm;