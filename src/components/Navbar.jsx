import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// Add missing imports at the top
import { useTheme } from '../contexts/ThemeContext';
import { useLocale } from '../contexts/LocaleContext';
import { BulbOutlined, MoonOutlined } from '@ant-design/icons';
import { useLocale } from '../contexts/LocaleContext';
import { TranslationOutlined } from '@ant-design/icons';

const Nav = styled.nav`
  backdrop-filter: blur(16px);
  background: rgba(255,255,255,0.7);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0,0,0,0.05);

  &:hover {
    box-shadow: 0 8px 30px rgba(0,0,0,0.08);
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, ${accentColor}, #0071e3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// 修改导航链接样式
const NavLink = styled(Link)`
  position: relative;
  color: ${textColor};
  text-decoration: none;
  padding: 8px 0;
  transition: color 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${accentColor};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${accentColor};
  }

  &:hover:after {
    width: 100%;
  }
`;

// 在Navbar组件中使用新样式
function Navbar() {
  // Add missing state and context hooks
  const { theme } = useTheme();
  const { t } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  // Replace undefined variables with theme values
  const accentColor = theme.accentColor;
  const textColor = theme.textColor;
  return (
    <Nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-3 md:py-4">
        <Logo to="/" className="tracking-tight select-none">{t('blogTitle')}</Logo>
        <button className="md:hidden p-2 rounded transition hover:bg-appleGray-light" onClick={() => setOpen(!open)} aria-label="菜单">
          <svg className="w-6 h-6 text-appleGray-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
        <ul className={`flex-col md:flex-row md:flex gap-8 md:gap-10 items-center absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-apple md:shadow-none transition-all duration-300 ${open ? 'flex' : 'hidden md:flex'}`}>
          <li><NavLink to="/" className="text-appleGray-dark hover:text-appleBlue transition">{t('home')}</NavLink></li>
          <li><NavLink to="/blog" className="text-appleGray-dark hover:text-appleBlue transition">{t('blog')}</NavLink></li>
          <li><NavLink to="/about" className="text-appleGray-dark hover:text-appleBlue transition">{t('about')}</NavLink></li>
        </ul>
      </div>
    </Nav>
    // Fix lines with 'open' and 'setOpen' references
    // Replace all instances of 'open' with 'isOpen' and 'setOpen' with 'setIsOpen'
    // Replace window.open() with proper navigation

    return (
      <Menu.Item key="github" icon={<GithubOutlined />} onClick={() => window.open('https://github.com/Patrick7241', '_blank')}>
        {t('github')}
      </Menu.Item>
    );
}

export default Navbar;