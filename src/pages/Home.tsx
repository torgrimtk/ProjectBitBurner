import { useEffect, useState } from "react";
import type { Post } from "../types";
import { getPosts } from "../api/jsonplaceholder";
import PostCard from "../components/PostCard";


const Home = () => {

    const [posts, setPosts] = useState<Post[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (err) {
                setError("Failed to fetch posts");
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (loading) return <p>Loading website...</p>
    if (error) return <p>Error! Failure to fetch posts</p>

    return (
        <div>
            <h1>Hello! This is the HOME page</h1>
            <ul>
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ul>
        </div>
    )
}

export default Home