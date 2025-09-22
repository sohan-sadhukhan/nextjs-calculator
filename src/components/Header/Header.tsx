import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";

const Header = () => {
	return (
		<header
			className="border-b shadow"
			aria-label="app-header">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<h1
						className="text-lg font-semibold md:text-3xl"
						aria-label="App Name">
						Nextjs Calculator
					</h1>
				</Link>

				<nav className="flex items-center gap-4 md:gap-6">
					<Link href={"/"}>Basic</Link>
					<Link href={"/advanced"}>Advanced</Link>

					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
