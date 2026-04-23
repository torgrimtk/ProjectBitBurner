// page that will display the hidden posts, or atleast hold it

import { useContext, useEffect, useState } from "react"
import { HiddenPostsContext } from "../context/HiddenPostsContext"
import { getPosts } from "../api/jsonplaceholder"
import type { Post } from "../types"
import PostCard from "../components/PostCard"
import { Link } from "react-router-dom"

const Hidden = () => {

    const { hiddenIds, restorePost } = useContext(HiddenPostsContext)

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
        <div>
            <Link to="/">Go to Home</Link>
            {hiddenPosts.map(post => (
                <PostCard key={post.id} post={post} onRestore={() => restorePost(post.id)} />
            ))}

        </div>
    )
}

export default Hidden