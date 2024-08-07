import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BubbleChart icon from Material Design icons
 * @module
 */
export function MdBubbleChart(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{"cx":"7.2","cy":"14.4","r":"3.2"},child:[]},{tag:"circle",attr:{"cx":"14.8","cy":"18","r":"2"},child:[]},{tag:"circle",attr:{"cx":"15.2","cy":"8.8","r":"4.8"},child:[]}]})(props);
}
export default MdBubbleChart;
