import Link from "next/link";
import './Courses.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import flower from '../../assets/img/contactusflower.svg';

import { List } from "./ListCourse";
function Courses() {
    return (
        <>
        <div className="Coursespage">
        <TopBarDropdown />
        <div className="courses-container">
            
            
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
        </div>
        </div>
        
        </>
        
    ); 
}

export default Courses;