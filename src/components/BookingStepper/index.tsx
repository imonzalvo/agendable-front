import React, { useContext } from 'react';
import Steps from 'rc-steps';
import { useSpring, animated } from 'react-spring';
import {
  ShopOutlined,
  ProfileOutlined,
  TeamOutlined,
  ScheduleOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

import { BookingContext } from '@/layouts';
import { getCurrentStep } from '@/utils/utils';
import styles from './assets/index.less';
import GlobalStyles from './styles';

const { Step } = Steps;

const BookingStepper = () => {
  const { steps } = useContext(BookingContext);
  const currentStep = getCurrentStep();

  // If there's just one branch (three steps), the current step to display is one less.
  const activeStep = steps === 4 ? currentStep - 1 : currentStep;

  const getGreen = () => {
    if (activeStep === 0) return 0;
    return (100 / steps) * activeStep - 1;
  };
  const getBlack1 = () => {
    if (activeStep === 0) return 0;
    return (100 / steps) * activeStep;
  };
  const getBlack2 = () => {
    if (activeStep === steps) return 100;
    return (100 / steps) * (activeStep + 1) - 1;
  };
  const getGray = () => {
    if (activeStep === steps) return 100;
    return (100 / steps) * (activeStep + 1);
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
        <Steps current={activeStep} className={styles['rc-steps']} labelPlacement="vertical">
          {steps === 5 && <Step icon={<ShopOutlined className="icon" />} />}
          <Step icon={<ProfileOutlined className="icon" />} />
          <Step icon={<TeamOutlined className="icon" />} />
          <Step icon={<ScheduleOutlined className="icon" />} />
          <Step icon={<IdcardOutlined className="icon" />} />
        </Steps>
      </animated.div>
    </>
  );
};

export default BookingStepper;
