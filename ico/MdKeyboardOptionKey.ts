import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * KeyboardOptionKey icon from Material Design icons
 * @module
 */
export function MdKeyboardOptionKey(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z"},child:[]}]})(props);
}
export default MdKeyboardOptionKey;
