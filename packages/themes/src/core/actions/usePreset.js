import Theme from '../config';
import { SharedUtils } from '../utils';

export default (...presets) => {
    const newPreset = SharedUtils.object.mergeKeys(...presets);

    Theme.setPreset(newPreset);

    return newPreset;
};
