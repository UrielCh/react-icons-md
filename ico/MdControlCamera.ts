import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ControlCamera icon from Material Design icons
 * @module
 */
export function MdControlCamera(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.54 5.54 13.77 7.3 12 5.54 10.23 7.3 8.46 5.54 12 2zm2.92 10-1.76-1.77L18.46 12l-1.76-1.77 1.76-1.77L22 12zm-10 2.92 1.77-1.76L12 18.46l1.77-1.76 1.77 1.76L12 22zm-2.92-10 1.76 1.77L5.54 12l1.76 1.77-1.76 1.77L2 12z"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"12","r":"3"},child:[]}]})(props);
}
export default MdControlCamera;
