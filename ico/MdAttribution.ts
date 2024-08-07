import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Attribution icon from Material Design icons
 * @module
 */
export function MdAttribution(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 8.5c-.91 0-2.75.46-2.75 1.38v4.62h1.5V19h2.5v-4.5h1.5V9.88c0-.91-1.84-1.38-2.75-1.38z"},child:[]},{tag:"path",attr:{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"6.5","r":"1.5"},child:[]}]})(props);
}
export default MdAttribution;
