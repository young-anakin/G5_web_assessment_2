import React from 'react'

const Search = () => {
  return (
    <div className='flex justify-between py-8 px-16'>
        <div className='flex justify-start'>
            <p className='font-semibold text-2xl'>Blogs</p>
        </div>
        <div className='flex justify-center items-center'>
            <form>
                <input className='bg-gray-400 rounded'></input>
            </form>
            <div>New Blog</div>
        </div>
        <div className='hidden md:flex'>

        </div>
    </div>
  )
}

export default Search