import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ArrowRight icon from Material Design icons
 * @module
 */
export function MdArrowRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m10 17 5-5-5-5v10z"}},{tag:"path",attr:{fill:"none",d:"M0 24V0h24v24H0z"},child:[]}]})(props);
}
export default MdArrowRight;
