import { HorizontalCarousel } from '@/shared/ui/HorizontalCarousel';
import type { LayoutMode } from '@/widgets/DataLayout';
import { VerticalList } from '@/shared/ui/VerticalList/VerticalList.tsx';
import { Grid } from '@/shared/ui';

interface DataLayoutProps {
  children: React.ReactNode;
  mode: LayoutMode;
}

export const DataLayout = (props: DataLayoutProps) => {
  const { children, mode } = props;

  switch (mode) {
    case 'grid':
      return <Grid>{children}</Grid>;

    case 'horizontal-carousel':
      return <HorizontalCarousel>{children}</HorizontalCarousel>;

    case 'vertical-list':
      return <VerticalList>{children}</VerticalList>;

    default:
      return <>{children}</>;
  }
};
