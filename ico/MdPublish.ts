import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Publish icon from Material Design icons
 * @module
 */
export function MdPublish(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"},child:[]}]})(props);
}
export default MdPublish;
