

import type { Post } from "../types";

interface PostCardProps {
    post: Post
    username?: string | undefined
    onHide?: () => void
    onRestore?: () => void
}

const PostCard = ({ post, username, onHide, onRestore }: PostCardProps) => {

    const dangerScore = [...post.body].filter(char => "aeiouAEIOU".includes(char)).length;
    const imageHolder = `https://placehold.co/300x150/000000/00ff00?text=Post+ID:+${post.id}`;

    return (
        <div className='border border-green-400 rounded-xl p-6 flex flex-col items-center gap-4 max-w-lg mx-auto'>

            <img src={imageHolder} alt="post image" className='rounded-lg w-full' />

            <h3 className='text-white font-semibold text-lg text-center'>{post.title}</h3>

            <p className='text-gray-400 text-sm text-center'>{post.body}</p>

            <p className='text-green-400 text-sm'>{username}</p>

            <p className='text-red-800 font-bold'>Danger Score: {dangerScore}</p>

            {onHide && <button onClick={onHide} className='border border-green-400 text-green-400 hover:bg-green-400 font-bold hover:text-black px-4 py-2 rounded-lg text-sm transition-colors'>Hide Post</button>}

            {onRestore && <button onClick={onRestore} className='border border-green-400 text-green-400 hover:bg-green-400 font-bold hover:text-black px-4 py-2 rounded-lg text-sm transition-colors'>Restore Post</button>}

        </div>
    )
}

export default PostCard