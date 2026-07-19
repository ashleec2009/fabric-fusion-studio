// Fabric Fusion Studio
// 3D Printing System

const DEFAULT_FILAMENT = {
  name: "Standard PLA",
  category: "Standard",
  cost: 26,
  weight: 1000
};


// Load saved filament inventory
function getFilaments() {
  return JSON.parse(localStorage.getItem("filaments")) || [
    DEFAULT_FILAMENT
  ];
}


// Save filament inventory
function saveFilaments(filaments) {
  localStorage.setItem(
    "filaments",
    JSON.stringify(filaments)
  );
}


// Calculate cost per gram
function filamentCostPerGram(cost, weight) {
  return cost / weight;
}


// Add new filament
function addFilament(name, category, cost, weight) {

  let filaments = getFilaments();

  filaments.push({
    name: name,
    category: category,
    cost: Number(cost),
    weight: Number(weight)
  });

  saveFilaments(filaments);
}


// Calculate print material cost
function calculateMaterialCost(grams, filament) {

  let costPerGram =
    filamentCostPerGram(
      filament.cost,
      filament.weight
    );

  return grams * costPerGram;
}
