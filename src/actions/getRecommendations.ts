"use server";

const SERVER_URL =
	process.env.SERVER_URL || process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		: "http://localhost:3000";

export async function getRecommendations() {
	const recommendationPageUrl =
		"https://www.linkedin.com/in/mazedul-islam/details/recommendations/?detailScreenTabIndex=0";
	const recommendations = [
		{
			imageUrl: `${SERVER_URL}/images/recommendations/zaw.webp`,
			profileUrl: "https://www.linkedin.com/in/zlnaing",
			name: "Zaw Lin Naing",
			title: "Software Engineer",
			date: "April 29, 2024",
			relation: "Zaw Lin worked with Mazedul on the same team",
			body: "I had the opportunities to work with Mazedul in both Brikl and Oozou. During that time, Mazedul displayed excellent technical skills, problem-solving abilities, and dedication to delivering high-quality work. Throughout our collaboration, Mazedul demonstrated exceptional proficiency in React.js, Node.js, and Javascript ecosystem for both front-end and back-end development. He possesses a strong understanding of software development principles and consistently applies best practices to produce efficient and scalable solutions. Moreover, he is a valuable team player who communicates effectively and is always willing to lend a helping hand proactively. He has the technical expertise, work ethic, and interpersonal skills necessary to thrive in today's dynamic work environment.",
		},
		{
			imageUrl: `${SERVER_URL}/images/recommendations/kirati.webp`,
			profileUrl: "https://www.linkedin.com/in/multilemon",
			name: "Kirati Likitsaichon",
			title: "Android Developer | Team Leader",
			date: "April 26, 2024",
			relation: "Kirati worked with Mazedul on the same team",
			body: "I had the pleasure of working alongside Mazedul on a challenging hospital application project. While our time collaborating was brief, I was impressed by his work ethic, technical skills, and positive attitude as he tackled the project's backend tasks as a full-stack developer.  The project involved integrating a legacy system with a newly built one, which presented its own set of challenges. Mazedul's positive attitude and timely completion of tasks ensured a smooth workflow for the project, even though we weren't directly paired on coding. In short, Mazedul is a reliable developer with a positive attitude. I have no doubt he would be a valuable asset to any team.",
		},
		{
			imageUrl: `${SERVER_URL}/images/recommendations/nitanta.webp`,
			profileUrl: "https://www.linkedin.com/in/nitanta-adhikari",
			name: "Nitanta Adhikari",
			title: "iOS Developer at OOZOU",
			date: "April 24, 2024",
			relation: "Nitanta worked with Mazedul on the same team",
			body: "I highly recommend Mazedul for his exceptional talent, hard work, and professionalism. He consistently goes above and beyond, yet remains humble and approachable. Mazedul is a true asset to any team or organization.",
		},
		{
			imageUrl: `${SERVER_URL}/images/recommendations/livia.webp`,
			profileUrl: "https://www.linkedin.com/in/livia-delea-7626abab",
			name: "Livia Delea",
			title: "Development Team Lead la Vantage Labs",
			date: "March 18, 2024",
			relation: "Livia worked with Mazedul on the same team",
			body: "Mazedul is a talented software engineer very efficient on both, fronted and backed aspects of the development. He was a great addition to Vantage development team.  I worked with Mazedul on a project using AWS audio to text transcription service and I was very impressed with his work. I recommend him as a full-stack developer.",
		},
		{
			imageUrl: `${SERVER_URL}/images/recommendations/marcel.webp`,
			profileUrl: "https://www.linkedin.com/in/marcel-buchner-762a7a6",
			name: "Marcel Buchner",
			title: "Mede-eigenaar bij AtMetis BV",
			date: "September 21, 2022",
			relation: "Marcel was Mazedul’s client",
			body: "We have been working closely together and created beautiful solutions. Quick learner and an asset to our team👍",
		},
		{
			imageUrl: `${SERVER_URL}/images/recommendations/shafiqul.webp`,
			profileUrl: "https://www.linkedin.com/in/shafiqul-islam-a3b83994/",
			name: "Shafiqul Islam",
			title: "Senior Software Engineer",
			date: "May 9, 2024",
			relation: "Shafiqul worked with Mazedul on the same team",
			body: "Amazing colleague with great problem-solving skills. Good communicator, collaborator, constructive feedback provider and a professional with whom anyone would love to do teamwork. Wish his best learning and success ahead!",
		},
	];
	return {
		recommendationPageUrl,
		recommendations,
	};
}
