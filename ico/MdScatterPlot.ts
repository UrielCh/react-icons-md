import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ScatterPlot icon from Material Design icons
 * @module
 */
export function MdScatterPlot(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"circle",attr:{"cx":"7","cy":"14","r":"3"},child:[]},{tag:"circle",attr:{"cx":"11","cy":"6","r":"3"},child:[]},{tag:"circle",attr:{"cx":"16.6","cy":"17.6","r":"3"},child:[]}]})(props);
}
export default MdScatterPlot;
