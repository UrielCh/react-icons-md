import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FormatQuote icon from Material Design icons
 * @module
 */
export function MdFormatQuote(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"},child:[]}]})(props);
}
export default MdFormatQuote;
