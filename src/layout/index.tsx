import * as React from 'react';
import Layout, { LayoutProps } from 'gatsby-theme-aoi/src/layout';

function CustomLayout(props: LayoutProps) {
  return <Layout componentViewports={{ BottomNav: false }} {...props} />;
}

export default CustomLayout;
