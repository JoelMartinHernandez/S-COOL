// "use client";
import { createClient } from '@/utils/supabase/server';
import React from 'react';
import { Form, Input, Button } from 'antd';
import './ContactUsPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';

import flower from '../../assets/img/contactusflower.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contact } from '../types/types';
import { addContact } from '@/service/contact.service';
import { SubmitButton } from '../login/submit-button';



const ContactUsPage: React.FC = () => {


    const publishComment = async(formData: FormData) => {
        "use server"

        // const data: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData.entries());
        const allPosts: Contact|undefined = await addContact(formData.get("contact_message") as string);
        // console.log(allPosts)

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
                        <input type="text" className="form-control champtext" id="contact_message" name="contact_message" required />
                    </div>
                    <SubmitButton formAction={publishComment} pendingText="Sending...">SEND</SubmitButton>
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
