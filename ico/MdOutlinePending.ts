import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlinePending icon from Material Design icons
 * @module
 */
export function MdOutlinePending(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]},{tag:"circle",attr:{"cx":"7","cy":"12","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"1.5"},child:[]},{tag:"circle",attr:{"cx":"17","cy":"12","r":"1.5"},child:[]}]})(props);
}
export default MdOutlinePending;
