import Layout from "@/components/Layout"
import PostCard from "@/components/PostCard"
import PostFormCard from "@/components/PostFormCard"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import LoginPage from "./login";
import { useEffect, useState } from "react";



export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    supabase.from('posts')
      .select('id ,content ,created_at ,profiles(id,avatar,name)')
      .order('created_at', { ascending: false })
      .then(result => {
        setPosts(result.data);
      })
  }, [])

  if (!session) {
    return <LoginPage />
  }

  return (
    <Layout>
      <PostFormCard />
      {posts?.length && posts.map(post => (
        <PostCard key={post.created_at} {...post} />
      ))}
    </Layout>
  )
}
