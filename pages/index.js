import Layout from "@/components/Layout"
import PostCard from "@/components/PostCard"
import PostFormCard from "@/components/PostFormCard"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import LoginPage from "./login";
import { useEffect, useState } from "react";
import { Result } from "postcss";


export default function Home() {
  const supabase = useSupabaseClient();
  const session = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    supabase.from('posts')
      .select()
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
      {posts.map(posts => (
        <PostCard {...posts}/>
      ))}
    </Layout>
  )
}
