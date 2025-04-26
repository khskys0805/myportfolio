import React, { useState } from "react";

export default function Skills() {
	const [openIndex, setOpenIndex] = useState(null);

	const items = [
		{
			title: "HTML",
			content:
				"시맨틱 태그로 구조적인 마크업을 작성하고, label과 input을 사용하여 접근성을 개선합니다.",
		},
		{
			title: "CSS",
			content:
				"미디어 쿼리로 반응형 웹을 구현하고, styled-components로 컴포넌트 단위 스타일링을 합니다.",
		},
		{
			title: "JavaScript",
			content:
				"ES6 모듈, 고차 함수, async/await로 비동기 흐름을 제어하고 유지보수를 높입니다.",
		},
		{
			title: "React",
			content:
				"useState, useEffect 등 훅을 통해 상태와 사이드 이펙트를 관리하고, 라우팅과 재사용 컴포넌트를 구성합니다.",
		},
		{
			title: "TypeScript",
			content:
				"정적 타입 기반의 안정적인 코드 작성에 익숙해지고, 기존 JS 프로젝트에 점진적으로 도입하고 있습니다.",
		},
		{
			title: "ETC",
			content:
				"Git, Figma, Redux, Zustand, Jotai, Vercel, Photoshop을 다양한 프로젝트에 사용했습니다.",
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
