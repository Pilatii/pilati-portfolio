"use client"

import { PropsWithChildren, useEffect, useState } from "react";

export default function BackgroundGrid({ children }: PropsWithChildren) {

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const handleMouseMove = (e: any) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	return (
		<div className="min-h-screen bg-black text-white overflow-hidden relative p-6">
			<div className="absolute inset-0 opacity-20 z-0">
				<div className="absolute inset-0" style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
					backgroundSize: '50px 50px',
					animation: 'gridMove 20s linear infinite'
				}} />
			</div>

			<div
				className="fixed w-96 h-96 rounded-full pointer-events-none transition-opacity duration-300 z-10"
				style={{
					left: mousePosition.x - 192,
					top: mousePosition.y - 192,
					background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
					opacity: isHovering ? 1 : 0.5
				}}
			/>

			<div className="relative z-20">
				{ children }
			</div>
		</div>
	);
}
