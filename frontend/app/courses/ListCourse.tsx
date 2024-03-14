import { createClient } from '@/utils/supabase/server';
import './Courses.css'; // Asegúrate de importar el CSS

interface Course {
    course_id: number;
    course_name: string;
    course_description: string;
}

export async function List() {
    const supabase = createClient();
    const { data: course } = await supabase.from("course").select();

    return (
        <div className="courses-container"> {/* Utiliza la misma clase que en Courses */}
            {course ? (
                course.map((b: Course, index: number) => (
                    <div className="menu-item" key={b.course_id}> 
                        <span className="course-item"> {b.course_name}</span>
                    </div>
                ))
            ) : (
                <div>No se encontraron cursos.</div>
            )}
            
        </div>
    );
}
