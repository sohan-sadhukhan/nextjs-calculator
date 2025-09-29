"use client";

import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";

const BasicCalculator = () => {
	const [Number1, setNumber1] = useState("");
	const [Number2, setNumber2] = useState("");
	const [total, setTotal] = useState("");

	const handleAdd = () => {
		if (Number1 !== "" && Number2 !== "") {
			const result = parseInt(Number1) + parseInt(Number2);
			setTotal(result.toString());
		}

		setNumber1("");
		setNumber2("");
	};

	const handleSubtract = () => {
		if (Number1 !== "" && Number2 !== "") {
			const result = parseInt(Number1) - parseInt(Number2);
			setTotal(result.toString());
		}

		setNumber1("");
		setNumber2("");
	};

	const handleMultiply = () => {
		if (Number1 !== "" && Number2 !== "") {
			const result = parseInt(Number1) * parseInt(Number2);
			setTotal(result.toString());
		}

		setNumber1("");
		setNumber2("");
	};

	const handleDevide = () => {
		if (Number1 !== "" && Number2 !== "") {
			const result = parseInt(Number1) / parseInt(Number2);
			setTotal(result.toString());
		}

		setNumber1("");
		setNumber2("");
	};

	const handleReset = () => {
		setNumber1("");
		setNumber2("");
		setTotal("");
	};
	return (
		<div className="grid grid-cols-4 gap-4">
			<Input
				type="number"
				className="col-span-2"
				placeholder="Number 1"
				onChange={(e) => setNumber1(e.target.value)}
				value={Number1}
			/>
			<Input
				type="number"
				className="col-span-2"
				placeholder="Number 2"
				onChange={(e) => setNumber2(e.target.value)}
				value={Number2}
			/>
			<Input
				type="number"
				className="col-span-4"
				placeholder="Total"
				disabled
				value={total}
			/>

			<Button
				type="button"
				onClick={handleAdd}
				disabled={Number1 === "" || Number2 === ""}
				className="cursor-pointer">
				Add
			</Button>
			<Button
				type="button"
				onClick={handleSubtract}
				disabled={Number1 === "" || Number2 === ""}
				className="cursor-pointer">
				Subtract
			</Button>
			<Button
				type="button"
				onClick={handleMultiply}
				disabled={Number1 === "" || Number2 === ""}
				className="cursor-pointer">
				Multiply
			</Button>
			<Button
				type="button"
				onClick={handleDevide}
				disabled={Number1 === "" || Number2 === ""}
				className="cursor-pointer">
				Divide
			</Button>

			<Button
				type="button"
				variant={"destructive"}
				onClick={handleReset}
				disabled={(Number1 === "" || Number2 === "") && total === ""}
				className="col-span-4 cursor-pointer">
				Reset
			</Button>
		</div>
	);
};

export default BasicCalculator;
