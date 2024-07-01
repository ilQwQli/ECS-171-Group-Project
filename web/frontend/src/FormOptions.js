const FORM_OPTIONS = [
	{
		name: "cap_shape",
		type: "select",
		label: "Cap Shape",
		selectOptions: [
			{
				text: "Convex",
				val: "x"
			},
			{
				text: "Flat",
				val: "f"
			},
			{
				text: "Knobbed",
				val: "k"
			},
			{
				text: "Sunken",
				val: "s"
			},
			{
				text: "Bell",
				val: "b"
			},
			{
				text: "Conical",
				val: "c"
			}
		]
	},
	{
		name: "cap_surface",
		type: "select",
		label: "Cap Surface",
		selectOptions: [
			{
				text: "Smooth",
				val: "s"
			},
			{
				text: "Scaly",
				val: "y"
			},
			{
				text: "Fibrous",
				val: "f"
			},
			{
				text: "Grooves",
				val: "g"
			}
		]
	},
	{
		name: "cap_color",
		type: "select",
		label: "Cap Color",
		selectOptions: [
			{
				text: "Pink",
				val: "p"
			},
			{
				text: "Red",
				val: "e"
			},
			{
				text: "Brown",
				val: "n"
			},
			{
				text: "Buff",
				val: "b"
			},
			{
				text: "Cinnamon",
				val: "c"
			},
			{
				text: "Gray",
				val: "g"
			},
			{
				text: "Green",
				val: "r"
			},
			{
				text: "Purple",
				val: "u"
			},
			{
				text: "White",
				val: "w"
			},
			{
				text: "Yellow",
				val: "y"
			}
		]
	},
	{
		name: "bruises",
		type: "select",
		label: "Bruises",
		selectOptions: [
			{
				text: "No",
				val: "f"
			},
			{
				text: "Bruises",
				val: "t"
			}
		]
	},
	{
		name: "odor",
		type: "select",
		label: "Odor",
		selectOptions: [
			{
				text: "Creosote",
				val: "c"
			},
			{
				text: "Spicy",
				val: "s"
			},
			{
				text: "Fishy",
				val: "y"
			},
			{
				text: "Foul",
				val: "f"
			},
			{
				text: "Almond",
				val: "a"
			},
			{
				text: "Anise",
				val: "l"
			},
			{
				text: "Musty",
				val: "m"
			},
			{
				text: "None",
				val: "n"
			},
			{
				text: "Pungent",
				val: "p"
			}
		]
	},
	{
		name: "gill_attachment",
		type: "select",
		label: "Gill Attachment",
		selectOptions: [
			{
				text: "Free",
				val: "f"
			},
			{
				text: "Attached",
				val: "a"
			}
		]
	},
	{
		name: "gill_spacing",
		type: "select",
		label: "Gill Spacing",
		selectOptions: [
			{
				text: "Crowded",
				val: "w"
			},
			{
				text: "Close",
				val: "c"
			}
		]
	},
	{
		name: "gill_size",
		type: "select",
		label: "Gill Size",
		selectOptions: [
			{
				text: "Narrow",
				val: "n"
			},
			{
				text: "Broad",
				val: "b"
			}
		]
	},
	{
		name: "gill_color",
		type: "select",
		label: "Gill Color",
		selectOptions: [
			{
				text: "Gray",
				val: "g"
			},
			{
				text: "Buff",
				val: "b"
			},
			{
				text: "Black",
				val: "k"
			},
			{
				text: "Brown",
				val: "n"
			},
			{
				text: "Chocolate",
				val: "h"
			},
			{
				text: "Green",
				val: "r"
			},
			{
				text: "Orange",
				val: "o"
			},
			{
				text: "Pink",
				val: "p"
			},
			{
				text: "Purple",
				val: "u"
			},
			{
				text: "Red",
				val: "e"
			},
			{
				text: "White",
				val: "w"
			},
			{
				text: "Yellow",
				val: "y"
			}
		]
	},
	{
		name: "stalk_shape",
		type: "select",
		label: "Stalk Shape",
		selectOptions: [
			{
				text: "Enlarging",
				val: "e"
			},
			{
				text: "Tapering",
				val: "t"
			}
		]
	},
	{
		name: "stalk_root",
		type: "select",
		label: "Stalk Root",
		selectOptions: [
			{
				text: "Bulbous",
				val: "b"
			},
			{
				text: "Missing",
				val: "?"
			},
			{
				text: "Club",
				val: "c"
			},
			{
				text: "Equal",
				val: "e"
			},
			{
				text: "Rooted",
				val: "r"
			}
		]
	},
	{
		name: "stalk_surface_above_ring",
		type: "select",
		label: "Stalk Surface (above ring)",
		selectOptions: [
			{
				text: "Smooth",
				val: "s"
			},
			{
				text: "Silky",
				val: "k"
			},
			{
				text: "Fibrous",
				val: "f"
			},
			{
				text: "Scaly",
				val: "y"
			}
		]
	},
	{
		name: "stalk_surface_below_ring",
		type: "select",
		label: "Stalk Surface (below ring)",
		selectOptions: [
			{
				text: "Smooth",
				val: "s"
			},
			{
				text: "Silky",
				val: "k"
			},
			{
				text: "Fibrous",
				val: "f"
			},
			{
				text: "Scaly",
				val: "y"
			}
		]
	},
	{
		name: "stalk_color_above_ring",
		type: "select",
		label: "Stalk Color (above ring)",
		selectOptions: [
			{
				text: "White",
				val: "w"
			},
			{
				text: "Pink",
				val: "p"
			},
			{
				text: "Brown",
				val: "n"
			},
			{
				text: "Buff",
				val: "b"
			},
			{
				text: "Cinnamon",
				val: "c"
			},
			{
				text: "Gray",
				val: "g"
			},
			{
				text: "Orange",
				val: "o"
			},
			{
				text: "Red",
				val: "e"
			},
			{
				text: "Yellow",
				val: "y"
			}
		]
	},
	{
		name: "stalk_color_below_ring",
		type: "select",
		label: "Stalk Color (below ring)",
		selectOptions: [
			{
				text: "White",
				val: "w"
			},
			{
				text: "Pink",
				val: "p"
			},
			{
				text: "Brown",
				val: "n"
			},
			{
				text: "Buff",
				val: "b"
			},
			{
				text: "Cinnamon",
				val: "c"
			},
			{
				text: "Gray",
				val: "g"
			},
			{
				text: "Orange",
				val: "o"
			},
			{
				text: "Red",
				val: "e"
			},
			{
				text: "Yellow",
				val: "y"
			}
		]
	},
	{
		name: "veil_type",
		type: "select",
		label: "Veil Type",
		selectOptions: [
			{
				text: "Partial",
				val: "p"
			}
		]
	},
	{
		name: "veil_color",
		type: "select",
		label: "Veil Color",
		selectOptions: [
			{
				text: "White",
				val: "w"
			},
			{
				text: "Brown",
				val: "n"
			},
			{
				text: "Orange",
				val: "o"
			},
			{
				text: "Yellow",
				val: "y"
			}
		]
	},
	{
		name: "ring_number",
		type: "select",
		label: "Ring Number",
		selectOptions: [
			{
				text: "One",
				val: "o"
			},
			{
				text: "Two",
				val: "t"
			},
			{
				text: "None",
				val: "n"
			}
		]
	},
	{
		name: "ring_type",
		type: "select",
		label: "Ring Type",
		selectOptions: [
			{
				text: "Pendant",
				val: "p"
			},
			{
				text: "Evanescent",
				val: "e"
			},
			{
				text: "Flaring",
				val: "f"
			},
			{
				text: "Large",
				val: "l"
			},
			{
				text: "None",
				val: "n"
			}
		]
	},
	{
		name: "spore_print_color",
		type: "select",
		label: "Spore Print Color",
		selectOptions: [
			{
				text: "Brown",
				val: "n"
			},
			{
				text: "Black",
				val: "k"
			},
			{
				text: "Buff",
				val: "b"
			},
			{
				text: "Chocolate",
				val: "h"
			},
			{
				text: "Green",
				val: "r"
			},
			{
				text: "Orange",
				val: "o"
			},
			{
				text: "Purple",
				val: "u"
			},
			{
				text: "White",
				val: "w"
			},
			{
				text: "Yellow",
				val: "y"
			}
		]
	},
	{
		name: "population",
		type: "select",
		label: "Population",
		selectOptions: [
			{
				text: "Scattered",
				val: "s"
			},
			{
				text: "Abundant",
				val: "a"
			},
			{
				text: "Clustered",
				val: "c"
			},
			{
				text: "Numerous",
				val: "n"
			},
			{
				text: "Several",
				val: "v"
			},
			{
				text: "Solitary",
				val: "y"
			}
		]
	},
	{
		name: "habitat",
		type: "select",
		label: "Habitat",
		selectOptions: [
			{
				text: "Woods",
				val: "d"
			},
			{
				text: "Grasses",
				val: "g"
			},
			{
				text: "Leaves",
				val: "l"
			},
			{
				text: "Meadows",
				val: "m"
			},
			{
				text: "Paths",
				val: "p"
			},
			{
				text: "Urban",
				val: "u"
			},
			{
				text: "Waste",
				val: "w"
			}
		]
	}
];

// Move last option to the beginning to make things line up better in 2 columns
FORM_OPTIONS.unshift(FORM_OPTIONS.pop());

export default FORM_OPTIONS;