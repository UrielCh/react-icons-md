import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Cottage icon from Material Design icons
 * @module
 */
export function MdCottage(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h7v-6h2v6h7v-9.38l1.79 1.36L23 11.4 12 3zm-2-2c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z"},child:[]}]})(props);
}
export default MdCottage;
