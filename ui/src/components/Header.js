import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./service/GoogleAuth";

const Header = () => {
  return(
    <div className={'ui secondary pointing menu'}>
      <Link to={'/'} className={'item'}>TAD Talks</Link>
      <div className={'right menu'}>
        <Link to={'/'} className={'item'}>All Talks</Link>
        <GoogleAuth />
      </div>
    </div>
  );
}

export default Header;
