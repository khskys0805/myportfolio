import { motion } from "framer-motion";

export default function Contact() {
	return (
		<section
			id="contact"
			className="min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-20 bg-pink-50 text-center"
		>
			<motion.h2
				className="text-5xl font-bold mb-10 text-hotpink font-tangs"
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				최종 선택
			</motion.h2>

			<motion.p
				className="text-gray-600 mb-8 text-xl"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
				viewport={{ once: true }}
			>
				저를 최종 선택하시겠습니까? <br className="hidden md:block" />
				진심 어린 선택을 기다리고 있어요 💌
			</motion.p>

			<motion.a
				href="mailto:khskys0805@naver.com"
				className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{
					duration: 0.5,
					delay: 0.6,
					type: "spring",
					stiffness: 100,
				}}
				viewport={{ once: true }}
			>
				✉️ 최종 선택하기
			</motion.a>

			<motion.p
				className="mt-6 text-base text-gray-400"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}
				viewport={{ once: true }}
			>
				or khskys0805@naver.com
			</motion.p>
		</section>
	);
}
