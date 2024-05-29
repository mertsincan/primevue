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
