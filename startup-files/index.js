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

const btn1 = document.createElement("button");
const image = document.createElement("img");
const invent = document.getElementById("invent");

image.src = "./assets/stick.webp";
image.alt = "pickaxe";
image.style.width = "70px";
btn1.style.border = "none";
btn1.appendChild(image);
invent.appendChild(btn1);

const btn2 = document.createElement("button");
const image2 = document.createElement("img");

image2.src = "./assets/iron-ingot.webp";
image2.alt = "iron-lingot";
image2.style.width = "70px";
image2.style.border = "none";
btn2.appendChild(image2);
invent.appendChild(btn2);

const case1 = document.getElementById("case1");
const case2 = document.getElementById("case2");
const case3 = document.getElementById("case3");
const case4 = document.getElementById("case4");
const case5 = document.getElementById("case5");
const case6 = document.getElementById("case6");
const case7 = document.getElementById("case7");
const case8 = document.getElementById("case8");
const case9 = document.getElementById("case9");
const img1 = document.createElement("img");
img1.src = "./assets/stick.webp";
const img2 = document.createElement("img");
img2.src = "./assets/iron-ingot.webp";

let imagealt = "";
let buttonb = "";
let save = "";

btn2.addEventListener("click", () => {
	btn2.classList.add("active");
	
});
btn1.addEventListener("click", () => {
	btn1.classList.add("active");
});
btn2.addEventListener("click", () => {
	if ((btn1.classList.contains = "active")) {
		btn1.classList.remove = "active";
		btn2.classList.add = "active";
		btn1.style.border = "none";
		btn2.style.border = "3px, solid, red";
		imagealt = "";
		imagealt = img2;
		buttonb = btn2;
	}
});

btn1.addEventListener("click", () => {
	if ((btn2.classList.contains = "active")) {
		btn2.classList.remove = "active";
		btn1.classList.add = "active";
		btn2.style.border = "none";
		btn1.style.border = "3px, solid, red";
		imagealt = img1;
		buttonb = btn1;
	}
});
