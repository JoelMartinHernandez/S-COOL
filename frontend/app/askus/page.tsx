import { createClient } from '@/utils/supabase/server';
import React from 'react';
import './AskPage.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

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

        <div className="askus-page">
    <TopBarDropdown />
    <div className="logo-section">
        <Image src={logo} alt="Logo" width={250} height={200} />
    </div>
    <br/>
    <div className="contact-form-container">
        <h1 className="title">Contact Us</h1>
        <br/>
        <h3 className="askus-title">Leave us a message!</h3>

        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="doubt_message" className="form-control-label"></label>
                    <input type="text" className="form-control champtext" id="doubt_message" name="doubt_message" placeholder='Your message here' />
                </div>
                <SubmitButton formAction={publishDoubt} pendingText="Sending...">SEND</SubmitButton>
            </form>
        </div>
    </div>
</div>
            
    );
};

export default AskusPage;