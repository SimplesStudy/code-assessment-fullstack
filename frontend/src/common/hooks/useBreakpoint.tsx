/**
 * @desc The 'useBreakpoint()' hook is used to get the current
 *       screen breakpoint based on the TailwindCSS config.
 *
 * @usage
 *    import { useBreakpoint } from "@/hooks/useBreakpoint";
 *
 *    const { isAboveSm, isBelowSm, sm } = useBreakpoint("sm");
 *    console.log({ isAboveSm, isBelowSm, sm });
 *
 *    const { isAboveMd } = useBreakpoint("md");
 *    const { isAboveLg } = useBreakpoint("lg");
 *    const { isAbove2Xl } = useBreakpoint("2xl");
 *    console.log({ isAboveMd, isAboveLg, isAbove2Xl });
 *
 * @see https://stackoverflow.com/a/76630444/6543935
 */
import { useMediaQuery } from 'react-responsive';
import resolveConfig from 'tailwindcss/resolveConfig';
import { Config } from 'tailwindcss/types/config';

import tailwindConfig from '@frontend/../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

const breakpoints = fullConfig.theme.screens;

export function useBreakpoint<K extends string>(breakpointKey: K) {
  const breakpointValue =
    breakpoints[breakpointKey as keyof typeof breakpoints];
  const bool = useMediaQuery({
    query: `(max-width: ${breakpointValue})`,
  });
  const capitalizedKey =
    breakpointKey[0].toUpperCase() + breakpointKey.substring(1);

  type KeyAbove = `isAbove${Capitalize<K>}`;
  type KeyBelow = `isBelow${Capitalize<K>}`;

  return {
    [breakpointKey]: Number(String(breakpointValue).replace(/[^0-9]/g, '')),
    [`isAbove${capitalizedKey}`]: !bool,
    [`isBelow${capitalizedKey}`]: bool,
  } as Record<K, number> & Record<KeyAbove | KeyBelow, boolean>;
}
