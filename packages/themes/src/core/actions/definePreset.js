import { SharedUtils } from '../utils';

export default (...presets) => SharedUtils.object.mergeKeys(...presets);
