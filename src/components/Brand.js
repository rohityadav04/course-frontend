import React from 'react';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const Brand = () => {
  return (
    <>
      <div className="brand">
        <div className="heading">
          <h3>OUR BRANDS</h3>
        </div>
        <div className="icons">
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </div>
      </div>
    </>
  );
};

export default Brand;
