import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NotAccessible icon from Material Design icons
 * @module
 */
export function MdNotAccessible(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"m14 11.05-3.42-3.42c.32-.34.74-.57 1.23-.61.48-.04.84.07 1.2.26.19.1.39.22.63.46l1.29 1.43c.98 1.08 2.53 1.85 4.07 1.83v2c-1.75-.01-3.71-.88-5-1.95zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM2.81 2.81 1.39 4.22 10 12.83V15c0 1.1.9 2 2 2h2.17l5.61 5.61 1.41-1.41L2.81 2.81zM10 20c-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1a5 5 0 1 0 5.9 5.9h-2.07c-.41 1.16-1.52 2-2.83 2z"},child:[]}]})(props);
}
export default MdNotAccessible;
