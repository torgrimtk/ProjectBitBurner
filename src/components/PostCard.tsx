// this will hold the post card component, that we will reuse on both pages 

import type { Post } from "../types";

interface PostCardProps {
    post: Post
    username: string | undefined
}

const PostCard = ({ post, username }: PostCardProps) => {

    const dangerScore = [...post.body].filter(char => "aeiouAEIOU".includes(char)).length;
    const imageHolder = `https://placehold.co/600x400?text=${post.id}`;

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>DANGER SCORE: {dangerScore}</p>
            <p>Username: {username}</p>
            <img src={imageHolder} alt="Telenor ftw" />
        </div>
    )
}

export default PostCard