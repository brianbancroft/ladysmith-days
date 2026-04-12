import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import { type MetaFunction } from "@remix-run/react";
import PageJumbotron from "~/components/PageJumbotron";
import { sendEmail } from "~/server/sendEmail.server";

export const meta: MetaFunction = () => {
	return [
		{ title: "Volunteer with Ladysmith Days" },
		{
			name: "description",
			content: "Ladysmith Days is a great way to get to know Ladysmith!",
		},
	];
};

export async function action({ request }: ActionFunctionArgs) {
	const formData = new URLSearchParams(await request.text());
	const name = String(formData.get("name"));
	const email = String(formData.get("email"));
	const message = String(formData.get("message"));

	await sendEmail({ name, email, message, page: "Volunteer Page" });

	return redirect("/?sent=true");
}

const VolunteerSponsors = () => (
	<section id="sponsors" className="my-3">
		<div className="pl-2 text-xs italic">Brought to you by:</div>
		<div className="grid gap-2 md:h-52 md:grid-cols-3">
			<a
				href="https://606.cupe.ca/"
				target="_blank"
				rel="noopener noreferrer"
				className="sponsor-element sponsor-link p-2"
			>
				<div className="my-1 flex h-full w-full justify-center bg-sponsor-volunteer-1 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
			</a>

			<a
				href="https://pharmasave.com/ladysmith/"
				target="_blank"
				rel="noopener noreferrer"
				className="sponsor-element sponsor-link  p-2 px-4"
			>
				<div className="my-1 flex  h-full w-full justify-center bg-sponsor-volunteer-2 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
			</a>
			<a
				href="https://www.saveonfoods.com/ladysmith/"
				target="_blank"
				rel="noopener noreferrer"
				className=" sponsor-element sponsor-link p-4"
			>
				<div className="my-1 flex  h-full w-full justify-center bg-sponsor-volunteer-3 bg-contain bg-center bg-no-repeat px-12 py-6"></div>
			</a>
		</div>
	</section>
);

function Volunteer() {
	return (
		<main className="container mx-auto py-12 relative overflow-hidden">
			{/* Floating sparkles background */}
			<div className="sparkle-container">
				<div
					className="sparkle"
					style={{ top: "10%", left: "20%", animationDelay: "0s" }}
				>
					✨
				</div>
				<div
					className="sparkle"
					style={{ top: "20%", right: "15%", animationDelay: "1s" }}
				>
					⭐
				</div>
				<div
					className="sparkle"
					style={{ bottom: "30%", left: "25%", animationDelay: "2s" }}
				>
					🌟
				</div>
				<div
					className="sparkle"
					style={{ bottom: "20%", right: "20%", animationDelay: "3s" }}
				>
					✦
				</div>
				<div
					className="sparkle"
					style={{ top: "60%", left: "10%", animationDelay: "4s" }}
				>
					💫
				</div>
				<div
					className="sparkle"
					style={{ top: "40%", right: "30%", animationDelay: "5s" }}
				>
					✨
				</div>
			</div>

			{/* Animated beach balls */}
			<div className="beach-balls-container">
				<div className="beach-ball red-ball"></div>
				<div className="beach-ball yellow-ball"></div>
				<div className="beach-ball blue-ball"></div>
				<div className="beach-ball green-ball"></div>
				<div className="beach-ball purple-ball straggler"></div>
			</div>

			<div id="modalDisplay" className="hidden">
				<section
					className="
            fixed
            z-50
            flex h-full
            w-full flex-col
            justify-center
            bg-gray-700
            bg-opacity-60
            p-4
            align-middle
          "
				></section>
			</div>
			<PageJumbotron
				imageClass="bg-header-volunteer"
				title="Come Celebrate With Us"
				slogan="We are Volunteer-Driven"
			/>

			<div className="container mx-auto mt-8 md:mt-0">
				{/* <SelectorVolunteerPositions /> */}
			</div>
			<section
				id="contact-us"
				className="my-6 mt-4 rounded-xl shadow-2xl drop-shadow-2xl md:mt-6"
				style={{
					background:
						"linear-gradient(45deg, #ef5562, #ffcf5a, #86d169, #65bee5, #7c57b5, #ef5562)",
					backgroundSize: "200% 200%",
					animation: "gradient 15s ease infinite",
					padding: "2px",
				}}
			>
				<div className="w-full rounded-xl bg-white">
					<div className="px-2 py-3 md:p-7">
						<h1
							className="bounce-in-text font-sans my-2 ml-2 text-3xl font-bold md:text-4xl"
							style={{
								background: "linear-gradient(45deg, #7c57b5, #ef5562, #ffcf5a)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
						>
							Join the Fun!
						</h1>
						<p
							className="fade-in-delay ml-2 py-2 text-lg"
							style={{ color: "#1e406b" }}
						>
							We need volunteers of all commitment levels to help make Ladysmith Days great for our community —{" "}
							<span
								className="bounce-word font-bold"
								style={{ color: "#ef5562" }}
							>
								we want YOU!
							</span>
						</p>
						<p className="fade-in-delay-1 ml-2 py-2 text-lg">
							Give{" "}
							<span
								className="font-semibold"
								style={{
									background: "linear-gradient(45deg, #ffcf5a, #86d169)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								a couple hours
							</span>{" "}
							or join the{" "}
							<span
								className="font-semibold"
								style={{
									background: "linear-gradient(45deg, #65bee5, #7c57b5)",
									WebkitBackgroundClip: "text",
									WebkitTextFillColor: "transparent",
									backgroundClip: "text",
								}}
							>
								planning team
							</span>{" "}
							through the Ladysmith Celebrations Society. Show up when you can —{" "}
							<span className="font-semibold" style={{ color: "#86d169" }}>
								we're flexible and grateful for any time you give.
							</span>
						</p>

						<iframe
							title="Volunteer Form"
							className="fade-in-delay-3 mt-6 h-[50vh] w-full rounded-lg border-2 bg-slate-50 shadow-lg"
							style={{ borderColor: "#65bee5" }}
							src="https://docs.google.com/forms/d/e/1FAIpQLSeb-9EzwupNAoENKyKHwW2uPB7ryOysBQSlWDyOc8Z55b-4vg/viewform?embedded=true"
							frameBorder="0"
						/>
					</div>
				</div>
			</section>
			<VolunteerSponsors />
		</main>
	);
}

export default Volunteer;
