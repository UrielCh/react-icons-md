import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Stream icon from Material Design icons
 * @module
 */
export function MdStream(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{"cx":"20","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"20","r":"2"},child:[]},{tag:"path",attr:{d:"M10.05 8.59 6.03 4.55h-.01l-.31-.32-1.42 1.41 4.02 4.05.01-.01.31.32zm3.893.027 4.405-4.392L19.76 5.64l-4.405 4.393zM10.01 15.36l-1.42-1.41-4.03 4.01-.32.33 1.41 1.41 4.03-4.02zm9.75 2.94-3.99-4.01-.36-.35L14 15.35l3.99 4.01.35.35z"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"4","r":"2"},child:[]}]})(props);
}
export default MdStream;
