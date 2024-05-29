<template>
    <template v-if="isVertical">
        <transition name="p-toggleable-content">
            <div v-show="isActive" :class="cx('root')">
                <StepperSeparator v-if="isSeparatorVisible" />
                <div :class="cx('content')">
                    <slot :clickCallback="(val) => updateValue(val)" />
                </div>
            </div>
        </transition>
    </template>
    <template v-else>
        <div v-if="isActive" :class="cx('root')" v-bind="ptm('root')">
            <slot :clickCallback="(val) => updateValue(val)" />
        </div>
    </template>
</template>

<script>
import { DomHandler, ObjectUtils } from 'primevue/utils';
import StepperSeparator from '../stepper/StepperSeparator.vue';
import BaseStepPanel from './BaseStepPanel.vue';

export default {
    name: 'StepPanel',
    extends: BaseStepPanel,
    inheritAttrs: false,
    inject: {
        $pcStepper: { default: null },
        $pcStepItem: { default: null },
        $pcStepList: { default: null }
    },
    data() {
        return {
            isSeparatorVisible: false
        };
    },
    mounted() {
        if (this.$el) {
            let stepElements = DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]');
            let stepPanelEl = DomHandler.findSingle(this.isVertical ? this.$pcStepItem?.$el : this.$pcStepList?.$el, '[data-pc-name="step"]');
            let stepPanelIndex = ObjectUtils.findIndexInList(stepPanelEl, stepElements);

            this.isSeparatorVisible = this.isVertical && stepPanelIndex !== stepElements.length - 1;
        }
    },
    methods: {
        updateValue(val) {
            this.$pcStepper.updateValue(val);
        }
    },
    computed: {
        isActive() {
            let activeValue = !!this.$pcStepItem ? this.$pcStepItem?.value : this.value;

            return ObjectUtils.equals(activeValue, this.$pcStepper?.d_value);
        },
        isVertical() {
            return !!this.$pcStepItem;
        }
    },
    components: {
        StepperSeparator
    }
};
</script>
