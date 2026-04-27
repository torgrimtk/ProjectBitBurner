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

    if (loading) return <p className='text-center text-green-400'>Loading...</p>
    if (error) return <p className='text-center text-red-800'>{error}</p>

    return (
        <div className='min-h-screen p-8'>

            <h1 className='text-green-400 text-3xl font-bold text-center mb-8 tracking-widest uppercase'>Leaked Intelligence</h1>

            <div className='flex flex-wrap justify-center gap-4 mb-8'>

                <select
                    onChange={e => setSelectedUser(e.target.value === "" ? null : Number(e.target.value))}
                    className='bg-black border border-green-400 text-green-400 rounded-lg px-4 py-2 text-sm focus:outline-none'>
                    <option value="">All users</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                </select>

                <div className='flex gap-2'>

                    <button onClick={() => setSortOrder("asc")} className={`border px-4 py-2 rounded-lg text-sm transition-colors ${sortOrder === "asc" ? "bg-green-400 text-black border-green-400" : "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"}`}>Ascending</button>

                    <button onClick={() => setSortOrder("desc")} className={`border px-4 py-2 rounded-lg text-sm transition-colors ${sortOrder === "desc" ? "bg-green-400 text-black border-green-400" : "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"}`}>Descending</button>

                    <button onClick={() => setSortOrder("none")} className={`border px-4 py-2 rounded-lg text-sm transition-colors ${sortOrder === "none" ? "bg-green-400 text-black border-green-400" : "border-green-400 text-green-400 hover:bg-green-400 hover:text-black"}`}>None</button>

                </div>
            </div>

            <div className='flex flex-col gap-6'>
                {filteredPosts.map(post => {
                    const user = users.find(u => u.id === post.userId)
                    return <PostCard key={post.id} post={post} username={user?.name} onHide={() => hidePost(post.id)} />
                })}
            </div>
        </div>
    )
}

export default Home