import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * TurnRight icon from Material Design icons
 * @module
 */
export function MdTurnRight(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"m17.17 11-1.59 1.59L17 14l4-4-4-4-1.41 1.41L17.17 9H9c-1.1 0-2 .9-2 2v9h2v-9h8.17z"},child:[]}]})(props);
}
export default MdTurnRight;
