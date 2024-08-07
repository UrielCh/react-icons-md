import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MapsUgc icon from Material Design icons
 * @module
 */
export function MdMapsUgc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12c0 1.54.36 2.98.97 4.29L1 23l6.71-1.97c1.31.61 2.75.97 4.29.97 5.52 0 10-4.48 10-10S17.52 2 12 2zm4 11h-3v3h-2v-3H8v-2h3V8h2v3h3v2z"},child:[]}]})(props);
}
export default MdMapsUgc;
