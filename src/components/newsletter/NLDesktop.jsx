import NewsletterGrid from "./NewsletterGrid";
import NewsletterHeader from "./NewsletterHeader";

function Newsletter() {
	return (
		<div className="px-max pt-10 xl:pt-18 relative overflow-x-clip h-full">
			<NewsletterHeader />
			<NewsletterGrid />
		</div>
	);
}

export default Newsletter;
