import Skills from "./Skills";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

export default function About() {
	return (
		<section
			id="about"
			className="min-h-screen py-16 px-6 md:px-20 bg-white"
		>
			<h2 className="text-4xl font-tangs font-semibold mb-12 text-hotpink leading-tight">
				<span className="tracking-tighter">2025번지</span>
				<span className="text-2xl ml-2">자기소개</span>
			</h2>

			<div className="flex flex-col md:flex-row gap-10">
				{/* 왼쪽 소개 영역 */}
				<div className="md:w-2/5">
					<p className="text-2xl font-bold mb-8">
						안녕하세요.{" "}
						<span className="relative font-semibold z-10 before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:w-full before:h-[8px] before:bg-lightpink before:z-[-1]">
							2025기 현수입니다.
						</span>
					</p>
					<p className="mt-5 leading-loose">
						키오스크를 자주 사용하는 편인데도, 어느 카페에서
						무인결제를 하려다 한 화면에 너무 많은 정보가 떠서
						순간적으로 뭘 눌러야 할지 고민한 적이 있습니다. 결국
						포인트 적립을 놓친 채 결제만 완료했습니다. <br />
						<br />
						이런 경험을 하면서{" "}
						<span className="font-bold text-bgpink">
							"아무리 익숙한 사람도 불편할 수 있구나"
						</span>
						를 느꼈고, 그때부터 사용자 경험을 가장 중요하게 생각하는
						개발자가 되었습니다. <br />
						<br />
						프로젝트를 할 때는 항상{" "}
						<span className="font-semibold text-bgpink">
							“사용자는 이걸 어떻게 받아들일까?”
						</span>
						를 고민합니다.
					</p>
					{/* 링크 영역 */}
					<div className="mt-12 flex flex-wrap gap-4">
						<a
							href="https://github.com/khskys0805"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 bg-[#e483d7] hover:bg-[#c262b9] text-white px-5 py-2 rounded-full font-semibold text-lg transition"
						>
							<FaGithub className="w-6 h-6" />
							GitHub
						</a>
						<a
							href="https://velog.io/@khskys0805/posts"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 bg-[#864bfd] hover:bg-[#5c36c4] text-white px-5 py-2 rounded-full font-semibold text-lg transition"
						>
							<FaLink className="w-6 h-6" />
							Blog
						</a>
					</div>
				</div>

				{/* 오른쪽 스킬 영역 */}
				<div className="md:w-5/3">
					<Skills />
				</div>
			</div>
		</section>
	);
}
