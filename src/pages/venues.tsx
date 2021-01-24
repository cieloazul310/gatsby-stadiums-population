import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Layout from 'gatsby-theme-aoi/src/layouts/TabPageLayout';
import TabPane from 'gatsby-theme-aoi/src/layout/TabPane';
import StadiumsTable from '../components/StadiumsTable';
import Basis from '../components/Basis';
import { AdInArticle, AdInFooter } from '../components/Ads';
import Attribution from '../components/Attribution';
import { useIsMobile } from '../utils/useIsMobile';
import { useAllVenues } from '../utils/graphql-hooks';

function IndexPage() {
  const isMobile = useIsMobile();
  const [tab, setTab] = React.useState(0);
  const _handleTab = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setTab(newValue);
  };
  const data = useAllVenues();
  return (
    <Layout
      disablePaddingTop
      disableGutters={isMobile}
      componentViewports={{ BottomNav: false }}
      tabs={
        <Tabs value={tab} onChange={_handleTab}>
          <Tab label="J1" />
          <Tab label="J2" />
          <Tab label="J3" />
          <Tab label="JFL" />
        </Tabs>
      }
    >
      <TabPane index={0} value={tab} id="tab-1" disableGutters>
        <StadiumsTable venues={data.J1.edges} />
      </TabPane>
      <TabPane index={1} value={tab} id="tab-2" disableGutters>
        <StadiumsTable venues={data.J2.edges} />
      </TabPane>
      <TabPane index={2} value={tab} id="tab-3" disableGutters>
        <StadiumsTable venues={data.J3.edges} />
      </TabPane>
      <TabPane index={3} value={tab} id="tab-4" disableGutters>
        <StadiumsTable venues={data.JFL.edges} />
      </TabPane>
      <Basis>
        <AdInArticle />
      </Basis>
      <Basis>
        <Container maxWidth="md">
          <Attribution />
        </Container>
      </Basis>
      <Basis>
        <AdInFooter />
      </Basis>
    </Layout>
  );
}

export default IndexPage;
