import type { User, Post } from "../types";

export async function getUser(id: number): Promise<User> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
        throw new Error(`Network error.`);
    }

    const userData = await response.json() as User;
    return userData;
};

export async function getPosts(): Promise<Post[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!response.ok) {
        throw new Error(`Network error.`);
    }

    const userPost = await response.json() as Post[];
    return userPost;
};