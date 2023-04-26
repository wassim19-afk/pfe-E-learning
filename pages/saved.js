import Layout from "@/components/Layout";
import PostCard from "@/components/PostCard";
import CourceCard from "@/components/CourseCard";
import IdeaCard from "@/components/IdeaCard";

export default function SavedPage() {
    return (
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300">Saved</h1>
            <PostCard />
            <CourceCard />
            <IdeaCard />
        </Layout>
    );
}