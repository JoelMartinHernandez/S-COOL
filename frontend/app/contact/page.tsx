// "use client";
import { createClient } from '@/utils/supabase/server';
import React from 'react';
import { Form, Input, Button } from 'antd';
import './ContactUsPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
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
        <div className="contact-page">
            <TopBarDropdown />
            <div className="logo-section">
                <Image src={logo} alt="Logo" width={250} height={200} />
            </div>
            <br/>
            <div className="contact-form-container">
                <h1 className="contact-title">Contact Us</h1>

                <div>
                    <form>
                    <label>
                        message:
                        <input type="text" name="contact_message" id="contact_message" />
                    </label>

                    <SubmitButton formAction={publishComment} pendingText="Signing Up...">SEND</SubmitButton>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default ContactUsPage;
