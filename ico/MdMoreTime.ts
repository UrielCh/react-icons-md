import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * MoreTime icon from Material Design icons
 * @module
 */
export function MdMoreTime(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 8v6l4.7 2.9.8-1.2-4-2.4V8z"},child:[]},{tag:"path",attr:{d:"M17.92 12A6.957 6.957 0 0 1 11 20c-3.9 0-7-3.1-7-7s3.1-7 7-7c.7 0 1.37.1 2 .29V4.23c-.64-.15-1.31-.23-2-.23-5 0-9 4-9 9s4 9 9 9a8.963 8.963 0 0 0 8.94-10h-2.02z"},child:[]},{tag:"path",attr:{d:"M20 5V2h-2v3h-3v2h3v3h2V7h3V5z"},child:[]}]})(props);
}
export default MdMoreTime;
