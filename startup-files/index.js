const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";

const materials = [MATERIAL_AIR_ID, MATERIAL_IRON_INGOT_ID, MATERIAL_STICK_ID];
const materialsImageSrc = [
	MATERIAL_AIR_IMG,
	MATERIAL_IRON_INGOT_IMG,
	MATERIAL_STICK_IMG,
];

const pickaxeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];
const axeRecipe = [
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_AIR_ID,
	MATERIAL_IRON_INGOT_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
	MATERIAL_AIR_ID,
	MATERIAL_STICK_ID,
	MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";

const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = ["", "", "", "", "", "", "", "", ""];
const inventoryTable = [1, 2];

const ivent = document.getElementById("invent");
const craftCase = document.querySelectorAll("#case1");
const imageResult = document.getElementById("resultCase");

let pipette = "";
let selectImageSrc = "";
let btnOldActive = null;

function createBtnInvent(src, alt) {
	const button = document.createElement("button");
	const image = document.createElement("img");
	button.classList.add("inventButton");
	image.src = src;
	image.alt = alt;
	button.appendChild(image);
	return button;
}

for (let i = 0; i < createBtnInvent.length; i++) {
	const element = array[i];
}

// for (let i = 0; i < case1.length; i++) {
// 	const caseObject = case1[i];

// 	caseObject.addEventListener("click", () => {
// 		const imgCase = case1[i].firstElementChild;

// 		if (imgCase == null) return;

// 		imgCase.src = MATERIAL_STICK_IMG;
// 		imgCase.alt = "stick";

// 		console.log(imgCase);

// 	});
// }
