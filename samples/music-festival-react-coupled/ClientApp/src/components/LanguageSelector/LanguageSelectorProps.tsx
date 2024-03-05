import { Language } from '@episerver/content-delivery';

export default interface LanguageSelectorProps {
    existingLanguages: Language[];
    language: Language;
}
