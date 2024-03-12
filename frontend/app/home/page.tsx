import React from 'react';
import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';

const Home: React.FC = () => {
    return (
        <div className="home-container">
            <TopBarDropdown />
            <div className="logo-section">
                {/* Usando Image de Next.js para optimización. */}
                <Image src={logo} alt="Logo" width={350} height={30} />
            </div>
            <nav className="home-navigation-menu">
                <Link href="/about" className="home-menu-item"><span className="home-item">About</span></Link>
                <Link href="/courses" className="home-menu-item"><span className="home-item">Courses</span></Link>
                <Link href="/" className="home-menu-item"><span className="home-item">Quizzes</span></Link>
                <Link href="/profile" className="home-menu-item"><span className="home-item">Profile</span></Link>
                <Link href="/contact" className="home-menu-item"><span className="home-item">Contact</span></Link>
            </nav>

        </div>
    );
}

export default Home;
