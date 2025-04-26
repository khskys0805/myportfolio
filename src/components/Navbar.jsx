import { useEffect, useState } from "react";

export default function Navbar() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{ threshold: 0.6 }
		);

		sections.forEach((section) => observer.observe(section));
		return () => sections.forEach((section) => observer.unobserve(section));
	}, []);

	const navItems = [
		{ id: "intro", label: "Intro" },
		{ id: "about", label: "About" },
		{ id: "projects", label: "Projects" },
		{ id: "contact", label: "Contact" },
	];

	return (
		<nav className="fixed right-0 top-1/2 -translate-y-1/2 z-50 space-y-4">
			{navItems.map((item) => (
				<a
					key={item.id}
					href={`#${item.id}`}
					className="group flex items-center space-x-2"
				>
					<div
						className={`w-4 h-4 rounded-full transition group-hover:scale-125 ${
							activeSection === item.id
								? "bg-hotpink"
								: "bg-gray-400"
						}`}
					/>
					<span className="text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition">
						{item.label}
					</span>
				</a>
			))}
		</nav>
	);
}
