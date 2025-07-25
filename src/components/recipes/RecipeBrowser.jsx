import { useBrowser } from "../../hooks/useBrowser.js";
import RecipeCard from "./RecipeCard.jsx"; // El renderizador sigue siendo útil

export default function RecipeBrowser({ allMeals }) {
  const {
    activeTags,
    searchTerm,
    setSearchTerm,
    allTags,
    handleTagChange,
    filteredItems,
  } = useBrowser({ items: allMeals, searchKeys: ["nombre"], tagKey: "tags" });

  return (
    <div>
      {/* Filtros y Buscador */}
      <div class="bg-white p-4 rounded-lg shadow-md mb-8 space-y-4">
        <input
          type="text"
          placeholder="Buscar por palabra clave..."
          value={searchTerm}
          onInput={(e) => setSearchTerm(e.currentTarget.value)}
          class="w-full p-2 border border-gray-300 rounded-md"
        />
        <div class="flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagChange(tag)}
              class={`cursor-pointer border border-gray-300 rounded-full py-1 px-3 text-sm transition ${
                activeTags.includes(tag)
                  ? "bg-[#6B8A7A] text-white border-[#6B8A7A]"
                  : "bg-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Resultados */}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((receta) => (
            <RecipeCard key={receta.nombre} item={receta} />
          ))
        ) : (
          <p class="text-stone-500 italic col-span-full text-center">
            No se han encontrado recetas.
          </p>
        )}
      </div>
    </div>
  );
}
