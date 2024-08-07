import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CoPresent icon from Material Design icons
 * @module
 */
export function MdCoPresent(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 3H3c-1.1 0-2 .9-2 2v8h2V5h18v16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},child:[]},{tag:"circle",attr:{"cx":"9","cy":"10","r":"4"},child:[]},{tag:"path",attr:{d:"M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66z"},child:[]}]})(props);
}
export default MdCoPresent;
