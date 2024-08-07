import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineKeyboardBackspace icon from Material Design icons
 * @module
 */
export function MdOutlineKeyboardBackspace(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"},child:[]}]})(props);
}
export default MdOutlineKeyboardBackspace;
