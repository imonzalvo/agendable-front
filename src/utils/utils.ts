import useSubdomain from '@/hooks/useSubdomain';

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

const isUrl = (path: string): boolean => reg.test(path);

const getUrl = (path: string) => {
  // TODO: Fix later
  if (!useSubdomain() || true) {
    return `/${window.localStorage.getItem('businessHandle')}/${path}`;
  }
  return `/${path}`;
};

const getCurrentStep = (): number => {
  const currentUrl = location.pathname.split('/').pop();
  switch (currentUrl) {
    case 'select-branch':
      return 0;
    case 'select-service':
      return 1;
    case 'select-professional':
      return 2;
    case 'select-date':
      return 3;
    case 'confirm':
      return 4;
    default:
      return 0;
  }
};

const isAntDesignPro = (): boolean => {
  if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return true;
  }
  return window.location.hostname === 'preview.pro.ant.design';
};

// 给官方演示站点用，用于关闭真实开发环境不需要使用的特性
const isAntDesignProOrDev = (): boolean => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development') {
    return true;
  }
  return isAntDesignPro();
};

const defaultScreenSizes = {
  xs: 0,
  sm: 480,
  md: 576,
  lg: 768,
};

export { isAntDesignProOrDev, isAntDesignPro, isUrl, getUrl, defaultScreenSizes, getCurrentStep };
