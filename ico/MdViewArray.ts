import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ViewArray icon from Material Design icons
 * @module
 */
export function MdViewArray(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 5h-3v14h3V5zm-4 0H7v14h10V5zM6 5H3v14h3V5z"},child:[]}]})(props);
}
export default MdViewArray;
