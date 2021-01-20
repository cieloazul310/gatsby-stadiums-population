import * as React from 'react';
import Typography from '@material-ui/core/Typography';

function Attribution() {
  return (
    <section>
      <Typography variant="h5" gutterBottom>
        {data.site.siteMetadata.title}
      </Typography>
      <Typography variant="body1" paragraph>
        {data.site.siteMetadata.description}
      </Typography>
      <div>
        <div>
          <div>人口データ</div>
          <div>
            <a
              href="https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876"
              target="_blank"
              rel="noopener noreferrer"
            >
              国勢調査2015年 5次メッシュ(250mメッシュ)
            </a>
          </div>
        </div>
        <div>
          <div>演算</div>
          <div>
            <a href="http://turfjs.org" target="_blank" rel="noopener noreferrer">
              Turf.js
            </a>
          </div>
        </div>
        <div>
          <div>地図</div>
          <div>
            <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener noreferrer">
              地理院タイル
            </a>
          </div>
        </div>
        <div>
          <div>制作</div>
          <div>
            <a href={data.site.siteMetadata.author.url} target="_blank" rel="noopener noreferrer">
              水戸地図
            </a>
          </div>
        </div>
        <div>
          <div>Twitter</div>
          <div>
            <a href={`http://twitter.com/${data.site.siteMetadata.author.twitter}`} target="_blank" rel="noopener noreferrer">
              @cieloazul310
            </a>
          </div>
        </div>
        <div>
          <div>GitHub</div>
          <div>
            <a href="https://github.com/cieloazul310/gatsby-stadiums-population" target="_blank" rel="noopener noreferrer">
              gatsby-stadiums-population
            </a>
          </div>
        </div>
        <div>
          <div>公開日</div>
          <div>
            <time>{data.site.siteMetadata.date}</time>
          </div>
        </div>
        <div>
          <div>最終更新</div>
          <div>
            <time>{data.site.siteMetadata.lastmod}</time>
          </div>
        </div>
      </div>
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
  );
}

export default Attribution;
