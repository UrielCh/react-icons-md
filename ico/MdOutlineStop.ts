import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineStop icon from Material Design icons
 * @module
 */
export function MdOutlineStop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 8v8H8V8h8m2-2H6v12h12V6z"},child:[]}]})(props);
}
export default MdOutlineStop;
