import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * SendToMobile icon from Material Design icons
 * @module
 */
export function MdSendToMobile(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17 17h2v4c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-1.99 2-1.99L17 1c1.1 0 2 .9 2 2v4h-2V6H7v12h10v-1zm5-5-4-4v3h-5v2h5v3l4-4z"},child:[]}]})(props);
}
export default MdSendToMobile;
