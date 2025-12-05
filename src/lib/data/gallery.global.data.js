import img from "/src/assets/img.jpg";
import img1 from "/src/assets/astro.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/btmn.png"
import img4 from "/src/assets/snoppy1.jpg"
import img5 from "/src/assets/legobatman.jpg"

// * FOR GALLERY SECTION IN HOME PAGE
// Array of gallery rows with image and animation direction
const galleryRows = {
	upper: {
		images: [img, img, img, img, img],
		animation: "marquee-right 60s linear infinite",
	},
	middle: {
		images: [img1, img1, img1, img1, img1],
		animation: "marquee-left 60s linear infinite",
	},
	lower: {
		images: [img2, img2, img2],
		animation: "marquee-right 70s linear infinite",
	},
};

// * FOR GALLERY PAGE
const galleryDragables = [
	{
		src: "https://images.unsplash.com/photo-1635373670332-43ea883bb081?q=80&w=2781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "6deg",
		top: "10%",
		left: "25%",
		className: "w-36 md:w-56",
	},
	{
		src: "https://images.unsplash.com/photo-1576174464184-fb78fe882bfd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "12deg",
		top: "45%",
		left: "60%",
		className: "w-24 md:w-48",
	},
	{
		src: "https://images.unsplash.com/photo-1503751071777-d2918b21bbd9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "-6deg",
		top: "20%",
		left: "40%",
		className: "w-52 md:w-80",
	},
	{
		src: "https://images.unsplash.com/photo-1620428268482-cf1851a36764?q=80&w=2609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "8deg",
		top: "50%",
		left: "40%",
		className: "w-48 md:w-72",
	},
	{
		src: "https://images.unsplash.com/photo-1602212096437-d0af1ce0553e?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "18deg",
		top: "20%",
		left: "65%",
		className: "w-40 md:w-64",
	},
	{
		src: "https://images.unsplash.com/photo-1622313762347-3c09fe5f2719?q=80&w=2640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Example image",
		rotate: "-3deg",
		top: "35%",
		left: "55%",
		className: "w-24 md:w-48",
	},
];

const galleryGridBase = [
    {
        src: img3,
        alt: "Example image",
        description: "A scenic mountain landscape with a clear sky.",
        className: "w-36 md:w-56",
    },
    {
        src: img1,
        alt: "Example image",
        description: "A cozy coffee shop interior with warm lighting.",
        className: "w-24 md:w-48",
    },
    {
        src: img4,
        alt: "Example image",
        description: "A cozy coffee shop interior with warm lighting.",
        className: "w-24 md:w-48",
    },
    {
        src: img,
        alt: "Example image",
        description: "A city skyline at sunset with vibrant colors.",
        className: "w-48 md:w-72",
    },
    {
        src: img1,
        alt: "Example image",
        description: "A tranquil beach with turquoise water and white sand.",
        className: "w-40 md:w-64",
    },
    {
        src: img3,
        alt: "Example image",
        description: "A forest path surrounded by tall green trees.",
        className: "w-24 md:w-48",
    },
    {
        src: img,
        alt: "Example image",
        description: "A scenic mountain landscape with a clear sky.",
        className: "w-36 md:w-56",
    },
    {
        src: img1,
        alt: "Example image",
        description: "A cozy coffee shop interior with warm lighting.",
        className: "w-24 md:w-48",
    },
    {
        src: img4,
        alt: "Example image",
        description: "A close-up of a blooming flower in a garden.",
        className: "w-52 md:w-80",
    },
    {
        src: img,
        alt: "Example image",
        description: "A city skyline at sunset with vibrant colors.",
        className: "w-48 md:w-72",
    },
    {
        src: img1,
        alt: "Example image",
        description: "A tranquil beach with turquoise water and white sand.",
        className: "w-40 md:w-64",
    },
    {
        src: img2,
        alt: "Example image",
        description: "A forest path surrounded by tall green trees.",
        className: "w-24 md:w-48",
    },
    {
        src: img,
        alt: "Example image",
        description: "A scenic mountain landscape with a clear sky.",
        className: "w-36 md:w-56",
    },
    {
        src: img1,
        alt: "Example image",
        description: "A cozy coffee shop interior with warm lighting.",
        className: "w-24 md:w-48",
    },
    {
        src: img5,
        alt: "Example image",
        description: "A close-up of a blooming flower in a garden.",
        className: "w-52 md:w-80",
    },
    {
        src: img,
        alt: "Example image",
        description: "A city skyline at sunset with vibrant colors.",
        className: "w-48 md:w-72",
    },
    {
        src: img1,
        alt: "Example image",
        left: "65%",
        className: "w-40 md:w-64",
    },
    {
        src: img5,
        alt: "Example image",
        description: "A forest path surrounded by tall green trees.",
        className: "w-24 md:w-48",
    },
];

const galleryGrid = galleryGridBase;

export { galleryRows, galleryDragables, galleryGrid };
