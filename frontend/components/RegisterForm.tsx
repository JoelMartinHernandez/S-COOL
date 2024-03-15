"use client"
import React from 'react';
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";


const RegisterForm = () => {
   
    const handleClick = () => {
        return redirect("/about");
    };

    const signIn = async (formData: FormData) => {
        "use server";
    
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();
    
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
    
        if (error) {
          return redirect("/login?message=Could not authenticate user");
        }
    
        return redirect("/news");
      };
    
      const signUp = async (formData: FormData) => {
        "use server";
    
        const origin = headers().get("origin");
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const supabase = createClient();
    
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${origin}/auth/callback`,
          },
        });
    
        if (error) {
          return redirect("/login?message=Could not authenticate user");
        }
    
        return redirect("/login?message=Check email to continue sign in process");
      };

    return (
        <div className="page-containerRegister">
            <div className="content-containerRegister">
                <form className="containerRegister">
                    <div className='form-group champform'>
                        <label>Username:</label>
                        <input type='text' className="form-control champtext" />
                    </div>
                    <div className='form-group champform'>
                        <label>e-mail:</label>
                        <input type='text' className="form-control champtext" />
                    </div>
                    <div className='form-group champform'>
                        <label>Repeat e-mail:</label>
                        <input type='text' className="form-control champtext" />
                    </div>
                    <div className='form-group champform'>
                        <label>Password:</label>
                        <input type='text' className="form-control champtext" />
                    </div>
                    <div className='form-group champform'>
                        <label>Repeat Password:</label>
                        <input type='text' className="form-control champtext" />
                    </div>
                </form>
                <div className='MyBtnsRegister'>
                    <div className="text-center">
                        <input className='BtnRegister' id='signupbtn' type='button' value='SIGN UP' />
                    </div>
                    <div className="text-center">
                        <input className='BtnRegister' onClick={handleClick} id='loginbtn' type='button' value='Already have an account? Log in instead' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
