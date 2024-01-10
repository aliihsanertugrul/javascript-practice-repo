import randomSort, {
	numberSortASC,
	numberSortDESC,
	stringSortASC,
	stringSortDESC,
} from "./sort.js";

const btnSort1 = document.getElementById("btnSort1");
const btnSort2 = document.getElementById("btnSort2");
const btnSort3 = document.getElementById("btnSort3");
const btnSort4 = document.getElementById("btnSort4");
const btnSort5 = document.getElementById("btnSort5");
const lblResult = document.getElementById("lblResult");

const arr1 = ["Ali", "Veli", "Songül", "Şeyma", "Çetin", "Berrin"];
const arr2 = [23, 56, 23, 79, -45, 777, 0, 78, 234];

btnSort1.addEventListener("click", () => {
	lblResult.innerHTML = numberSortASC(arr2);
});

btnSort2.addEventListener("click", () => {
	lblResult.innerHTML = numberSortDESC(arr2);
});

btnSort3.addEventListener("click", () => {
	lblResult.innerHTML = stringSortASC(arr1);
});

btnSort4.addEventListener("click", () => {
	lblResult.innerHTML = stringSortDESC(arr1);
});

btnSort5.addEventListener("click", () => {
	lblResult.innerHTML = randomSort(arr1);
});
