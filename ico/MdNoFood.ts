import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NoFood icon from Material Design icons
 * @module
 */
export function MdNoFood(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.35 8.52 11 5h5V1h2v4h5l-1.38 13.79L11.35 8.52zM1 21v1c0 .55.45 1 1 1h13c.55 0 1-.45 1-1v-1H1zm20.9.9L2.1 2.1.69 3.51l5.7 5.7C3.28 9.87 1 11.99 1 15h11.17l2 2H1v2h15v-.17l4.49 4.49 1.41-1.42z"},child:[]}]})(props);
}
export default MdNoFood;
