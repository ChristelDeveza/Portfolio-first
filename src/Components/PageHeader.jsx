import React from 'react';
import "./PageHeader.css";

function PageHeader(props) {
  return (
    <div className='page-header-container'>
     <hr/> 
      <h1>{props.title}</h1>
    </div>
  )
}

export default PageHeader