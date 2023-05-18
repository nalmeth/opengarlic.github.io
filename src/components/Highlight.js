import React from "react";

export default function Highlight({children, color}) {
	return (
		<span
			style={{
				backgroundColor: color,
				borderRadius: '10px',
				color: '#fff',
				padding: '0.3rem'
			}}>
			{children}
		</span>
	)
}