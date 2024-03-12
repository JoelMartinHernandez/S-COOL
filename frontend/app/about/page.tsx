// import TopBarDropdown from '../../components/TopBarDropdown';

import Link from "next/link";

function WelcomeAbout() {

    return (
        <div>
            <h1 id='welcomeabouttitle'>S-COOL LOGO here</h1>
            <div>
                <p className='welcomep'>
                A text about the online school. 
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Sed mattis erat ante,
                non eleifend diam auctor in. 
                </p>

                <div className='Btns'>
                <div>
                    <Link href='/register' id='btn1'>Sign In</Link>
                </div>
                <div>
                <Link href='/login' id='btn1'>Log In</Link>
                </div>
                </div>
            </div>

        </div>
    );
}

export default WelcomeAbout;