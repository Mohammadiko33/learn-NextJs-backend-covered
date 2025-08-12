import axios from 'axios';
import React from 'react';
import { IAuthor } from './types';

interface userID { userID: number; }

const Author = async ({userID}: userID) => {

    const {data} = await axios.get<IAuthor | null>(`http://localhost:4000/users/${userID}`)

  return (
    <div className='text-sm text-gray-500'>
        Written By: 
        <span className="font-semibold text-gray-700 hover:text-gray-900 transition-colors">{data?.name}</span>
    </div>
  );
};

export default Author;