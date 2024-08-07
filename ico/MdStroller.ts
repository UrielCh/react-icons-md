import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stroller icon from Material Design icons
 * @module
 */
export function MdStroller(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{"cx":"16","cy":"20","r":"2"},child:[]},{tag:"circle",attr:{"cx":"6","cy":"20","r":"2"},child:[]},{tag:"path",attr:{d:"M22 7v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-8.8 10.32C6.12 16 6.58 17 7.43 17H15c1.1 0 2-.9 2-2V6.27c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2zM14.3 4.1a8.962 8.962 0 0 0-9.58.62l4.89 4.89L14.3 4.1z"},child:[]}]})(props);
}
export default MdStroller;
