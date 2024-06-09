import { dt } from '../helpers';
import { SharedUtils } from '../utils';

export const css = (style) => SharedUtils.object.getItemValue(style, { dt });
