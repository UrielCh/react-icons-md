import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Bungalow icon from Material Design icons
 * @module
 */
export function MdBungalow(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3 4.2 15.5l1.7 1.06L7 14.8V21h4v-5h2v5h4v-6.21l1.1 1.77 1.7-1.06L12 3zm1 11h-2v-2h2v2z"},child:[]}]})(props);
}
export default MdBungalow;
