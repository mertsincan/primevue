<script>
import BaseComponent from 'primevue/basecomponent';
import StepStyle from 'primevue/step/style';

export default {
    name: 'BaseStep',
    extends: BaseComponent,
    props: {
        value: {
            type: String,
            default: undefined
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    style: StepStyle,
    provide() {
        return {
            $pcStep: this,
            $parentInstance: this
        };
    }
};
</script>
