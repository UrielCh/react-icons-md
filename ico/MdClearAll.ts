import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ClearAll icon from Material Design icons
 * @module
 */
export function MdClearAll(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"},child:[]}]})(props);
}
export default MdClearAll;
