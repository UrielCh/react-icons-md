import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DataArray icon from Material Design icons
 * @module
 */
export function MdDataArray(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15 4v2h3v12h-3v2h5V4zM4 20h5v-2H6V6h3V4H4z"},child:[]}]})(props);
}
export default MdDataArray;
