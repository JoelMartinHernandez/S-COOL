import Link from "next/link";
import jsCookie from 'js-cookie';
import { useState } from "react";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Login({

  searchParams,
}: {
  searchParams: { message: string };
}) {
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

     const user = await supabase.auth.getUser();
    //  console.log("User ID:", user.data.user.id);
     if(user.data.user){
      try{
       console.log(user.data.user.id)
       localStorage.setItem('userId', user.data.user.id);
     }catch(error){}
    }

    // if (user.data.user) {
    //   jsCookie.set("userId",  user.data.user.id, { expires: 24 });
    //   return redirect("/home");
    // }

    return redirect("/home");
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
      console.log(error);
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
    <div className="page-containerRegister">

      <div className="logo-container">
        <Image src={logo} className="MyLogo" alt="Logo"  />
      </div>
      <div className="content-containerRegister">
          <form  className="containerRegister">
            <div  className='form-group champform'>
              <label htmlFor="email">
                Email
              </label>
              <input
                className="form-control champtext"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div  className='form-group champform'>
              <label className="text-md" htmlFor="password">
                Password
              </label>
              <input
               className="form-control champtext"
                type="password"
                name="password"
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className='MyBtnsRegister'>
              <div className="text-center">
                <SubmitButton
                  formAction={signIn}
                  className='BtnRegister'
                  id='loginbtn'
                  pendingText="Signing In..."
                >
                  LOG IN
                </SubmitButton>
              </div>
              <div className="text-center">
                <SubmitButton
                  formAction={signUp}
                  className='BtnRegister' id='signupbtn'
                  pendingText="Signing Up..."
                >
                  SIGN UP
                </SubmitButton>
              </div>
              
              {searchParams?.message && (
                <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
                  {searchParams.message}
                </p>
              )}
            </div>
           
          </form>
      </div>
      
    </div>
  );
}
