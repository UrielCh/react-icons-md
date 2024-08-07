import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Forest icon from Material Design icons
 * @module
 */
export function MdForest(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 12 9 2 2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z"},child:[]},{tag:"path",attr:{d:"M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z"},child:[]}]})(props);
}
export default MdForest;
