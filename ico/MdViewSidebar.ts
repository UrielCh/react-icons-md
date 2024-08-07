import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * ViewSidebar icon from Material Design icons
 * @module
 */
export function MdViewSidebar(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 20H2V4h14v16zm2-12h4V4h-4v4zm0 12h4v-4h-4v4zm0-6h4v-4h-4v4z"},child:[]}]})(props);
}
export default MdViewSidebar;
