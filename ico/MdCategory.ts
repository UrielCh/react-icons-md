import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Category icon from Material Design icons
 * @module
 */
export function MdCategory(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"m12 2-5.5 9h11z"},child:[]},{tag:"circle",attr:{"cx":"17.5","cy":"17.5","r":"4.5"},child:[]},{tag:"path",attr:{d:"M3 13.5h8v8H3z"},child:[]}]})(props);
}
export default MdCategory;
