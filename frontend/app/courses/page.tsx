import Link from "next/link";
import './Courses.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import Image from 'next/image';
import logo from '../../assets/img/logo.svg';
import { List } from "./ListCourse";
function Courses() {
    return (
        <div className="courses-container">
            <TopBarDropdown />

            <h1>COURSES</h1>
            <List />
        </div>
    );
}

export default Courses;