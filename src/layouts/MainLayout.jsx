import React from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../contexts/ThemeContext';
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from '../styles/themes/appleTheme';

const Root = styled.div`
  min-height: 100vh;
  background: ${backgroundColor};
  color: ${textColor};
  transition: background 0.3s, color 0.3s;
`;

const MainLayout = ({ children }) => {
  const { mode } = useTheme();
  return (
    <StyledThemeProvider theme={{ mode }}>
      <Root>
        <Navbar />
        {/* 修改内容区域 padding，适配移动设备 */}
        <div className="pt-16 md:pt-20 container">{children}</div>
      </Root>
    </StyledThemeProvider>
  );
};

export default MainLayout;