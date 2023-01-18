import React from 'react';
import { FaImages } from "react-icons/fa";

const CreatePost = () => {
    return (
        <div className='mx-4 my-10'>
            <form className='flex items-center'>
                <img alt="" className="hidden lg:block w-12 h-12 mr-3 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" src="https://source.unsplash.com/40x40/?portrait?1" />
                <input type="text" placeholder="What's in your mind" className="relative input input-bordered input-info w-full" />
                <label htmlFor="icon-button-file" className='mx-4'>
                    <FaImages className='text-3xl cursor-pointer '></FaImages>
                </label>

                <input
                    // accept="image/*"
                    name="image"
                    id="icon-button-file"
                    type="file"
                    style={{ display: 'none' }}
                />
                <input type="submit" value="submit" className='btn btn-primary ml-1' />
            </form>
        </div>
    );
};

export default CreatePost;