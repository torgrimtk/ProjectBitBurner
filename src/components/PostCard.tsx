// this will hold the post card component, that we will reuse on both pages 

import { useContext } from "react";
import { HiddenPostsContext } from "../context/HiddenPostsContext";
import type { Post } from "../types";

interface PostCardProps {
    post: Post
    username?: string | undefined
    onHide?: () => void
    onRestore?: () => void
}

const PostCard = ({ post, username, onHide, onRestore }: PostCardProps) => {

    const dangerScore = [...post.body].filter(char => "aeiouAEIOU".includes(char)).length;
    const imageHolder = `https://placehold.co/600x400?text=${post.id}`;

    // Broadcast receiver to be able to use it in this file from HiddenPostsContext.tsx
    const { hidePost } = useContext(HiddenPostsContext)

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>DANGER SCORE: {dangerScore}</p>
            <p>Username: {username}</p>
            <img src={imageHolder} alt="Telenor ftw" />
            <button onClick={() => hidePost(post.id)}>Hide post</button>
            {onHide && <button onClick={onHide}>Hide</button>}
            {onRestore && <button onClick={onRestore}>Restore</button>}
        </div>
    )
}

export default PostCard