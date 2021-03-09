import React, { Fragment } from 'react';

import Header from '../UI/Header/Header';
import Sections from '../sections/Sections';
import Nav from '../UI/Nav/Nav';

const Layout = () => {
  return (
  <div>     
  <Nav />
        <Sections />
      </div>   );
};

export default Layout;
