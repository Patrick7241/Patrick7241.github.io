import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#f5f5f7',
  dark: '#18181a',
});

export const textColor = theme('mode', {
  light: '#1d1d1f',
  dark: '#f5f5f7',
});

export const cardBg = theme('mode', {
  light: 'rgba(255,255,255,0.85)',
  dark: 'rgba(36,36,38,0.85)',
});

export const cardShadow = theme('mode', {
  light: '0 10px 30px -5px rgba(0,0,0,0.08)',
  dark: '0 10px 30px -5px rgba(0,0,0,0.3)',
});

// 添加现代设计变量

export const gradientBg = theme('mode', {
  light: 'linear-gradient(135deg, #f5f5f7 0%, #e9e9ed 100%)',
  dark: 'linear-gradient(135deg, #18181a 0%, #2c2c2e 100%)',
});

export const accentColor = theme('mode', {
  light: '#0071e3',
  dark: '#34c759',
});

export const hoverShadow = theme('mode', {
  light: '0 20px 40px -5px rgba(0,0,0,0.12)',
  dark: '0 20px 40px -5px rgba(0,0,0,0.4)',
});

export const primaryColor = theme('mode', {
  light: '#0071e3',
  dark: '#0071e3',
});

export const borderColor = theme('mode', {
  light: '#d2d2d7',
  dark: '#333',
});