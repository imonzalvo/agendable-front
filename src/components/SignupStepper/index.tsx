import React from 'react';
import Steps from 'rc-steps';
import { useSpring, animated } from 'react-spring';
import { ShopOutlined, ProfileOutlined, TeamOutlined } from '@ant-design/icons';

import styles from './assets/index.less';
import GlobalStyles from './styles';

const { Step } = Steps;

const SignupStepper = ({ steps, currentStep }) => {
  const getGreen = () => {
    if (currentStep === 0) return 0;
    return (100 / steps) * currentStep - 1;
  };
  const getBlack1 = () => {
    if (currentStep === 0) return 0;
    return (100 / steps) * currentStep;
  };
  const getBlack2 = () => {
    if (currentStep === steps) return 100;
    return (100 / steps) * (currentStep + 1) - 1;
  };
  const getGray = () => {
    if (currentStep === steps) return 100;
    return (100 / steps) * (currentStep + 1);
  };

  const props = useSpring({
    background: `linear-gradient(
      90deg,
      rgb(51, 204, 153) ${getGreen()}%,
      rgb(51, 51, 51) ${getBlack1()}%,
      rgb(51, 51, 51) ${getBlack2()}%,
      rgb(204, 204, 204) ${getGray()}%
    )`,
  });

  return (
    <>
      <GlobalStyles />
      <animated.div className="stepper-container" style={props}>
        <Steps current={currentStep} className={styles['rc-steps']} labelPlacement="vertical">
          <Step icon={<ShopOutlined className="icon" />} />
          <Step icon={<ProfileOutlined className="icon" />} />
          <Step icon={<TeamOutlined className="icon" />} />
        </Steps>
      </animated.div>
    </>
  );
};

export default SignupStepper;
