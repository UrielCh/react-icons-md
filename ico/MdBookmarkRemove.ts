import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * BookmarkRemove icon from Material Design icons
 * @module
 */
export function MdBookmarkRemove(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 7h-6V5h6v2zm-2 3.9A5.002 5.002 0 0 1 14 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V10.9z"},child:[]}]})(props);
}
export default MdBookmarkRemove;
