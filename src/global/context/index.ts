import type { ISectionVisibility, SectionRefs, SectionKey } from '..';

export interface LoanTabContextValue {
	visible: ISectionVisibility;
	toggleSection: (key: SectionKey, checked: boolean) => void;
	navigateTo: (key: SectionKey) => void;
	sectionRefs: SectionRefs;
}
