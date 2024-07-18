import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CalendarViewDay icon from Material Design icons
 * @module
 */
export function MdCalendarViewDay(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"},child:[]}]})(props);
}
export default MdCalendarViewDay;
