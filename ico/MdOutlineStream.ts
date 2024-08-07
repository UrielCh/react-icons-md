import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineStream icon from Material Design icons
 * @module
 */
export function MdOutlineStream(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"circle",attr:{"cx":"20","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"4","cy":"12","r":"2"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"20","r":"2"},child:[]},{tag:"path",attr:{d:"m13.943 8.619 4.404-4.392 1.413 1.416-4.405 4.392zM8.32 9.68l.31.32 1.42-1.41-4.02-4.04h-.01l-.31-.32-1.42 1.41 4.02 4.05zM15.41 13.94 14 15.35l3.99 4.01.35.35 1.42-1.41-3.99-4.01zM8.59 13.95l-4.03 4.01-.32.33 1.41 1.41 4.03-4.02.33-.32z"},child:[]},{tag:"circle",attr:{"cx":"12","cy":"4","r":"2"},child:[]}]})(props);
}
export default MdOutlineStream;
