import { Flex, Checkbox, Button, Tooltip, ConfigProvider } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { LOAN_TAB_SECTIONS } from '../constants/LoanTabNavConst';
import { useLoanTab } from '../context/LoanTabContext.tsx';

function LoanTabNav() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [showLeftArrow, setShowLeftArrow] = useState(false);
	const [showRightArrow, setShowRightArrow] = useState(false);

	const { visible, toggleSection, navigateTo } = useLoanTab();

	const checkScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setShowLeftArrow(scrollLeft > 0);
			setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
		}
	};

	useEffect(() => {
		const el = scrollRef.current;
		if (el) {
			checkScroll();
			window.addEventListener('resize', checkScroll);
			el.addEventListener('scroll', checkScroll);
			return () => {
				window.removeEventListener('resize', checkScroll);
				el.removeEventListener('scroll', checkScroll);
			};
		}
	}, []);

	const handleScroll = (direction: string) => {
		if (scrollRef.current) {
			const scrollAmount = direction === 'left' ? -200 : 200;
			scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<ConfigProvider
			theme={{
				components: {
					Checkbox: {
						colorPrimary: '#34B34A', //'#9B9BC2',
						colorPrimaryHover: '#9B9BC2',
						colorBorder: '#9B9BC2',
					},
				},
			}}
		>
			<Flex
				vertical={false}
				align="center"
				className="sticky top-15 w-full py-1! bg-white rounded-b-2xl z-50  px-5! mb-5!"
			>
				{showLeftArrow && (
					<Button
						type="text"
						shape="circle"
						icon={<LeftOutlined style={{ fontSize: '12px' }} />}
						className="absolute left-1 z-20 bg-white/90 backdrop-blur-sm shadow-md hover:text-[#34B34A]! hover:bg-white transition-all flex items-center justify-center border border-gray-100"
						style={{ height: '32px', width: '32px' }}
						onClick={() => handleScroll('left')}
					/>
				)}

				<Flex
					ref={scrollRef}
					align="center"
					gap={25}
					className="flex-1 overflow-x-auto no-scrollbar transition-all text-[10px] sm:text-xs lg:text-sm"
					style={{ scrollbarWidth: 'thin', scrollbarColor: '#9B9BC2' }}
				>
					{LOAN_TAB_SECTIONS.map(({ key, label }) => (
						<Flex key={key} align="center" gap={6} className="py-5!">
							<Checkbox checked={visible[key]} onChange={(e) => toggleSection(key, e.target.checked)} />
							<Tooltip
								title={!visible[key] ? 'Enable this section to view details' : null}
								placement="top"
								color={'#585899'}
							>
								<span
									className={`font-semibold cursor-pointer whitespace-nowrap ${visible[key] ? 'text-[#585899] hover:text-[#34B34A] hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
									onClick={() => {
										if (visible[key]) {
											navigateTo(key);
										}
									}}
								>
									{label}
								</span>
							</Tooltip>
						</Flex>
					))}
				</Flex>

				{showRightArrow && (
					<Button
						type="text"
						shape="circle"
						icon={<RightOutlined style={{ fontSize: '12px' }} />}
						className="absolute right-1 z-20 bg-white/90 backdrop-blur-sm shadow-md hover:text-[#34B34A]! hover:bg-white transition-all flex items-center justify-center border border-gray-100"
						style={{ height: '32px', width: '32px' }}
						onClick={() => handleScroll('right')}
					/>
				)}
			</Flex>
		</ConfigProvider>
	);
}

export default LoanTabNav;
