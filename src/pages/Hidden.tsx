// page that will display the hidden posts, or atleast hold it

import { useContext, useEffect, useState } from "react"
import { HiddenPostsContext } from "../context/HiddenPostsContext"
import { getPosts } from "../api/jsonplaceholder"
import type { Post } from "../types"
import PostCard from "../components/PostCard"
import { Link } from "react-router-dom"

const Hidden = () => {

    const { hiddenIds, restorePost, restoreAll } = useContext(HiddenPostsContext)

    const [posts, setPosts] = useState<Post[]>([])
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchHiddenPosts() {
            try {
                const data = await getPosts();
                setPosts(data);
            } catch (err) {
                setError("Failed to fetch hidden posts")
            } finally {
                setLoading(false);
            }
        }
        fetchHiddenPosts()
    }, [])

    const hiddenPosts = posts.filter(post => hiddenIds.includes(post.id))

    return (
        <div className='min-h-screen p-8'>
            <h1 className='text-green-400 text-3xl font-bold text-center mb-8 tracking-widest uppercase'>Hidden Files</h1>


            {hiddenPosts.length === 0 ? (
                <p className='text-center text-gray-500'>No hidden posts yet.</p>
            ) : (
                <div className='flex flex-col gap-6'>
                    {hiddenPosts.map(post => (
                        <PostCard key={post.id} post={post} onRestore={() => restorePost(post.id)} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Hidden