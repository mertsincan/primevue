import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance, props }) => [
        'p-step',
        {
            'p-step-active': instance.isStepActive(),
            'p-disabled': instance.isStepDisabled() || props.disabled
        }
    ],
    header: 'p-step-header',
    number: 'p-step-number',
    title: 'p-step-title'
};

export default BaseStyle.extend({
    name: 'step',
    classes
});
