import React from 'react';
import './FirstPage.css';
import { Link } from 'react-router-dom';

const FirstPage: React.FC = () => {
  return (
    <div className='FirstPage'>
      <h1>First Page</h1>
      <Link to='/second-page'>Second Page</Link>
    </div>
  );
};

export default FirstPage;
