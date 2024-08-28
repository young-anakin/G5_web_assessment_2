'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/app/Components/Header';
import Search from '@/app/Components/Search';
import Footer from '@/app/Components/Footer';
import { useRouter } from 'next/navigation'; // Import the useRouter hook
import Image from 'next/image'; // Import Image component for optimized images

function formatDate(inputDate: string): string {
  const [month, day, year] = inputDate.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  const monthNames: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

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

// Function to load local JSON data
const loadBlogData = async (id: string): Promise<Blog | null> => {
  try {
    const response = await fetch('/data/data.json'); // Path to your JSON file
    if (!response.ok) {
      throw new Error('Failed to load data');
    }
    const data = await response.json();
    return data.find((blog: Blog) => blog._id === id) || null;
  } catch (error) {
    console.error('Error loading blog data:', error);
    return null;
  }
};
interface props  {
  params : 
    {id:string}
}
const BlogDetails = ({params}:props) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const router = useRouter();
  const { id } = params;
  console.log(id)
  useEffect(() => {
    const fetchBlog = async () => {

      // Ensure 'id' is a string
      if (typeof id === 'string') {
        const data = await loadBlogData(id);
  
        if (data) {
          setBlog(data);
          
          // Fetch related blogs
          const relatedBlogsData = await loadBlogDataByIds(data.relatedBlogs);
          setRelatedBlogs(relatedBlogsData);
        } else {
          setError('Blog not found');
        }
      } else {
        setError('Invalid blog ID');
      }
    };

    fetchBlog();
  }, []); // Depend on 'router.query' to refetch when it changes

  const loadBlogDataByIds = async (ids: string[]): Promise<Blog[]> => {
    try {
      const response = await fetch('/data/data.json'); // Path to your JSON file
      if (!response.ok) {
        throw new Error('Failed to load data');
      }
      const data = await response.json();
      return data.filter((blog: Blog) => ids.includes(blog._id));
    } catch (error) {
      console.error('Error loading related blogs data:', error);
      return [];
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { image, title, description, author, createdAt } = blog;

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
        <Image src={image} alt={title} width={800} height={400} className='max-w-full h-auto' />
      </div>
      <div className='flex items-center justify-center'>
        {author?.profilePicture ? (
          <Image
            src={author.profilePicture}
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
            <p className='flex text-sm items-center'>{formatDate(createdAt)}</p>
          </div>
        )}
        {author?.name && <p className='text-[#264FAD]'>@{author.name}</p>}
      </div>
      <div className="flex">
        <div className="w-1/5"></div>
        <div className="w-3/5">
          <p style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-[#737373]">
            {description}
          </p>
        </div>
        <div className="w-1/5"></div>
      </div>
      <div className='flex flex-col'>
        <div className='px-56'>
          <p className='text-xl font-bold'>Related Blogs</p>
        </div>
        <div className='flex px-56'>
          {relatedBlogs.map((relatedBlog) => (
            <div key={relatedBlog._id} className='w-1/3'>
              <Image src={relatedBlog.image} alt={relatedBlog.title} width={800} height={400} className='w-full h-auto' />
              <h2 className='text-xl font-semibold'>{relatedBlog.title}</h2>
              <p className='text-gray-600'>{relatedBlog.description.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
