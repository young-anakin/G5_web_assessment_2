
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
interface BlogItemProps {
  blog: Blog;
}


const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
    if (!blog) {
        return <p>Blog not found.</p>;
      }
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();

      const handleClick = () => {
        router.push(`/blog/blog-details?id=${blog._id}`);
    };
    const { image, title, description, author, isPending, tags, likes, skills, createdAt, updatedAt } = blog;
    
    return (
    <div className='flex flex-col gap-2 px-48' onClick= {handleClick}>
        <hr className='flex pb-3'></hr>

        <div className='flex gap-4 '>
                    {/* Handle author information */}
                    <div className='flex'>
    {author && author.profilePicture ? (
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

<div className='flex flex-col'>
    {author ? (
        <div className='flex gap-3'>
            <p className='font-semibold'>{author.name}</p>
            <div className='flex items-center'>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.72698" cy="3.08635" r="3.05413" fill="#535353"/>
                </svg>
            </div>
            <p className='flex text-[#9C9C9C] text-sm items-center'>{formatDate(new Date(createdAt).toLocaleDateString())}</p>
        </div>
    ) : (
        <div className='flex gap-3'>
            <p className='font-semibold'>John Doe</p>
            <div className='flex items-center'>
                <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="3.72698" cy="3.08635" r="3.05413" fill="#535353"/>
                </svg>
            </div>
            <p className='flex text-[#9C9C9C] text-sm items-center'>{formatDate(new Date(createdAt).toLocaleDateString())}</p>
        </div>
    )}
    <p className='text-[#9C9C9C] '>Software Engineer</p>
</div>

        </div>
                <div className='flex py-4 justify-between'>
                    <div className=''>
                        <div className='flex flex-col gap-4 pr-24'>
                            <h2 className='font-bold text-2xl'>{title}</h2>
                            <p className='text-[#737373] text-xl'>{description}</p>
                        </div>



            
        
                    </div>
                    <div>
                        <img src={image} alt={title} className='rounded-3xl'/>
                    </div>
                    
                </div>
                <div>
                {tags.length > 0 && (
                    <div className='flex pb-4'>
                        <ul className='flex gap-4'>
                        {tags.map((tag, index) => (
                            <li className = "text-[#8E8E8E] bg-[#F5F5F5] px-10 py-4 rounded-3xl" key={index}>{tag}</li>
                        ))}
                        </ul>
                    </div>
                    )}
                </div>
                
      </div>

    );
  };
  

export default BlogItem;
function formatDate(inputDate: string): string {
    const [month, day, year] = inputDate.split('/').map(Number);
  
    const date = new Date(year, month - 1, day);
  
    const monthNames: string[] = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
  
  
