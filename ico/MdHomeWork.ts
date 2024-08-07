import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HomeWork icon from Material Design icons
 * @module
 */
export function MdHomeWork(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M1 11v10h5v-6h4v6h5V11L8 6z"},child:[]},{tag:"path",attr:{d:"M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"},child:[]}]})(props);
}
export default MdHomeWork;
