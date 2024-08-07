import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignVerticalTop icon from Material Design icons
 * @module
 */
export function MdAlignVerticalTop(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M22 2v2H2V2h20zM7 22h3V6H7v16zm7-6h3V6h-3v10z"},child:[]}]})(props);
}
export default MdAlignVerticalTop;
