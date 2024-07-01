export default function FormInput({
	inputName,
	labelText,
	inputType = "text",
	selectOptions = [],
	placeholderText = "",
	required = true,
	className=""
}) {
	let inputElement = (
		<input
			className="mt-2 px-1 py-2 w-full border rounded"
			type={inputType}
			name={inputName}
			placeholder={placeholderText || "Type here"}
			required={required}
		/>
	);

	if(inputType === "select") {
		inputElement = (
			<select
				className="mt-2 px-1 py-2 w-full border rounded [&:invalid]:text-gray-400"
				name={inputName}
				placeholder={placeholderText}
				required={required}
			>
				<option value="" disabled={true} selected={true}>{placeholderText || "(Select Option)"}</option>
				{selectOptions.map(opt => (
					<option key={opt.val} value={opt.val}>{opt.text} ({opt.val})</option>
				))}
			</select>
		);
	}

	return (
		<label className={`mb-[8px] relative flex flex-col ${className}`}>
			<span className="absolute top-0 left-[4px] text-xs text-slate-600 bg-white">
				{labelText} {required && <span className="text-red-500">*</span>}
			</span>
			{inputElement}
		</label>
	);
}