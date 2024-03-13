import React from 'react';
import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Link from 'next/link'; 
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';

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
                        {/* Utilisez Link pour entourer votre lien */}
                        <a href="/about2">
                            <h3 className='topic'>About</h3>
                        </a>
                    </div>
                    <div className='horizontal-lineCourses'>
                        {/* Utilisez Link pour entourer votre lien */}
                        <a href="/courses">
                            <h3 className='topic'>Courses</h3>
                        </a>
                    </div>
                    <div className='horizontal-lineQuizz'>
                        {/* Utilisez Link pour entourer votre lien */}
                        <a href="/">
                            <h3 className='topic'>Quizzes</h3>
                        </a>
                    </div>
                    <div className='horizontal-lineProfile'>
                        {/* Utilisez Link pour entourer votre lien */}
                        <a href="/profile">
                            <h3 className='topic'>Profile</h3>
                        </a>
                    </div>
                    <div className='horizontal-lineCourses'>
                        {/* Utilisez Link pour entourer votre lien */}
                        <a href="/contact">
                            <h3 className='topic'>Contact</h3>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
