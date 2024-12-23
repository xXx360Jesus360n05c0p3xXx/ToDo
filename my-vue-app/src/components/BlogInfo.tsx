import React from 'react';
import { ways } from './data';
import Blog from './Blog';
import './Bloginfo.css'


const BlogInfo: React.FC = () => {
  return (
    <div className='blogText'>
      <ul>
        {ways.map((item, index) => (
          <Blog key={index} title={item.title} description={item.description} />
        ))}
      </ul>
    </div>
  );
};

export default BlogInfo;