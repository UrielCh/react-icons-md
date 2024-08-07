import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Upgrade icon from Material Design icons
 * @module
 */
export function MdUpgrade(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 18v2H8v-2h8zM11 7.99V16h2V7.99h3L12 4 8 7.99h3z"},child:[]}]})(props);
}
export default MdUpgrade;
