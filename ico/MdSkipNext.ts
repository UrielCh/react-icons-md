import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SkipNext icon from Material Design icons
 * @module
 */
export function MdSkipNext(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"},child:[]}]})(props);
}
export default MdSkipNext;
