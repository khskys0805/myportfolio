import React, { useState } from "react";

export default function Skills() {
	const [openIndex, setOpenIndex] = useState(null);

	const items = [
		{
			title: "HTML",
			content:
				"시맨틱 태그를 사용해 구조적이고 읽기 쉬운 마크업을 작성하며, label과 input 태그를 통해 접근성을 향상시키고, 실시간 입력 검증을 통해 오류를 즉시 피드백합니다.",
		},
		{
			title: "CSS",
			content:
				"미디어 쿼리로 반응형 웹을 구현할 수 있고, styled-components로 컴포넌트 단위 스타일을 작성하여 유지보수를 용이하게 합니다. Flexbox와 Grid를 활용하여 레이아웃을 구현할 수 있으며, Tailwind CSS를 사용하여 빠르고 효율적으로 스타일을 적용할 수 있습니다.",
		},
		{
			title: "JavaScript",
			content:
				"ES6 모듈을 사용하여 코드 재사용성을 높이고, 고차 함수 및 async/await를 활용하여 비동기 작업을 안정적으로 처리합니다. DOM 조작과 이벤트 리스너를 통한 인터랙션 구현도 가능합니다.",
		},
		{
			title: "React",
			content:
				"useState, useEffect 훅을 사용하여 함수형 컴포넌트에서 상태 관리와 사이드 이펙트를 처리할 수 있습니다. React Router를 사용하여 SPA 내 페이지 간 네비게이션을 구현할 수 있습니다.",
		},
		{
			title: "TypeScript",
			content:
				"TypeScript의 주요 문법을 학습하며, 정적 타입 기반의 안정적인 코드 작성 방식에 익숙해지고 있습니다. JS 프로젝트에 점진적으로 도입해, 오류 방지와 명확한 데이터 구조 정의에 활용하고 있습니다.",
		},
		{
			title: "ETC",
			content:
				"Git, Figma, Redux, Zustand, Jotai, Vercel, Photoshop, Notion, jQuery",
		},
	];

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<h2 className="text-center font-bold text-4xl text-brown mb-12 font-health">
				📜 기술
			</h2>
			<div className="flex flex-row justify-center items-start gap-4 mt-10 px-4 overflow-x-auto">
				{items.map((item, index) => (
					<div
						key={index}
						className="w-32 shadow-lg bg-white" // 전체 div에 그림자 적용
					>
						<button
							onClick={() => toggleAccordion(index)}
							className="w-full text-xl text-brown p-3 bg-lightyellow hover:bg-[#fbf3a2] text-center font-semibold font-health transition"
						>
							{item.title}
						</button>
						<div
							className={`overflow-hidden transition-all duration-500 ease-in-out ${
								openIndex === index
									? "max-h-[500px] opacity-100" // content 영역이 열릴 때
									: "max-h-0 py-0 opacity-0" // content 영역이 닫힐 때
							}`}
							style={{
								transitionProperty:
									"max-height, padding, opacity",
							}}
						>
							<div className="text-base text-gray-700 my-3 px-2">
								{item.content}
							</div>
							<div className="bg-[#fffcde] h-12 transition-all duration-300" />
						</div>
					</div>
				))}
			</div>
		</>
	);
}
