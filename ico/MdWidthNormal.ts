import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * WidthNormal icon from Material Design icons
 * @module
 */
export function MdWidthNormal(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h4v12H4V6zm16 12h-4V6h4v12z"},child:[]}]})(props);
}
export default MdWidthNormal;
