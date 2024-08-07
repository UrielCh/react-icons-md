import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineShortText icon from Material Design icons
 * @module
 */
export function MdOutlineShortText(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 9h16v2H4V9zm0 4h10v2H4v-2z"},child:[]}]})(props);
}
export default MdOutlineShortText;
