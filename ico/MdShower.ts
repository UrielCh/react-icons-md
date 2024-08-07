import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Shower icon from Material Design icons
 * @module
 */
export function MdShower(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"circle",attr:{"cx":"8","cy":"17","r":"1"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"17","r":"1"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"17","r":"1"},child:[]},{tag:"path",attr:{d:"M13 5.08V3h-2v2.08C7.61 5.57 5 8.47 5 12v2h14v-2c0-3.53-2.61-6.43-6-6.92z"},child:[]},{tag:"circle",attr:{"cx":"8","cy":"20","r":"1"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"20","r":"1"},child:[]},{tag:"circle",attr:{"cx":"16","cy":"20","r":"1"},child:[]}]})(props);
}
export default MdShower;
