// "use server";
import { cookies } from "next/headers";
import { createClient } from '@/utils/supabase/server';

interface Course {
    course_id: number;
    course_name: string;
    course_description: string;
}

interface Props {
    course: Course[];
}

export async function List() {
    const supabase = createClient();
    const { data: course } = await supabase.from("course").select();
    const user = await supabase.auth.getUser();
    if(user.data.user){
    console.log(user.data.user.id)
    }

    
    return (
        <div>
            {course ? (
                course.map((b: Course, index: number) => (
                    <div className="bike-item" key={b.course_id}>
                        {b.course_id} {b.course_name}
                    </div>
                ))
            ) : (
                <div>No se encontraron cursos.</div>
            )}
            
        </div>
    );
}
