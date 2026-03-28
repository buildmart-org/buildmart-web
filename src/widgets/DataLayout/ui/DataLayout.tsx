import type { LayoutMode } from '@/widgets/DataLayout';

import { Grid, HorizontalCarousel, VerticalList } from '@/shared/ui/';

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
