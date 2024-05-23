import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Bigfooter from '../components/footer/Bigfooter';
import Category from '../components/Category/category';

const CategoryPage = () => {
  const { title } = useParams(); 
    // console.log(title)
  return (
    <div>
      <Header />
      <Category title={title} titleToShow={title} />
      <Bigfooter/>
    </div>
  );
}

export default CategoryPage;
