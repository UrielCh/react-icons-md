import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineSpaceBar icon from Material Design icons
 * @module
 */
export function MdOutlineSpaceBar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M18 9v4H6V9H4v6h16V9h-2z"},child:[]}]})(props);
}
export default MdOutlineSpaceBar;
