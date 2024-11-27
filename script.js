// Data for Recipes
const recipes = [
  { id: 1, title: "Pancakes", category: "breakfast", image: "images/pancakes.jpg" },
  { id: 2, title: "Spaghetti", category: "lunch", image: "images/spaghetti.jpg" },
  { id: 3, title: "Grilled Chicken", category: "dinner", image: "images/chicken.jpg" },
  { id: 4, title: "Chocolate Cake", category: "dessert", image: "images/cake.jpg" },
];

// Load Recipes
const recipeContainer = document.getElementById("recipes");
const loadRecipes = (filter = "all") => {
  recipeContainer.innerHTML = ""; // Clear previous recipes
  const filteredRecipes = filter === "all" ? recipes : recipes.filter(r => r.category === filter);
  filteredRecipes.forEach(recipe => {
    const card = `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <div class="info">
          <h3>${recipe.title}</h3>
          <p>Category: ${recipe.category}</p>
        </div>
      </div>
    `;
    recipeContainer.innerHTML += card;
  });
};

// Filter Functionality
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => loadRecipes(btn.dataset.category));
});

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Initialize
loadRecipes();
