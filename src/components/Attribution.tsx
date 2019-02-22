import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';
import FlexTable from '../components/FlexTable/FlexTable';
import FlexRow from '../components/FlexTable/FlexRow';
import FlexTh from '../components/FlexTable/FlexTh';
import FlexTd from '../components/FlexTable/FlexTd';

interface Query {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      date: string;
      lastmod: string;
      author: {
        name: string;
        url: string;
        siteName: string;
        twitter: string;
        github: string;
      };
    };
  };
}

const Attribution: React.FunctionComponent<{}> = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            date
            lastmod
            author {
              name
              url
              siteName
              twitter
              github
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <section>
        <Typography variant="h5" gutterBottom>
          {data.site.siteMetadata.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {data.site.siteMetadata.description}
        </Typography>
        <FlexTable>
          <FlexRow>
            <FlexTh>人口データ</FlexTh>
            <FlexTd>
              <a
                href="https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876"
                target="_blank"
                rel="noopener noreferrer"
              >
                国勢調査2015年 5次メッシュ(250mメッシュ)
              </a>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>演算</FlexTh>
            <FlexTd>
              <a href="http://turfjs.org" target="_blank" rel="noopener noreferrer">
                Turf.js
              </a>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>地図</FlexTh>
            <FlexTd>
              <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener noreferrer">
                地理院タイル
              </a>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>制作</FlexTh>
            <FlexTd>
              <a href={data.site.siteMetadata.author.url} target="_blank" rel="noopener noreferrer">
                水戸地図
              </a>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>Twitter</FlexTh>
            <FlexTd>
              <a href={`http://twitter.com/${data.site.siteMetadata.author.twitter}`} target="_blank" rel="noopener noreferrer">
                @cieloazul310
              </a>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>GitHub</FlexTh>
            <FlexTd>
              <a href="https://github.com/cieloazul310/gatsby-stadiums-population" target="_blank" rel="noopener noreferrer">
                gatsby-stadiums-population
              </a>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>公開日</FlexTh>
            <FlexTd>
              <time>{data.site.siteMetadata.date}</time>
            </FlexTd>
          </FlexRow>
          <FlexRow>
            <FlexTh>最終更新</FlexTh>
            <FlexTd>
              <time>{data.site.siteMetadata.lastmod}</time>
            </FlexTd>
          </FlexRow>
        </FlexTable>
        <Typography variant="body1" paragraph />
        <Typography variant="h6" gutterBottom>
          データの利用について
        </Typography>
        <Typography variant="body1" paragraph>
          本サイトに掲載しているデータは「URL または
          サイト名」及び「データの出典元（地域メッシュ統計）」を明記した上で、自由に利用可能です。地図を利用する際には、
          <a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="_blank" rel="noopener noreferrer">
            国土地理院コンテンツ利用規約
          </a>
          を参照ください。
        </Typography>
        <Typography variant="body2" paragraph>
          記載例: 「出典: 水戸地図、2015年度国勢調査250mメッシュ人口」
        </Typography>
      </section>
    )}
  />
);

export default Attribution;
