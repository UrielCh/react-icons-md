import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipPrevious icon from Material Design icons
 * @module
 */
export function MdSkipPrevious(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 6h2v12H6zm3.5 6 8.5 6V6z"},child:[]}]})(props);
}
export default MdSkipPrevious;
