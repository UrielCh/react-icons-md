import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineArrowDropUp icon from Material Design icons
 * @module
 */
export function MdOutlineArrowDropUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"m7 14 5-5 5 5H7z"},child:[]}]})(props);
}
export default MdOutlineArrowDropUp;
