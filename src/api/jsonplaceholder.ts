import type { User, Post } from "../types";

// Gets all the users
export async function getUsers(): Promise<User[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
        throw new Error(`Network error.`);
    }

    const allUsers = await response.json() as User[];
    return allUsers;
}

// gets all the posts
export async function getPosts(userId?: number): Promise<Post[]> {
    const url = userId 
        ? `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        : `https://jsonplaceholder.typicode.com/posts`

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Network error.`);
    }

    const userPost = await response.json() as Post[];
    return userPost;
};

