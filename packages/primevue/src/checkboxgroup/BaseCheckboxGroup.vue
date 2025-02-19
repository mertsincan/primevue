<script>
import BaseEditableHolder2 from '@primevue/core/baseeditableholder2';
import CheckboxGroupStyle from 'primevue/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder2,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>
