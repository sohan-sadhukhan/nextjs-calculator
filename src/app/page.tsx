import BasicCalculator from "@/components/BasicCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Nextjs Calculator",
	description: "Basic page of Nextjs Calculator",
};

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card>
					<CardHeader>
						<CardTitle className="grid place-items-center text-2xl">
							Basic Calculator
						</CardTitle>
					</CardHeader>

					<CardContent>
						<BasicCalculator />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
