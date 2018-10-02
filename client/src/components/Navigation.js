import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (

  <div>
  <button type="button" className="home"><Link to="/"><i className="fas fa-home"></i></Link></button>
  <button type="button" className="calendar"><Link to="/calendar"><i className="fas fa-comments"></i></Link></button>
  </div>


  );

};

export default Navigation;
