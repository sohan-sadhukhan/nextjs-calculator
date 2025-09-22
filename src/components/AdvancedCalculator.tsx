"use client";

import { Divide, Minus, Plus, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Input } from "./shadcnui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./shadcnui/select";

const AdvancedCalculator = () => {
	const [number1, setNumber1] = useState("");
	const [number2, setNumber2] = useState("");
	const [operator, setOperator] = useState("");
	const [total, setTotal] = useState("");

	const handleCalculate = () => {
		if (number1 !== "" && number2 !== "" && operator !== "") {
			const num1 = parseInt(number1);
			const num2 = parseInt(number2);

			switch (operator) {
				case "+":
					setTotal((num1 + num2).toString());
					break;

				case "-":
					setTotal((num1 - num2).toString());
					break;

				case "x":
					setTotal((num1 * num2).toString());
					break;

				case "/":
					setTotal((num1 / num2).toString());
			}
		}

		setNumber1("");
		setNumber2("");
		setOperator("");
	};

	const handleReset = () => {
		setNumber1("");
		setNumber2("");
		setOperator("");
		setTotal("");
	};

	return (
		<div className="grid grid-cols-3 gap-6">
			<Input
				type="number"
				placeholder="Number 1"
				onChange={(e) => setNumber1(e.target.value)}
				value={number1}></Input>

			<Select
				onValueChange={(value) => setOperator(value)}
				value={operator}>
				<SelectTrigger className="w-full">
					<SelectValue placeholder="Operator" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="+">
						<Plus />
					</SelectItem>
					<SelectItem value="-">
						<Minus />
					</SelectItem>
					<SelectItem value="x">
						<X />
					</SelectItem>
					<SelectItem value="/">
						<Divide />
					</SelectItem>
				</SelectContent>
			</Select>

			<Input
				type="number"
				placeholder="Number 2"
				onChange={(e) => setNumber2(e.target.value)}
				value={number2}
			/>

			<Input
				type="number"
				className="col-span-2"
				placeholder="Total"
				disabled
				value={total}
			/>
			<Button
				type="button"
				onClick={handleCalculate}
				disabled={number1 === "" || number2 === "" || operator === ""}
				className="cursor-pointer">
				Calculate
			</Button>

			<Button
				type="button"
				variant={"destructive"}
				onClick={handleReset}
				disabled={(number1 === "" || number2 === "") && total === ""}
				className="col-span-3 cursor-pointer">
				Reset
			</Button>
		</div>
	);
};

export default AdvancedCalculator;
