import IdeaCard from "@/components/IdeaCard";
import Layout from "@/components/Layout";

export default function IdeaPage() {
    return (
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300">Idea</h1>
            <IdeaCard />
        </Layout>
    );
}