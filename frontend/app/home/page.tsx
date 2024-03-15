import React from 'react';
import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import greenflower from '../../assets/img/greenflower.svg';
import 'typeface-roboto';
import '@fontsource/roboto';


const Home: React.FC = () => {
    return (
        <>
            <TopBarDropdown/>
            <div className='homepage'>
                <div className="logo-section">
                    <Image src={logo} alt="Logo" />
                </div>
                <div className='topics'>
                    <div className='horizontal-lineAbout'>
                        <Link href="/about2">
                            <span className='topic'><a>About</a></span>
                        </Link>
                    </div>
                    <div className='horizontal-lineCourses'>
                        <Link href="/courses">
                            <span className='topic'><a>Courses</a></span>
                        </Link>
                    </div>
                    <div className='horizontal-lineProfile'>
                        <Link href="/profile">
                            <span className='topic'><a>Profile</a></span>
                        </Link>
                    </div>
                    <div className='horizontal-lineCourses'>
                        <Link href="/contact">
                            <span className='topic'><a>Contact</a></span>
                        </Link>
                    </div>
                </div>
                <div className="homeflower">
                    <Image src={greenflower} alt="flower" />
                </div>
            </div>
        </>
    );
}

export default Home;
