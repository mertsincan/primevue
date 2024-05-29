<template>
    <div v-if="isActive" :class="cx('root')" v-bind="ptm('root')">
        <slot :clickCallback="(val) => updateValue(val)" />
    </div>
</template>

<script>
import { ObjectUtils } from 'primevue/utils';
import BaseStepPanel from './BaseStepPanel.vue';

export default {
    name: 'StepPanels',
    extends: BaseStepPanel,
    inheritAttrs: false,
    inject: ['$pcStepper'],
    methods: {
        updateValue(val) {
            this.$pcStepper.updateValue(val);
        }
    },
    computed: {
        isActive() {
            return ObjectUtils.equals(this.$pcStepper?.d_value, this.value);
        }
    }
};
</script>
