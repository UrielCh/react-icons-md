import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FastForward icon from Material Design icons
 * @module
 */
export function MdFastForward(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"m4 18 8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"},child:[]}]})(props);
}
export default MdFastForward;
