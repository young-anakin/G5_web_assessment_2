import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchBlogs } from '../../redux/slices/blogSlice';
import BlogItem from './BlogItem';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const BlogList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const blogs = useSelector((state: RootState) => state.blog.blogs);
  const status = useSelector((state: RootState) => state.blog.status);
  const error = useSelector((state: RootState) => state.blog.error);

  const [searchQuery, setSearchQuery] = useState('');  // State for search query

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBlogs());
    }
  }, [status, dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);  // Update search query state
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  } else if (status === 'succeeded') {
    content = filteredBlogs.map((blog) => <BlogItem key={blog._id} blog={blog} />);
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div>
      <Header />
      <div className='flex justify-between py-8 px-16'>
        <div className='flex justify-start'>
          <p className='font-semibold text-2xl'>Blogs</p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <form>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              style={{ borderColor: '#CFCFCF' }}
              className='rounded-3xl px-2 py-2 border text-center'
            />
          </form>
          <div className=''> 
            <button className='bg-[#264FAD] px-5 py-3 rounded-3xl text-white'>
              + New Blog
            </button>
            </div>
        </div>
        <div className='hidden md:flex'>
          {/* Optional additional content */}
        </div>
      </div>
      {content}
      <div className='px-20'>
        <hr className='py-4' />
      </div>
      <Footer />
    </div>
  );
};

export default BlogList;
