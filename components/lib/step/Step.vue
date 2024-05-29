<template>
    <div :class="cx('root')" role="presentation" v-bind="ptm('root')">
        <button :class="cx('header')" role="tab" @click="onStepClick">
            <span :class="cx('number')">{{ activeValue }}</span>
            <span :class="cx('title')">
                <slot />
            </span>
        </button>
        <StepperSeparator v-if="isSeparatorVisible" />
    </div>
</template>

<script>
import { DomHandler, ObjectUtils } from 'primevue/utils';
import StepperSeparator from '../stepper/StepperSeparator.vue';
import BaseStep from './BaseStep.vue';

export default {
    name: 'Step',
    extends: BaseStep,
    inheritAttrs: false,
    inject: {
        $pcStepper: { default: null },
        $pcStepList: { default: null },
        $pcStepItem: { default: null }
    },
    data() {
        return {
            isSeparatorVisible: false
        };
    },
    mounted() {
        if (this.$el && this.$pcStepList) {
            let index = ObjectUtils.findIndexInList(this.$el, DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]'));
            let stepLen = DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]').length;

            this.isSeparatorVisible = index !== stepLen - 1;
        }
    },
    methods: {
        isStepActive() {
            return this.$pcStepper.isStepActive(this.activeValue);
        },
        isStepDisabled() {
            return this.$pcStepper.isStepDisabled();
        },
        onStepClick() {
            this.$pcStepper.updateValue(this.activeValue);
        }
    },
    computed: {
        activeValue() {
            return !!this.$pcStepItem ? this.$pcStepItem?.value : this.value;
        }
    },
    components: {
        StepperSeparator
    }
};
</script>
