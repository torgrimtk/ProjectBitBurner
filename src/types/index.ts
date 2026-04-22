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



// The interface decides what we should be able to access 
// It is the blueprint for some of our components in the app, so if we decide to use the User interface in the code later on, we must include id as a number and name as a string, or else typescript will give us an error. 