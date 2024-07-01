export default function ModelOutput(props) {
	const {
		isPoisonous
	} = props;

	return (
		<>
			{isPoisonous ? (
				<img
					src="/poisonous_mushroom_icon.png"
					alt="Poisonous Mushroom Icon"
				/>
			) : (
				<img
					src="/normal_mushroom_icon.png"
					alt="Normal Mushroom Icon"
				/>
			)}
			<div>
				<h1 className="text-lg font-bold">
					Your Mushroom is Likely <span className="underline">{isPoisonous ? "POISONOUS" : "Edible"}</span>
				</h1>
				<p className="mt-2 text-gray-400 text-xs">
					This classification is the result of a computational model and may not be accurate.
					<br/>
					Please consult a professional before attempting to consume unknown mushrooms.
					<br/>
					<br/>
					We (the developers of this site) are not liable for any possible harm, including death, that may result from the interaction or consumption of the mushroom.
				</p>
			</div>
		</>
	);
}