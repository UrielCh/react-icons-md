import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SouthEast icon from Material Design icons
 * @module
 */
export function MdSouthEast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"},child:[]}]})(props);
}
export default MdSouthEast;
