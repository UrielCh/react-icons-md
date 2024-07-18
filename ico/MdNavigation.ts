import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Navigation icon from Material Design icons
 * @module
 */
export function MdNavigation(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2 4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"},child:[]}]})(props);
}
export default MdNavigation;
