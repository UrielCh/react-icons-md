import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowDropUp icon from Material Design icons
 * @module
 */
export function MdArrowDropUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"m7 14 5-5 5 5z"},child:[]}]})(props);
}
export default MdArrowDropUp;
