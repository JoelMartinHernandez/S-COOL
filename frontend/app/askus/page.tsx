import { createClient } from '@/utils/supabase/server';
import React from 'react';
import { Form, Input, Button } from 'antd';
import './AskPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import { Askus } from '../types/types';
import { SubmitButton } from '../login/submit-button';
import { addDoubt } from '@/service/askus.service';

const AskusPage: React.FC = () => {


    const publishDoubt = async(formData: FormData) => {
        "use server"

        // const data: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData.entries());
        const allPosts: Askus|undefined = await addDoubt(formData.get("doubt_message") as string);
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
                        <input type="text" name="doubt_message" id="doubt_message" />
                    </label>

                    <SubmitButton formAction={publishDoubt} pendingText="Signing Up...">SEND</SubmitButton>
                    </form>
                </div>
                
            </div>
        </div>
    );
};

export default AskusPage;