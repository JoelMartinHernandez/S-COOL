import React from 'react';
import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import greenflower from '../../assets/img/greenflower.svg';
import 'typeface-roboto';
import '@fontsource/roboto'; // Estilos de fuente en 400.

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
                        <a href="/about2">
                            <h3 className='topic'>About</h3>
                        </a>
                    </div>
                    <div className='horizontal-lineCourses'>
                        <a href="/courses">
                            <h3 className='topic'>Courses</h3>
                        </a>
                    </div>
                    
                    <div className='horizontal-lineProfile'>
                        <a href="/profile">
                            <h3 className='topic'>Profile</h3>
                        </a>
                    </div>
                    <div className='horizontal-lineCourses'>
                        <a href="/contact">
                            <h3 className='topic'>Contact</h3>
                        </a>
                    </div>
                </div>
                <div className="homeflower">
                    <Image src={greenflower} alt="flower" className='myHomepageflower' />
                </div>
            </div>
        </>
    );
}

export default Home;
