<template>
    <div :class="cx('root')" v-bind="ptm('root')">
        <slot />
    </div>
</template>

<script>
import BaseStepList from './BaseStepList.vue';

export default {
    name: 'StepList',
    extends: BaseStepList,
    inheritAttrs: false
};
</script>
