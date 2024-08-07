import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Pallet icon from Material Design icons
 * @module
 */
export function MdPallet(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 18v4h3v-2h5.5v2h3v-2H19v2h3v-4zM18 2H6c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-3 6H9V6h6v2z"},child:[]}]})(props);
}
export default MdPallet;
