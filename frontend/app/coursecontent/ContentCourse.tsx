"use server";
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

export async function ContentA({ courseId }: { courseId: number }) {
    // hardcoded for testing purposes, should be passed
    const supabase = createClient();
    const { data: course } = await supabase
        .from("course")
        .select()
        .eq('course_id', courseId)
        .single(); // Asegura que solo se devuelva un resultado

    // courseId =16;

    return (
        <div>


            <div className="bike-item" key={course.course_id}>
                {course.course_description}
            </div>

        </div>
    );
}
