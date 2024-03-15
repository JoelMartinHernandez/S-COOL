"use client";
import React, { useState } from 'react';
import './TopBarDropdown.css';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const TopBarDropdown: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const router = useRouter();

  const handleMenuClick = (key: string) => {
    setVisible(false);
    switch (key) {
      case '1':
        router.push('/home');
        break;
      case '2':
        router.push('/profile');
        break;
      case '3':
        router.push('/courses');
        break;
      // Assuming '4' is for log out, adjust if needed.
      case '4':
        // Implement log out logic or navigation as required.
        console.log('Log Out Clicked');
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdownContainer">
      <div 
        className="menuIcon"
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <MenuOutlined style={{ fontSize: '20px' }} />
        {visible && (
          <div className="customMenu">
            <div className="menuItem" onClick={() => handleMenuClick('1')}>Home</div>
            {/* <div className="menuItem" onClick={() => handleMenuClick('2')}>Profile</div> */}
            <div className="menuItem" onClick={() => handleMenuClick('3')}>Courses</div>
            <div className="menuItem" onClick={() => handleMenuClick('4')}>Log Out</div>
          </div>
        )}
      </div>
      <div className="profileIcon">
        <UserOutlined style={{ fontSize: '24px' }} />
      </div>
    </div>
  );
};

export default TopBarDropdown;
