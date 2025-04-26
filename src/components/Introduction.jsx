import "../css/stars.css"; // 별 반짝이는 CSS
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";
import cloud4 from "../assets/cloud4.png";
import cloud5 from "../assets/cloud5.png";
import city from "../assets/city.png";
import Typewriter from "typewriter-effect";
import Navbar from "./NavBar";

export default function Introduction() {
	return (
		<section
			id="intro"
			className="min-h-screen relative bg-romanticPink flex items-center justify-center text-center overflow-hidden"
		>
			<Navbar /> {/* 네비게이션 넣기 */}
			{/* city 이미지가 정확히 맨 아래에 배치되도록 설정 */}
			<img
				src={city}
				className="absolute bottom-[-50px] w-full object-cover z-0 opacity-40"
				alt="city"
			/>
			{/* 구름 배경 */}
			<img
				src={cloud1}
				className="absolute top-10 left-[-100px] w-80 opacity-80 animate-cloud-move"
				alt="cloud1"
			/>
			<img
				src={cloud2}
				className="absolute bottom-20 right-[-150px] w-96 opacity-60 animate-cloud-move-slow"
				alt="cloud2"
			/>
			<img
				src={cloud3}
				className="absolute top-1/2 left-[20%] w-72 opacity-70 animate-cloud-float"
				alt="cloud3"
			/>
			<img
				src={cloud4}
				className="absolute top-[15%] right-[5%] w-64 opacity-75 animate-cloud-move-fast"
				alt="cloud4"
			/>
			<img
				src={cloud5}
				className="absolute bottom-[10%] left-[10%] w-60 opacity-65 animate-cloud-float-slow"
				alt="cloud5"
			/>
			{/* 별 반짝임 효과 */}
			<div className="absolute w-full h-full">
				{[...Array(30)].map((_, i) => (
					<div
						key={i}
						className="star"
						style={{
							width: `${Math.random() * 2 + 2}px`,
							height: `${Math.random() * 2 + 2}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
						}}
					/>
				))}
			</div>
			{/* 텍스트 */}
			<div className="z-10 flex flex-col items-center space-y-6 px-4 mt-[-150px]">
				<h2 className="flex flex-row text-9xl text-white font-rix-inoo">
					나는
				</h2>
				<h2 className="flex flex-row text-9xl text-hotpink font-rix-inoo">
					프론트엔드 개발자
				</h2>
				{/* 추가 텍스트 */}

				<p className="absolute bottom-[70px] text-2xl font-bold text-gray-800 bg-white/70 rounded-lg px-6 py-2 shadow-md backdrop-blur">
					<Typewriter
						options={{
							strings: [
								"사용자 경험을 가장 중요시하는 프론트엔드 개발자 김현수입니다.",
							],
							autoStart: true,
							loop: true, // 반복하지 않음
							delay: 100, // 타이핑 속도
							startDelay: 10000, // 10초 대기
							cursor: "|", // 커서 표시 (필요 없으면 빈 문자열로)
						}}
					/>
				</p>
			</div>
		</section>
	);
}
