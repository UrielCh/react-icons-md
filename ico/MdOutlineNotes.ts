import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineNotes icon from Material Design icons
 * @module
 */
export function MdOutlineNotes(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 11.01 3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z"},child:[]}]})(props);
}
export default MdOutlineNotes;
