import { useContext, useEffect, useState } from "react";
import type { Post, User } from "../types";
import { getPosts, getUsers } from "../api/jsonplaceholder";
import PostCard from "../components/PostCard";
import { HiddenPostsContext } from "../context/HiddenPostsContext";


const Home = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedUser, setSelectedUser] = useState<number | null>(null);
    const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");
    
    const { hiddenIds, hidePost } = useContext(HiddenPostsContext)

    const filteredPosts = posts
        .filter(post => selectedUser === null || post.userId === selectedUser)
        .filter(post => !hiddenIds.includes(post.id))
        .sort((a, b) => {
            if (sortOrder === "asc") return a.body.length - b.body.length
            if (sortOrder === "desc") return b.body.length - a.body.length
            return 0
        });

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

            <select onChange={e => setSelectedUser(e.target.value === "" ? null : Number(e.target.value))}>
                <option value="">All users</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))}
            </select>

            <button onClick={() => setSortOrder("asc")}>Ascending</button>
            <button onClick={() => setSortOrder("desc")}>Descending</button>
            <button onClick={() => setSortOrder("none")}>None</button>

            {filteredPosts.map(post => {
                //Finds the matching user for each post 
                const user = users.find(u => u.id === post.userId)
                return <PostCard key={post.id} post={post} username={user?.name} onHide={() => hidePost(post.id)} />
            })}


        </div>
    )
}

export default Home