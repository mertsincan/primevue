<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import { ObjectUtils } from 'primevue/utils';
import BaseStepItem from './BaseStepItem.vue';

export default {
    name: 'StepItem',
    extends: BaseStepItem,
    inheritAttrs: false,
    inject: ['$pcStepper'],
    computed: {
        isActive() {
            return ObjectUtils.equals(this.$pcStepper?.d_value, this.value);
        }
    }
};
</script>
