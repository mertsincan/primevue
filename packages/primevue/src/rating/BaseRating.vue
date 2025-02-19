<script>
import BaseEditableHolder2 from '@primevue/core/baseeditableholder2';
import RatingStyle from 'primevue/rating/style';

export default {
    name: 'BaseRating',
    extends: BaseEditableHolder2,
    props: {
        readonly: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            default: 5
        },
        onIcon: {
            type: String,
            default: undefined
        },
        offIcon: {
            type: String,
            default: undefined
        }
    },
    style: RatingStyle,
    provide() {
        return {
            $pcRating: this,
            $parentInstance: this
        };
    }
};
</script>
