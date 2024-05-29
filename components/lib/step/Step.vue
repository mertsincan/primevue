<template>
    <div :class="cx('root')" role="presentation" v-bind="ptm('root')">
        <button :class="cx('header')" role="tab" @click="onStepClick($event, index)">
            <span :class="cx('number')">{{ value }}</span>
            <span :class="cx('title')">
                <slot />
            </span>
        </button>
        <StepperSeparator v-if="isSeparatorVisible" />
    </div>
</template>

<script>
import { DomHandler, ObjectUtils } from 'primevue/utils';
import BaseStep from './BaseStep.vue';
import StepperSeparator from '../stepper/StepperSeparator.vue';

export default {
    name: 'Step',
    extends: BaseStep,
    inheritAttrs: false,
    inject: {
        $pcStepper: { default: null },
        $pcStepList: { default: null }
    },
    data() {
        return {
            isSeparatorVisible: false
        };
    },
    mounted() {
        if (this.$el) {
            let index = ObjectUtils.findIndexInList(this.$el, DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]'));
            let stepLen = DomHandler.find(this.$pcStepper.$el, '[data-pc-name="step"]').length;

            this.isSeparatorVisible = index !== stepLen - 1 && ObjectUtils.isNotEmpty(this.$pcStepList);
        }
    },
    methods: {
        isStepActive() {
            return this.$pcStepper.isStepActive(this.value);
        },
        isStepDisabled() {
            return this.$pcStepper.isStepDisabled();
        },
        onStepClick() {
            this.$pcStepper.updateValue(this.value);
        }
    },
    components: {
        StepperSeparator
    }
};
</script>
