// Projects.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/global.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function Projects() {
	const projects = [
		{
			title: "FarmFarm",
			description: "도시 농부를 위한 소규모 농작물 거래 서비스",
			detail: "카카오 로그인을 통해 누구나 쉽게 농장을 개설할 수 있으며, 상품 판매부터 공동구매·경매 기능까지 지원하고, 카카오페이로 손쉽게 결제할 수 있습니다.",
			git_link: "https://github.com/khskys0805/FarmFarm_react",
			web_link: "https://farm-farm.store",
			image: "images/1.jpg", // 이미지 경로 예시
			tags: ["React", "JavaScript"], // 기술 키워드 추가
		},
		{
			title: "StarD",
			description:
				"스터디 모집부터 관리까지 한 곳에서 할 수 있는 웹 플랫폼",
			git_link: "https://github.com/Hanium2023-WeB/starD-frontend",
			detail: "스터디 모집부터 참여, 일정 관리, 투두, 채팅, 중간 장소 찾기까지 스터디에 필요한 모든 기능을 하나의 플랫폼에서 제공합니다.",
			image: "/images/2.jpg",
			tags: ["React", "JavaScript"], // 기술 키워드 추가
		},
		{
			title: "Snap4U",
			description: "언제 어디서든 당신을 위한 스냅을 기록하세요.",
			detail: "원하는 컷으로 사진을 촬영한 후, 사진과 프레임 색상을 선택하면 언제 어디서든 나만의 이미지를 생성할 수 있습니다.",
			git_link: "https://github.com/khskys0805/Snap4U",
			web_link: "https://snap4-u.vercel.app/",
			image: "/images/3.jpg",
			tags: [
				"React",
				"JavaScript",
				"Express",
				"Node.js",
				"Supabase",
				"Vercel",
			], // 기술 키워드 추가
		},
		{
			title: "My Portfolio",
			description: "저의 포트폴리오 사이트입니다.",
			detail: "“나는 솔로” 콘셉트로 제작한 포트폴리오 사이트로, 저에 대한 소개, 사용 기술, 그리고 프로젝트들을 중심으로 구성되어 있습니다.",
			git_link: "https://github.com/khskys0805/Snap4U",
			web_link: "https://snap4-u.vercel.app/",
			image: "/images/4.jpg",
			tags: ["React", "JavaScript", "Vite", "TailWind CSS", "Vercel"], // 기술 키워드 추가
		},
	];

	return (
		<section
			id="projects"
			className="min-h-screen py-20 px-6 md:px-20 bg-white"
		>
			<h2 className="text-3xl mb-10 text-[#864bfd] font-rix-inoo text-center">
				프로젝트
			</h2>

			<Swiper
				modules={[Navigation, Pagination]}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				loop={true}
				className="max-w-7xl mx-auto"
			>
				{projects.map((project, index) => (
					<SwiperSlide key={index}>
						<div className="bg-[#211c1c] py-12 px-20 rounded-xl shadow-xl flex flex-col md:flex-row items-center gap-6">
							<div className="md:w-1/3">
								<h3 className="text-5xl tracking-tighter font-tangs text-white mb-6 py-2 text-center text-shadow inline-block border-y-[2.5px] border-coolpink relative">
									{project.title}
									<span className="text-lg absolute right-[-10px] bottom-[-10px] text-pink-300">
										♡
									</span>
								</h3>

								<p className="text-coolpink mb-4 font-tangs text-lg">
									{project.description}
								</p>

								{/* 기술 키워드를 보여주는 부분 */}
								<div className="mt-4">
									{project.tags.map((tag, idx) => (
										<span
											key={idx}
											className="inline-block bg-[#372f2f] text-white text-xs font-medium rounded-full px-3 py-1.5 mr-2 mb-2 border border-coolpink shadow-sm"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="mt-4 text-white">
									{project.detail}
								</div>
								<div className="mt-6 flex gap-3">
									<a
										href={project.git_link}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 bg-[#e483d7] hover:bg-[#c262b9] text-white px-4 py-2 rounded-full font-semibold transition"
									>
										<FaGithub />
										GitHub
									</a>
									{project.web_link && (
										<a
											href={project.web_link}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 bg-[#864bfd] hover:bg-[#5c36c4] text-white px-4 py-2 rounded-full font-semibold transition"
										>
											<FaLink />
											링크
										</a>
									)}
								</div>
							</div>
							<img
								src={project.image}
								alt={project.title}
								className="w-full md:w-2/3 rounded-lg shadow-md"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
