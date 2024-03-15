"use client";
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/server';
import { useRouter } from 'next/router';


interface Course {
  course_id: string;
  course_name: string;
  course_description: string;
}

export default function CoursePage() {
  const [course, setCourse] = useState<Course | null>(null);
  const router = useRouter();
  const courseId = router.query.courseId as string;

  useEffect(() => {
    const fetchCourse = async () => {
      if (!courseId) return;
      const supabase = createClient();
      let { data: fetchedCourse, error } = await supabase
        .from('course')
        .select('*')
        .eq('course_id', courseId)
        .single();

      if (error) {
        console.error('Error fetching course data:', error);
        return;
      }

      setCourse(fetchedCourse as Course);
    };

    fetchCourse();
  }, [courseId]);

  if (!course) return <p>Cargando...</p>;

  return (
    <div className="course-content">
      <h1 className="course-title">{course?.course_name}</h1>
      <p className="course-id">ID: {course?.course_id}</p>
      <p className="course-description">{course?.course_description}</p>
    </div>
  );
}
