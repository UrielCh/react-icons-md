import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Egg icon from Material Design icons
 * @module
 */
export function MdEgg(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm1 15c-3 0-5-1.99-5-5 0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1z"},child:[]}]})(props);
}
export default MdEgg;
