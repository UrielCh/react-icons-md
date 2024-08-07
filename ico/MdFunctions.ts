import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Functions icon from Material Design icons
 * @module
 */
export function MdFunctions(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"},child:[]}]})(props);
}
export default MdFunctions;
