import './About.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';

const About: React.FC = () => {
    return (
        <>
         
            <TopBarDropdown />
            <div className='welcomeaboutpage'>
            <div className="logo-section">
                <Image src={logo} alt="Logo" />
            </div>
            <div className='paragraph'>
                <p className='welcomep'>
                    A text about the online  
                    school. Lorem ipsum dolor 
                    sit amet, consectetur 
                    adipiscing elit. Sed mattis
                    erat ante, non eleifend diam
                    auctor in. Lorem ipsum
                    dolor sit amet, consectetur
                    adipiscing elit. Sed mattis
                    erat ante, non eleifend diam
                    auctor in
                </p>

                <div className='Btns'>
                    <div>
                    <a href='/register'>
                        <input type='button' id='btn1' value='Sign me up!'></input>
                      </a>
                    </div>
                    <a href='/login'>
                        <input type='button' id='btn2' value='Log me in!'></input>
                    </a>
                </div>
            </div>

        </div>
        </>

    );
}

export default About;
