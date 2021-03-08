import React from 'react';

import Section from '../../../HOC/Section';
import Link from '../../UI/Link/Link';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>WELCOME to CROP DARPAN</h1>
	    <h2> A Crop Diagnostic Tool </h2>
	    <p><b> IIIT Hyderabad and Professor Jayashankar Telangana State Agricultural University</b></p>
            <Link target='about' classes='btn btn-info rounded-0 mr-2'>
              Learn More
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
