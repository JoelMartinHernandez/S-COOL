// "use client"; 
import Link from "next/link";
import { List } from './ListCourse';
import './Courses.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
function Courses() {
    return (
        <div className="courses-container">
                        <TopBarDropdown />

                        <div className="logo-section">
                <Image src={logo} alt="Logo" width={350} height={30} />
            </div>
            <nav className="navigation-menu">
                <Link href="/about" className="menu-item"><span className="course-item">Cyber Security</span></Link>
                <Link href="/courses" className="menu-item"><span className="course-item">Web Development</span></Link>
                <Link href="/quizzes" className="menu-item"><span className="course-item">Psychology</span></Link>
                <Link href="/profile" className="menu-item"><span className="course-item">Finance</span></Link>
                <Link href="/profile" className="menu-item"><span className="course-item">Graphic Design</span></Link>
            </nav>

            <div>
            <List></List>
        </div>
        </div>
    );
}

export default Courses;