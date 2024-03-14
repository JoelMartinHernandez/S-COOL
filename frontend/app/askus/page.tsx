"use client";
import React from 'react';
import './AskPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';


const AskPage: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
        <TopBarDropdown />

            <div className="askus-page">
            <h1 className='title'>Is there something you don’t understand or want to know more about?</h1>
            <br/>
            <h3 className="askus-title">Leave us a question!</h3>
            <div className="contact-form-container">
                <form >
                    <div className="form-group">
                        <label htmlFor="questionInput"></label>
                        <input type="text" className="form-control champtext" id="questionInput" name="question" placeholder='E.g. What is the difference between tailwind and sailwind?' required />
                    </div>
                    <button type="submit" className="btn btn-custom btn-block " id='sendbtn'>Send</button>
                </form>
            </div>
            
            </div>
        </>
    );
};

export default AskPage;
