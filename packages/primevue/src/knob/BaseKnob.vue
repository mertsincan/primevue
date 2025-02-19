<script>
import { $dt } from '@primeuix/styled';
import BaseEditableHolder2 from '@primevue/core/baseeditableholder2';
import KnobStyle from 'primevue/knob/style';

export default {
    name: 'BaseKnob',
    extends: BaseEditableHolder2,
    props: {
        size: {
            type: Number,
            default: 100
        },
        readonly: {
            type: Boolean,
            default: false
        },
        step: {
            type: Number,
            default: 1
        },
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: 100
        },
        valueColor: {
            type: String,
            default: () => {
                return $dt('knob.value.background').variable;
            }
        },
        rangeColor: {
            type: String,
            default: () => {
                return $dt('knob.range.background').variable;
            }
        },
        textColor: {
            type: String,
            default: () => {
                return $dt('knob.text.color').variable;
            }
        },
        strokeWidth: {
            type: Number,
            default: 14
        },
        showValue: {
            type: Boolean,
            default: true
        },
        valueTemplate: {
            type: [String, Function],
            default: '{value}'
        },
        tabindex: {
            type: Number,
            default: 0
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: KnobStyle,
    provide() {
        return {
            $pcKnob: this,
            $parentInstance: this
        };
    }
};
</script>
