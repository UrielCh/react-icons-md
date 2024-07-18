import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlinePause icon from Material Design icons
 * @module
 */
export function MdOutlinePause(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19h4V5H6v14zm8-14v14h4V5h-4z"},child:[]}]})(props);
}
export default MdOutlinePause;
