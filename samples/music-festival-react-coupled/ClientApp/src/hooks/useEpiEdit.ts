// The v-epi-edit directive is responsible for adding the
// necessary attributes on-page-edit needs to render its overlay.

import { ContextMode } from '@episerver/content-delivery';
import useResolvedContent from './useResolvedContent';

const useEpiEdit = () => {
    let editAttributes = {};

    const { resolvedContent } = useResolvedContent();
    console.log(resolvedContent);

    const isEditable = resolvedContent.mode === ContextMode.Edit;
    if (isEditable) {
        editAttributes = {
            'data-epi-property-name': 'NAME',
            'data-epi-property-render': 'none',
        };
    }

    return {
        editAttributes,
    };
};

export default useEpiEdit;
