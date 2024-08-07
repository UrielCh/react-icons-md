import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * AlignVerticalBottom icon from Material Design icons
 * @module
 */
export function MdAlignVerticalBottom(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"},child:[]}]})(props);
}
export default MdAlignVerticalBottom;
