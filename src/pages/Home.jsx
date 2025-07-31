import React, { Suspense } from 'react';
import { useLocale } from '../contexts/LocaleContext';
import styled from 'styled-components';
import { gradientBg, textColor, cardBg, cardShadow, accentColor } from '../styles/themes/appleTheme';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const StyledCanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.2;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
  text-align: center;
`;

const MainCard = styled.main`
  width: 100%;
  max-width: 32rem;
  background: ${cardBg};
  color: ${textColor};
  border-radius: 2rem;
  box-shadow: ${cardShadow};
  padding: 2rem;
  margin: 0 auto;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  backdrop-filter: blur(12px);

  &:hover {
    transform: translateY(-10px) scale(1.01);
    box-shadow: ${hoverShadow};
  }
`;

const Home = () => {
  const { t } = useLocale();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* 3D背景元素 */}
      <StyledCanvasContainer>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Sphere position={[-2, 0, 0]} args={[1.5, 32, 32]}>
              <meshStandardMaterial color={0x0071e3} transparent opacity={0.6} />
            </Sphere>
            <Sphere position={[2, -1, 0]} args={[1, 32, 32]}>
              <meshStandardMaterial color={0x34c759} transparent opacity={0.6} />
            </Sphere>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </Suspense>
      </StyledCanvasContainer>

      <ContentWrapper>
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-accentColor to-blue-400">
            {t('blogTitle')}
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            {t('blogDesc')}
          </p>
        </header>

        <MainCard>
          <div className="text-center text-base md:text-lg space-y-4">
            <p>{t('welcomeMessage')}</p>
            <div className="pt-4">
              <a href="/blog" className="inline-block px-6 py-3 bg-gradient-to-r from-accentColor to-blue-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-accentColor/30 hover:-translate-y-1">
                {t('exploreArticles')}
              </a>
            </div>
          </div>
        </MainCard>
      </ContentWrapper>
    </div>
  );
};

export default Home;
// Remove or comment out: const backgroundColor = ...;
// Add missing style definition
const hoverShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
