import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DoubleArrow icon from Material Design icons
 * @module
 */
export function MdDoubleArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.5 5H11l5 7-5 7h4.5l5-7z"},child:[]},{tag:"path",attr:{d:"M8.5 5H4l5 7-5 7h4.5l5-7z"},child:[]}]})(props);
}
export default MdDoubleArrow;
