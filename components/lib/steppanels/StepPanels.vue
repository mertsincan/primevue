<template>
    <div :class="cx('root')" v-bind="ptm('root')">
        <slot />
    </div>
</template>

<script>
import BaseStepPanels from './BaseStepPanels.vue';

export default {
    name: 'StepPanels',
    extends: BaseStepPanels,
    inheritAttrs: false
};
</script>
