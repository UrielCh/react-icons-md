import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Flag icon from Material Design icons
 * @module
 */
export function MdFlag(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"},child:[]}]})(props);
}
export default MdFlag;
