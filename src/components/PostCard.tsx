// this will hold the post card component, that we will reuse on both pages 

import type { Post } from "../types";

interface PostCardProps {
    post: Post
}

const PostCard = ({ post }: PostCardProps) => {

    const dangerScore = 


    return (
        <div>
            <ul>
                <li>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </li>
            </ul>
        </div>
    )
}

export default PostCard