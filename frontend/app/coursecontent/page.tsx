import { useEffect, useState } from "react";
import Link from "next/link";
import { ContentA } from './ContentCourse';

function Courses() {
return (
    <div className="courses-container">
        <div className="logo-section">
            {/* Comenta o elimina cualquier código que no se pueda renderizar en el servidor */}
        </div>

        <nav className="navigation-menu">
            <Link href="/about" className="menu-item"><span className="course-item">Cyber Security</span></Link>
            <Link href="/courses" className="menu-item active"><span className="course-item">Web Development</span></Link>
            <Link href="/quizzes" className="menu-item"><span className="course-item">Psychology</span></Link>
            <Link href="/profile" className="menu-item"><span className="course-item">Finance</span></Link>
            <Link href="/profile" className="menu-item"><span className="course-item">Graphic Design</span></Link>
        </nav>

        <div>
            <ContentA courseId={16}></ContentA>
        </div>
    </div>
);
}

export default Courses;