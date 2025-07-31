const lightTheme = {
  token: {
    colorPrimary: '#0071e3',
    colorBgBase: '#f5f5f7',
    colorTextBase: '#1d1d1f',
    borderRadius: 12,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
  components: {
    Card: {
      borderRadiusLG: 24,
      boxShadow: '0 4px 12px 0 rgba(0,0,0,0.08)',
      colorBgContainer: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(16px)',
    },
    Modal: {
      colorBgElevated: 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(16px)',
    },
  },
};

const darkTheme = {
  token: {
    colorPrimary: '#0071e3',
    colorBgBase: '#18181a',
    colorTextBase: '#f5f5f7',
    borderRadius: 12,
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
  },
  components: {
    Card: {
      borderRadiusLG: 24,
      boxShadow: '0 4px 12px 0 rgba(0,0,0,0.16)',
      colorBgContainer: 'rgba(36,36,38,0.7)',
      backdropFilter: 'blur(16px)',
    },
    Modal: {
      colorBgElevated: 'rgba(36,36,38,0.7)',
      backdropFilter: 'blur(16px)',
    },
  },
};

export { lightTheme, darkTheme }; 