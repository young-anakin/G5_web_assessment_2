// redux/slices/blogSlice.ts

import { fetchBlogsAPI, BlogsState } from '@/constants/apiEndpoints';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

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

export const fetchBlogs = createAsyncThunk<Blog[]>('blogs/fetchBlogs', async () => {
  const response = await fetchBlogsAPI();
  return response;
});

const initialState: BlogsState = {
  blogs: [],
  status: 'idle',
  error: null,
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch blogs';
        console.error('Error fetching blogs:', state.error);
      });
  },
});
export const selectBlogById = (state: RootState, blogId: string) =>
  state.blog.blogs.find((blog) => blog._id === blogId);
export default blogsSlice.reducer;
