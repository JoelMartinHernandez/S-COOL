"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import './ContactUsPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import { createClient } from "@/utils/supabase/server";

const ContactUsPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const publishComment = async() => {
        const supabase = createClient();
        const { data, error } = await supabase
            .from('contact')
            .insert([
                { contact_message: 'Hola', user_id: localStorage },
            ])
            .select()
    };

    return (
        <div className="contact-page">
            <TopBarDropdown />
            <div className="logo-section">
                <Image src={logo} alt="Logo" width={250} height={200} />
            </div>
            <br/>
            <div className="contact-form-container">
                <h1 className="contact-title">Contact Us</h1>

                <Form
                    name="contact_form"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    className="contact-form"
                >
                    <Form.Item
                        name="message"
                        label="Leave us a message:"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your message!',
                            },
                        ]}
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

export default ContactUsPage;