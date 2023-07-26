export const parsePathnameHandle = (pathname: string) => {
  const location = window.location.hostname;

  if (location.includes('agendable.io')) {
    return getPathnameHandleFromProd(pathname);
  } else {
    if (typeof pathname === 'string') {
      const pathnameArr = pathname.split('/');
      if (pathnameArr.length >= 2 && pathnameArr[1] === 'a' && pathnameArr[2]) {
        return pathnameArr[2];
      }
    }
    return null;
  }
};

const getPathnameHandleFromProd = (pathname: string) => {
  const location = window.location.hostname;
  const separatedLocation = location.split('.');

  const isLongPathBusinessDomain =
    separatedLocation.length == 4 && separatedLocation.includes('www');
  const isShortPathBusinessDomain =
    separatedLocation.length == 3 && !separatedLocation.includes('www');

  if (
    (isLongPathBusinessDomain || isShortPathBusinessDomain) &&
    separatedLocation[separatedLocation.length - 3] != 'app'
  ) {
    return separatedLocation[separatedLocation.length - 3];
  }

  if (typeof pathname === 'string') {
    const pathnameArr = pathname.split('/');
    if (pathnameArr.length >= 2 && pathnameArr[1] === 'a' && pathnameArr[2]) {
      return pathnameArr[2];
    }
  }
  return null;
};

// export const parsePathnameHandle = (pathname: string) => {
//   if (typeof pathname === 'string') {
//     const pathnameArr = pathname.split('/a/');
//     console.log("/a/", pathname, pathnameArr)
//     if (pathnameArr.length >= 2) {
//       const businessName = pathnameArr[1].replace('/', '')
//       return businessName;
//     }
//   }
//   return null;
// };
