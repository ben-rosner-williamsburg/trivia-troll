import React from 'react';
import './CategoryBadge.scss';

interface CategoryBadgeProps {
  category: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getCategoryIcon = (category: string) => {
    if (category.includes('Video Games')) return '🎮';
    if (category.includes('Music')) return '🎵';
    if (category.includes('Film')) return '🎬';
    if (category.includes('Sports')) return '⚽';
    if (category.includes('Science')) return '🔬';
    if (category.includes('History')) return '📚';
    if (category.includes('Geography')) return '🌍';
    return '❓';
  };

  return (
    <div className="category-badge">
      <span className="category-icon">{getCategoryIcon(category)}</span>
      <span className="category-text">{category.replace('Entertainment: ', '')}</span>
    </div>
  );
};

export default CategoryBadge;