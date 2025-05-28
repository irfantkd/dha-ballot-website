/**
 * Sorts categories based on a provided order
 * @param {Array} categories - Array of category objects
 * @param {Object} categoryOrder - Object defining the order of categories
 * @param {boolean} [includeAll=true] - Whether to include/prepend the "All" category
 * @returns {Array} Sorted array of categories
 */
export const sortCategories = (
  categories,
  categoryOrder,
  includeAll = true
) => {
  if (!categories || !categoryOrder) return [];

  // Create a copy of the categories array to avoid mutating the original
  let sortedCategories = [...categories];

  // Filter out the "All" category if it exists in the input
  sortedCategories = sortedCategories.filter((cat) => cat.id !== 'all');

  // Sort based on the provided order
  sortedCategories.sort((a, b) => {
    const aOrder =
      categoryOrder[a.slug.split('-')[0].toLowerCase()] ?? Infinity;
    const bOrder =
      categoryOrder[b.slug.split('-')[0].toLowerCase()] ?? Infinity;
    return aOrder - bOrder;
  });

  // Add "All" category at the beginning if includeAll is true
  if (includeAll) {
    const allCategory = {
      id: 'all',
      name: 'All',
      slug: 'all',
    };
    return [allCategory, ...sortedCategories];
  }

  return sortedCategories;
};
