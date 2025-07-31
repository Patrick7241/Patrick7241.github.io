import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
// Remove or comment out: import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import MainLayout from './layouts/MainLayout';
import routes from './routes';
import { ConfigProvider } from 'antd';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './config/antd.config.js';
import { LocaleProvider, useLocale } from './contexts/LocaleContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWithTheme() {
  const { mode } = useTheme();
  const { antdLocale } = useLocale();
  return (
    <ConfigProvider theme={mode === 'dark' ? darkTheme : lightTheme} locale={antdLocale}>
      <Router>
        <MainLayout>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </MainLayout>
      </Router>
    </ConfigProvider>
  );
}

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LocaleProvider>
        <AppWithTheme />
      </LocaleProvider>
    </ThemeProvider>
  </React.StrictMode>
);
reportWebVitals();