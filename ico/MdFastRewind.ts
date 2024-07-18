import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FastRewind icon from Material Design icons
 * @module
 */
export function MdFastRewind(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11 18V6l-8.5 6 8.5 6zm.5-6 8.5 6V6l-8.5 6z"},child:[]}]})(props);
}
export default MdFastRewind;
