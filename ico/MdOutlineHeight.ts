import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineHeight icon from Material Design icons
 * @module
 */
export function MdOutlineHeight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 6.99h3L12 3 8 6.99h3v10.02H8L12 21l4-3.99h-3z"},child:[]}]})(props);
}
export default MdOutlineHeight;
