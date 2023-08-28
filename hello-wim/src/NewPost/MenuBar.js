import React, { useEffect, useState } from 'react';
import '../Newportfolio.css';
import '../index.css';

export const MenuBar = () => {
  const [pageCount, setPageCount] = useState(1);

  const scrollToPage = (page) => {
    window.scrollTo(0, 1080 * (page - 1));
  };

  const calculatePageCount = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const newPageCount = totalHeight > 1080 ? Math.ceil(totalHeight / 1080) : 1;
    setPageCount(newPageCount);
  };

  useEffect(() => {
    calculatePageCount();
    window.addEventListener('resize', calculatePageCount);
    window.addEventListener('scroll', calculatePageCount);
    
    return () => {
      window.removeEventListener('resize', calculatePageCount);
      window.removeEventListener('scroll', calculatePageCount);
    };
  }, []);

  return (
    <div style={ {marginTop: '20rem'} }>
      {[...Array(pageCount).keys()].map((_, index) => (
        <button className='menubtn' key={index} onClick={() => scrollToPage(index + 1)} style={{ height: '3rem' }}>
          페이지 이동 버튼
        </button>
      ))}
    </div>
  );
};
