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
      case '4':
        router.push('/about');
      case '5':
        router.push('/contact');
      case '6':
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
            <div className="menuItem" onClick={() => handleMenuClick('2')}>Profile</div>
            <div className="menuItem" onClick={() => handleMenuClick('3')}>Courses</div>
            <div className="menuItem" onClick={() => handleMenuClick('4')}>About</div>
            <div className="menuItem" onClick={() => handleMenuClick('5')}>Contact</div>
            <div className="menuItem" onClick={() => handleMenuClick('6')}>Log Out</div>
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
