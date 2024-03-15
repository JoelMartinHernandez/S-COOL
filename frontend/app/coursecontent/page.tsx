"use server";
import { GetServerSideProps } from 'next';
import { createClient } from '@/utils/supabase/server';

interface Course {
  course_id: number;
  course_name: string;
  course_description: string;
}

interface CourseProps {
  course: Course | null;
}

const CourseContent = ({ course }: CourseProps) => {
  if (!course) return <div>No se encontró el curso.</div>;

  return (
    <div className="course-content">
      <h1 className="course-title">{course.course_name}</h1>
      <p className="course-id">ID: {course.course_id}</p>
      <p className="course-description">{course.course_description}</p>
    </div>
  );
};


export default CourseContent;
