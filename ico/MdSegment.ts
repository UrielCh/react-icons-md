import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Segment icon from Material Design icons
 * @module
 */
export function MdSegment(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"},child:[]}]})(props);
}
export default MdSegment;
