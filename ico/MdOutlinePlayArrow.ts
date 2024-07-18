import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlinePlayArrow icon from Material Design icons
 * @module
 */
export function MdOutlinePlayArrow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"},child:[]}]})(props);
}
export default MdOutlinePlayArrow;
