export const parsePathnameHandle = (pathname: string) => {
  if (typeof pathname === 'string') {
    const pathnameArr = pathname.split('/');
    if (pathnameArr.length >= 2 && pathnameArr[1] === 'a' && pathnameArr[2]) {
      return pathnameArr[2];
    }
  }
  return null;
};
