import React from 'react';

interface BlogData {
  title: string;
  description: string;
}

const Blog: React.FC<BlogData> = ({ title, description }) => {
    return (
      <li>
        <h1>
          <strong>{title}</strong>
        </h1>
        <p>
        {description}
        </p>
      </li>
    );
  };
  
  export default Blog;