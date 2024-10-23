import CategoryButton from './CategoryButton';
import { CategoryDetail } from '@/config/types';

interface CategoryListProps {
  categoryList: CategoryDetail[];
  allPostCount: number;
  currentCategory?: string;
}

export default function CategoryList({
  categoryList,
  allPostCount,
  currentCategory = 'all',
}: CategoryListProps) {
  return (
    <section className='mb-25'>
      <ul className='flex flex-wrap gap-10'>
        <CategoryButton
          href='/blog'
          isCurrent={currentCategory === 'all'}
          displayName='All'
          count={allPostCount}
        />
        {categoryList.map((category) => (
          <CategoryButton
            key={category.dirName}
            href={`/blog/${category.dirName}`}
            isCurrent={currentCategory === category.dirName}
            displayName={category.publicName}
            count={category.count}
          />
        ))}
      </ul>
    </section>
  );
}
