import { SERVER_URL } from "./Constants.js";
import FormInput from "./FormInput.jsx";
import ModelOutput from "./ModelOutput.jsx";
import { useState } from "react";
import FORM_OPTIONS from "./FormOptions.js";

export default function ModelForm() {
	const [result, setResult] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		setResult(null);

		const formData = new FormData(e.target);
		const body = Object.fromEntries(formData);

		fetch(`${SERVER_URL}/api/classify`, {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				if(res.status !== 200) {
					throw new RangeError(`Server responded with [${res.status}]`);
				}

				return res.json();
			})
			.then(res => {
				console.log(res);
				setResult(Boolean(res.poisonous));
				if(res.error) {
					alert("There was a warning running the model")
				}
			})
			.catch(err => {
				alert("Failed to receive a proper response from the server");
				console.error(err);
			});
	}

	return (
		<div className="w-full px-6 my-3 grid gap-1 grid-cols-1 md:grid-cols-[1fr,400px] justify-items-center">
			<form
				className="w-full mb-4 flex flex-col items-center"
				onSubmit={handleSubmit}
			>
				<h1 className="text-2xl text-center">Mushroom Classifier Model</h1>
				<hr className="border-b m-0 p-0 border-gray-300"/>
				<div className="w-full lg:w-max my-2 grid gap-1 gap-x-1 grid-cols-1 lg:grid-cols-2 justify-items-center">
					{
						FORM_OPTIONS.map(option => (
							<FormInput
								className="w-[375px] max-w-full"
								key={option.name}
								inputName={option.name}
								inputType={option.type}
								labelText={option.label}
								{...option}
							/>
						))
					}
				</div>
				<button
					className="px-6 py-2 text-lg rounded bg-slate-200"
					type="submit"
				>
					Process Inputs
				</button>
			</form>
			<div className="w-full relative">
				<div className="w-full h-[100vh] overflow-y-auto mt-16 px-20 py-12 sticky top-0">
					{result !== null && <ModelOutput isPoisonous={result}/>}
				</div>
			</div>
		</div>


	);
}
