import React from 'react';
import { useLocale } from '../contexts/LocaleContext';

const About = () => {
  const { t } = useLocale();
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-appleGray-dark mb-4">{t('about')}</h2>
      <p className="text-lg text-appleGray-dark/70 mb-6">{t('blogDesc')}</p>
      <div className="text-appleBlue font-medium">By Patrick7241</div>
    </div>
  );
};

export default About; 