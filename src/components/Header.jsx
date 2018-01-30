import React from 'react';

const Header = () => {
  return (
    <div className="top_nav">
        <div className="nav_menu">
            <nav className="dashboardHeader">
                <h3><img src={require('../assets/rtda_icon.png')} height="40px"/>
	        NetworkComputer™</h3>
            </nav>
        </div>
    </div>
  );
};

export default Header;
