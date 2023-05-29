export const parsePathnameHandle = (pathname: string) => {
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
