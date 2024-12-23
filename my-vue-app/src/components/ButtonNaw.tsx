import React, { useState } from 'react';
import '../App.css'
import ToDo from './ToDo'
import BlogInfo from './BlogInfo';

const ButtonNaw: React.FC = () => {
    const [activeFunction, setActiveFunction] = useState<string | null>(null);
  
    const handleShowFunction = (functionName: string) => {
      setActiveFunction(functionName);
  
    };
  
    return (
      <>
          <header>
            <button onClick={() => handleShowFunction('BlogInfo')}>Инструкция</button>
            <button onClick={() => handleShowFunction('ToDo')}>ToDo</button>
          </header>
          <div>
            {activeFunction === 'BlogInfo' && <BlogInfo />}
            {activeFunction === 'ToDo' && <ToDo />}
          </div>
      </>
    )
  }
  
  export default ButtonNaw