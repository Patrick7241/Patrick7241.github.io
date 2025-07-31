import React, { createContext, useContext, useState, useMemo } from 'react';
import zhCN from 'antd/locale/zh_CN';
import enUS from 'antd/locale/en_US';

const LocaleContext = createContext();

const localeMap = {
  zh: zhCN,
  en: enUS,
};

const messages = {
  zh: {
    home: '首页',
    blog: '博客',
    about: '关于',
    theme: '主题',
    lang: '语言',
    blogTitle: '极简博客',
    blogDesc: '',
    noArticles: '暂无文章',
    searchPlaceholder: '搜索文章...',
    allCategories: '全部分类',
    frontend: '前端',
    backend: '后端',
    by: '作者',
    loading: '加载中...',
    dark: '暗黑',
    light: '明亮',
    zh: '中文',
    en: 'EN',
  },
  en: {
    home: 'Home',
    blog: 'Blog',
    about: 'About',
    theme: 'Theme',
    lang: 'Language',
    blogTitle: 'Minimal Blog',
    blogDesc: '',
    noArticles: 'No articles',
    searchPlaceholder: 'Search articles...',
    allCategories: 'All Categories',
    frontend: 'Frontend',
    backend: 'Backend',
    by: 'By',
    loading: 'Loading...',
    dark: 'Dark',
    light: 'Light',
    zh: '中文',
    en: 'EN',
  },
};

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('zh');
  const toggleLocale = () => setLocale(l => (l === 'zh' ? 'en' : 'zh'));
  const value = useMemo(() => ({ locale, toggleLocale, antdLocale: localeMap[locale], t: (k) => messages[locale][k] }), [locale]);
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext); 