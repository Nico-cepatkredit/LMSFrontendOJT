import { Flex } from 'antd';
import type { ISectionVisibility, SectionKey, SectionRefs } from '.';
import { useRef, useState } from 'react';
import { initialSectionVisibility } from '../constants/LoanTabNavConst';
import LoanTabNav from './LoanTabNav';
import { LoanTabContext } from '../context/LoanTabContext.tsx';
import PNAction from './PNAction.tsx';

function LoanTab({ children }: { children: React.ReactNode }) {
	const [visible, setVisible] = useState<ISectionVisibility>(initialSectionVisibility);

	const sectionRefs: SectionRefs = {
		loan: useRef<HTMLDivElement>(null),
		ofw: useRef<HTMLDivElement>(null),
		employment: useRef<HTMLDivElement>(null),
		credit: useRef<HTMLDivElement>(null),
		assets: useRef<HTMLDivElement>(null),
		character: useRef<HTMLDivElement>(null),
		beneficiary: useRef<HTMLDivElement>(null),
		approvalAmount: useRef<HTMLDivElement>(null),
		loanAmount: useRef<HTMLDivElement>(null),
		loanCharges: useRef<HTMLDivElement>(null),
		lcCommission: useRef<HTMLDivElement>(null),
		loanAmortization: useRef<HTMLDivElement>(null),
	};

	const navigateTo = (key: SectionKey) => {
		requestAnimationFrame(() => {
			sectionRefs[key].current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		});
	};

	const toggleSection = (key: SectionKey, checked: boolean) => {
		setVisible((prev) => ({
			...prev,
			[key]: checked,
		}));
	};

	return (
		<LoanTabContext.Provider
			value={{
				visible,
				toggleSection,
				navigateTo,
				sectionRefs,
			}}
		>
			<div className="relative">
				<LoanTabNav />

				<div className="mb-2">
					<PNAction />
				</div>

				<Flex vertical gap={10}>
					{children}
				</Flex>
			</div>
		</LoanTabContext.Provider>
	);
}

export default LoanTab;
