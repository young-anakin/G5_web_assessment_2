'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/app/Components/Header';
import Search from '@/app/Components/Search';
import Footer from '@/app/Components/Footer';
import Image from 'next/image'; // Import Image component for optimized images

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

const formatDate = (date: string) => {
  // Simple date formatting function, adjust as needed
  return new Date(date).toLocaleDateString();
};

const BlogDetails: React.FC = () => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]); // State to hold related blogs

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch('https://a2sv-backend.onrender.com/api/blogs/64dfe9dd50d83607285ffa10');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Blog = await response.json();
        setBlog(data);
      } catch (error) {
        setError('Failed to fetch blog');
        console.error(error);
      }
    };

    fetchBlog();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { image, title, description, author, createdAt } = blog;
//   const relatedBlogsToShow = relatedBlogs.slice(0, 3);

  return (
    <div className='flex flex-col gap-10'>
      <Header />
      <div className='flex flex-col items-center gap-4'>
        <h1 style={{ fontFamily: "'IM FELL French Canon', serif" }} className='text-3xl font-light'>{title}</h1>
        <div className='flex gap-3 font-extralight'>
          <p>PROGRAMMING, TECH</p>
          <p> | 6 MIN READ</p>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <img src={image} alt={title} className='max-w-full h-auto' />
      </div>
      <div className='flex items-center justify-center'>
        {author?.profilePicture ? (
          <Image
            src={author.profilePicture} // Author's profile picture URL
            alt={author.name || 'Author'}
            width={60}
            height={60}
            className='rounded-full'
          />
        ) : (
          <div className='rounded-full bg-gray-300' style={{ width: '60px', height: '60px' }}></div>
        )}
      </div>

      <div className='flex flex-col items-center justify-center font-extralight text-black'>
        {author ? (
          <div className='flex gap-3'>
            <p className=''>{author.name}</p>
            <div className='flex items-center'>
                <p>|</p>
            </div>
            <p className='flex text-sm items-center'>Software Engineer</p>
          </div>
        ) : (
          <div className='flex gap-3'>
            <p className=''>John Doe</p>
            <div className='flex items-center'>
              <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.72698" cy="3.08635" r="3.05413" fill="#535353" />
              </svg>
            </div>
            <p className='flex  text-sm items-center'>{formatDate(createdAt)}</p>
          </div>
        )}
        <p className='text-[#264FAD]'>@{author.name}</p>
      </div>
      <div className="flex">
        <div className="w-1/5">
        </div>

        <div className="w-3/5">
            <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#737373]">
            {description}
            </p>
        </div>

        <div className="w-1/5">
        </div>
        </div>
        <div className='flex flex-col'>
            <div className=' px-56'>
                <p className='Bold text-xl'>Related Blogs</p>
            </div>
            <div className='flex px-56'>
            {relatedBlogs.map((relatedBlog) => (
          <div key={relatedBlog._id} className='w-1/3'>
            <img src={relatedBlog.image} alt={relatedBlog.title} className='w-full h-auto' />
            <h2 className='text-xl font-semibold'>{relatedBlog.title}</h2>
            <p className='text-gray-600'>{relatedBlog.description.slice(0, 100)}...</p>
          </div>
        ))}
            </div>

        </div>
      <Footer />
      {/* Render other blog details */}
    </div>
  );
};

export default BlogDetails;
