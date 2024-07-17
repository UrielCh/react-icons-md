import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function MdPriorityHigh(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{"cx":"12","cy":"19","r":"2"},child:[]},{tag:"path",attr:{d:"M10 3h4v12h-4z"},child:[]}]})(props);
}
export default MdPriorityHigh;
