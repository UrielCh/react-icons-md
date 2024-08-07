import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TableRows icon from Material Design icons
 * @module
 */
export function MdTableRows(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z"},child:[]}]})(props);
}
export default MdTableRows;
