import { createClient } from '@/utils/supabase/server';
import './Courses.css';
import Link from 'next/link';

interface Course {
    course_id: number;
    course_name: string;
    course_description: string;
}

export async function List() {
    const supabase = createClient();
    const { data: course } = await supabase.from("course").select();

    return (
        <div className="courses-container">
            {course ? (
                course.map((b: Course, index: number) => (
                    <Link legacyBehavior href={`/coursecontent/${b.course_id}`} key={b.course_id}>
                        <div className="menu-item"><a className="course-item">{b.course_name}</a></div>
                    </Link>
                ))

            ) : (
                <div>No se encontraron cursos.</div>
            )}
        </div>
    );
}
