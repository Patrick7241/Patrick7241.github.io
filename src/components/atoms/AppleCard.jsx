import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { backgroundColor, cardBg, cardShadow, textColor } from '../../styles/themes/appleTheme';

const FrostedCard = styled(Card)`
  background: ${cardBg};
  color: ${textColor};
  backdrop-filter: blur(16px);
  box-shadow: ${cardShadow};
  border-radius: 24px;
  border: none;
`;

const AppleCard = ({ children, ...props }) => (
  <FrostedCard {...props} bordered>{children}</FrostedCard>
);

export default AppleCard;
// Remove or comment out: const backgroundColor = ...;