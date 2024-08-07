import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Festival icon from Material Design icons
 * @module
 */
export function MdFestival(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 5.7V4h3l-1-1.49L16 1h-5v4.7L2 12v10h7v-5l3.03-2L15 17v5h7V12z"},child:[]}]})(props);
}
export default MdFestival;
