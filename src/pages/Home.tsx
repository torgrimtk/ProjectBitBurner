import { useEffect, useState } from "react";
import type { Post, User } from "../types";
import { getPosts, getUsers } from "../api/jsonplaceholder";
import PostCard from "../components/PostCard";


const Home = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState<string | null>(null);

    const [selectedUser, setSelectedUser] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");

    const filteredPosts = () => {
        return (
            <h1>Hello</h1>
        )
    }

    useEffect(() => {
        async function fetchPosts() {
            try {
                const postData = await getPosts();
                setPosts(postData);
                const postUsers = await getUsers();
                setUsers(postUsers);

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

            {posts.map(post => {
                //Finds the matching user for each post 
                const user = users.find(u => u.id === post.userId)
                return <PostCard key={post.id} post={post} username={user?.name} />
            })}

        </div>
    )
}

export default Home