import BaseStyle from 'primevue/base/style';

const classes = {
    root: ({ instance }) => [
        'p-steppanels',
        {
            // 'p-steppanels-active': instance.isVertical() && instance.isStepActive()
        }
    ]
};

export default BaseStyle.extend({
    name: 'steppanels',
    classes
});
