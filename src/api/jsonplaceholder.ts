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
export async function getPosts(): Promise<Post[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!response.ok) {
        throw new Error(`Network error.`);
    }

    const userPost = await response.json() as Post[];
    return userPost;
};

