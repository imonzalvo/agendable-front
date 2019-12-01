import { useEffect, useRef, EffectCallback } from 'react';

/**
 * Same as useEffect but don't call effect function on mount
 * @param effect the function for useEffect
 * @param deps the dependency array for useEffect
 */
export default function useEffectSkipMount(
  effect: EffectCallback,
  deps: readonly (any | undefined)[],
) {
  const flag = useRef(false);

  useEffect(() => {
    if (flag.current) {
      return effect();
    }

    flag.current = true;
  }, deps);
}
