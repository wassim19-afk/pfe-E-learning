import CourseCard from "@/components/CourseCard";
import Layout from "@/components/Layout";

export default function CoursePage() {
    return (
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300">Course</h1>
            <CourseCard />
        </Layout>
    );
}