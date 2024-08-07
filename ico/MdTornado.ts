import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Tornado icon from Material Design icons
 * @module
 */
export function MdTornado(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zM18.95 10H5.05l1.74 3h10.42z"},child:[]}]})(props);
}
export default MdTornado;
