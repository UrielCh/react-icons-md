import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NearMe icon from Material Design icons
 * @module
 */
export function MdNearMe(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 3 3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"},child:[]}]})(props);
}
export default MdNearMe;
