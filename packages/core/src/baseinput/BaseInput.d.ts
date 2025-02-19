/**
 *
 * [Live Demo](https://primevue.org/)
 *
 * @module baseinput
 *
 */
import { BaseEditableHolder2EmitsOptions, BaseEditableHolder2Props } from '@primevue/core/baseeditableholder2';

export interface BaseInputProps extends BaseEditableHolder2Props {
    /**
     * Defines the size of the component.
     */
    size?: 'small' | 'large' | undefined;
    /**
     * Spans 100% width of the container when enabled.
     */
    fluid?: boolean | undefined;
    /**
     * Specifies the input variant of the component.
     * @defaultValue outlined
     */
    variant?: 'outlined' | 'filled' | undefined;
}

export interface BaseInputEmitsOptions extends BaseEditableHolder2EmitsOptions {}
