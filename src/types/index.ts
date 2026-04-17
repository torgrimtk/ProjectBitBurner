// ts file that will hold the info on what a "Post" looks like¨

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface User {
    id: number,
    name: string,
}