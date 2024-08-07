import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * GetApp icon from Material Design icons
 * @module
 */
export function MdGetApp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"},child:[]}]})(props);
}
export default MdGetApp;
