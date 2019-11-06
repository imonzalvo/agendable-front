import { parsePathnameHandle } from './parsePathnameHandle';

describe('parsePathnameHandle tests', (): void => {
  it('should return false for invalid and corner case inputs', (): void => {
    expect(parsePathnameHandle([] as any)).toBeFalsy();
    expect(parsePathnameHandle({} as any)).toBeFalsy();
    expect(parsePathnameHandle(false as any)).toBeFalsy();
    expect(parsePathnameHandle(true as any)).toBeFalsy();
    expect(parsePathnameHandle(NaN as any)).toBeFalsy();
    expect(parsePathnameHandle(null as any)).toBeFalsy();
    expect(parsePathnameHandle(undefined as any)).toBeFalsy();
    expect(parsePathnameHandle('')).toBeFalsy();
  });

  it('should return falsy for invalid pathanme handle', (): void => {
    expect(parsePathnameHandle('foo')).toBeFalsy();
    expect(parsePathnameHandle('bar')).toBeFalsy();
    expect(parsePathnameHandle('bar/test')).toBeFalsy();
    expect(parsePathnameHandle('/example/')).toBeFalsy();
    expect(parsePathnameHandle('/a//')).toBeFalsy();
    expect(parsePathnameHandle('/a/')).toBeFalsy();
    expect(parsePathnameHandle('a/bar/')).toBeFalsy();
  });

  it('should return true for valid URLs', (): void => {
    expect(parsePathnameHandle('/a/negocio')).toBe('negocio');
    expect(parsePathnameHandle('/a/negocio/')).toBe('negocio');
    expect(parsePathnameHandle('/a/negocio-o/')).toBe('negocio-o');
    expect(parsePathnameHandle('/a/negocio/bar')).toBe('negocio');
    expect(parsePathnameHandle('/a/negocio/?query="stuff"')).toBe('negocio');
  });
});
