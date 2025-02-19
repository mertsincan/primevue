<script>
import BaseEditableHolder2 from '@primevue/core/baseeditableholder2';
import EditorStyle from 'primevue/editor/style';

export default {
    name: 'BaseEditor',
    extends: BaseEditableHolder2,
    props: {
        placeholder: String,
        readonly: Boolean,
        formats: Array,
        editorStyle: null,
        modules: null
    },
    style: EditorStyle,
    provide() {
        return {
            $pcEditor: this,
            $parentInstance: this
        };
    }
};
</script>
