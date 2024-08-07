import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignHorizontalLeft icon from Material Design icons
 * @module
 */
export function MdAlignHorizontalLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"},child:[]}]})(props);
}
export default MdAlignHorizontalLeft;
