import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OpenInBrowser icon from Material Design icons
 * @module
 */
export function MdOpenInBrowser(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm-7 6-4 4h3v6h2v-6h3l-4-4z"},child:[]}]})(props);
}
export default MdOpenInBrowser;
