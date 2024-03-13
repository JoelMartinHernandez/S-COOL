"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import './AskPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';


const AskPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="inquiry-page">
            <TopBarDropdown />
            <div className="logo-section">
                <Image src={logo} alt="Logo" width={250} height={200} />
            </div>
            <br />
            <div className="inquiry-form-wrapper">
                <h1 className="inquiry-title">Is there something you don’t understand or want to know more about?</h1>

                <Form
                    name="inquiry_form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="inquiry-form"
                >
                    <Form.Item
                        name="message"
                        label="Leave us a question:"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            SEND
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default AskPage;
