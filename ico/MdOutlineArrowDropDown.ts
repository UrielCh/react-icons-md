import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineArrowDropDown icon from Material Design icons
 * @module
 */
export function MdOutlineArrowDropDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"m7 10 5 5 5-5H7z"},child:[]}]})(props);
}
export default MdOutlineArrowDropDown;
