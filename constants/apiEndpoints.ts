// src/constants/apiEndpoints.ts

// import { Blog } from '../features/blogs/types';
// src/features/blogs/types.ts

export interface Blog {
    _id: string;
    image: string;
    title: string;
    description: string;
    author: {
        _id: string;
        name?: string;
        profilePicture?: string; // Optional profile picture URL
    };
        isPending: boolean;
    tags: string[];
    likes: number;
    relatedBlogs: string[];
    skills: string[];
    createdAt: string;
    updatedAt: string;
  }
  
  export interface BlogsState {
    blogs: Blog[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  

  export async function fetchBlogsAPI(): Promise<Blog[]> {
    const response = await fetch('https://a2sv-backend.onrender.com/api/blogs'); // URL should be in quotes
    if (!response.ok) {
        throw new Error('Failed to fetch blogs');
    }
    return response.json();
}