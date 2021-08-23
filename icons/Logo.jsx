import { createIcon } from '@chakra-ui/react'

export const LogoIcon = ({ width, height }) => {
	return (
		<div className="LogoIcon">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 950 950" width={width} height={height}>
				<defs />
				<g clip-path="url(#clip0)">
					<g filter="url(#filter0_d)">
						<rect width="900" height="900" x="25" y="25" fill="url(#paint0_linear)" rx="41" />
					</g>
					<g filter="url(#filter1_i)">
						<path fill="#746337" d="M188.109 690.766c-72.437 0-108.6559-37.808-108.6559-113.422V347.641h47.6559v229.703c0 22.557 4.925 39.554 14.774 50.992 10.008 11.437 25.734 17.156 47.179 17.156 41.303 0 61.954-22.716 61.954-68.148V347.641h47.656v229.703c0 37.807-9.373 66.163-28.117 85.066-18.745 18.904-46.227 28.356-82.446 28.356zM409.711 686v-45.273h37.648c34.789 0 60.921-9.929 78.395-29.786 17.633-19.856 26.449-49.642 26.449-89.355 0-43.05-8.816-75.218-26.449-96.504-17.474-21.445-43.606-32.168-78.395-32.168h-36.695l-5.719-45.273h42.414c103.256 0 154.883 57.981 154.883 173.945C602.242 631.195 550.615 686 447.359 686h-37.648zm-44.32 0V347.641h47.656V686h-47.656zm395.547 4.766c-83.24 0-124.86-57.188-124.86-171.563 0-117.552 41.62-176.328 124.86-176.328 83.239 0 124.859 58.776 124.859 176.328 0 114.375-41.62 171.563-124.859 171.563zm0-43.844c49.88 0 74.82-42.573 74.82-127.719 0-88.323-24.94-132.484-74.82-132.484-49.881 0-74.821 44.161-74.821 132.484 0 85.146 24.94 127.719 74.821 127.719z" />
					</g>
				</g>
				<defs>
					<filter id="filter0_d" width="960" height="960" x="-5" y="-4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
						<feOffset dy="1" />
						<feGaussianBlur stdDeviation="15" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
						<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
					</filter>
					<filter id="filter1_i" width="806.344" height="351.891" x="79.4531" y="342.875" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="25" />
						<feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
						<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend in2="shape" result="effect1_innerShadow" />
					</filter>
					<linearGradient id="paint0_linear" x1="467.969" x2="475" y1="25" y2="925" gradientUnits="userSpaceOnUse">
						<stop stop-color="#F6E05E" />
						<stop offset="1" stop-color="#D69E2E" />
					</linearGradient>
					<clipPath id="clip0">
						<path fill="#fff" d="M0 0h950v950H0z" />
					</clipPath>
				</defs>
			</svg>
		</div>
	);
}