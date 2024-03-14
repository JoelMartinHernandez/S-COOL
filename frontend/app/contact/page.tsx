"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import './ContactUsPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import flower from '../../assets/img/contactusflower.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


const ContactUsPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <TopBarDropdown />

            <div className="contact-page">
            <h1 className='title'>Contact form</h1>
            <br/>
            <h3 className="contact-title">Leave us a message!</h3>
            <div className="contact-form-container">
                <form >
                    <div className="form-group">
                        <label htmlFor="questionInput"></label>
                        <input type="text" className="form-control champtext" id="questionInput" name="question" required />
                    </div>
                    <button type="submit" className="btn btn-custom btn-block " id='sendbtn'>Send</button>
                </form>
            </div>
            <div className="flower">
                <Image src={flower} id="flower" alt="Fleur" />
            </div>
            </div>
        </>
        
    );
};

export default ContactUsPage;
