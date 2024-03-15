import Link from "next/link";
import { List } from './ListCourse';

import './Courses.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import flower from '../../assets/img/contactusflower.svg';

function Courses() {

    return (
       
        <div className="Coursespage">
        <TopBarDropdown />
        <div className="courses-container">
            <TopBarDropdown />

            <h1>COURSES</h1>
            <div  className="navigation-menu">
                <List />
            </div>
            <div className='myflower1'> 
                <Image src={flower} alt="flower" id="flower1" />
            </div>

            <div className='myflower2'> 
                <Image src={flower} alt="flower" id="flower2" />
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
        </div>
        
 
        
    ); 
}

export default Courses;