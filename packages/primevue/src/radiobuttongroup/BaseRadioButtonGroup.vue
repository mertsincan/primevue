<script>
import BaseEditableHolder2 from '@primevue/core/baseeditableholder2';
import RadioButtonGroupStyle from 'primevue/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder2,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>
