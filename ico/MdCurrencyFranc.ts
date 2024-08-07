import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CurrencyFranc icon from Material Design icons
 * @module
 */
export function MdCurrencyFranc(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M18 5V3H7v13H5v2h2v3h2v-3h4v-2H9v-3h8v-2H9V5z"},child:[]}]})(props);
}
export default MdCurrencyFranc;
