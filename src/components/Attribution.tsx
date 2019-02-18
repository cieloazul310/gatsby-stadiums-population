import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

interface Query {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
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
        <Typography variant="body1">
          {`人口データ: `}
          <a
            href="https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876"
            target="_blank"
            rel="noopener noreferrer"
          >
            国勢調査 2015年 5次メッシュ(250mメッシュ)
          </a>
        </Typography>
        <Typography variant="body1">
          {`演算: `}
          <a href="http://turfjs.org" target="_blank" rel="noopener noreferrer">
            Turf.js
          </a>
        </Typography>
        <Typography variant="body1">
          {`地図: `}
          <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener noreferrer">
            地理院タイル
          </a>
        </Typography>
        <Typography variant="body1">
          {`制作: `}
          <a href={data.site.siteMetadata.author.url} target="_blank" rel="noopener noreferrer">
            {data.site.siteMetadata.author.siteName}
          </a>
        </Typography>
        <Typography variant="body1">
          {`Twitter: `}
          <a href={`https://twitter.com/${data.site.siteMetadata.author.twitter}`} target="_blank" rel="noopener noreferrer">{`@${
            data.site.siteMetadata.author.twitter
          }`}</a>
        </Typography>
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
