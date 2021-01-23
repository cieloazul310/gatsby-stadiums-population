import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

function Attribution() {
  return (
    <>
      <section>
        <Typography variant="h5" component="h2" gutterBottom>
          国内のサッカースタジアム周辺の人口
        </Typography>
        <Typography paragraph>国内のサッカースタジアム周辺の人口を算出して地図に可視化したサイトです。</Typography>
      </section>
      <section>
        <Typography variant="h6" component="h3" gutterBottom>
          データについて
        </Typography>
        <Typography paragraph>
          <MuiLink
            href="https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            国勢調査2015年 5次メッシュ(250mメッシュ)人口データ
          </MuiLink>
          を基に計算しています。
        </Typography>
      </section>
      <section>
        <Typography variant="h6" component="h3" gutterBottom>
          演算
        </Typography>
        <Typography paragraph>
          <MuiLink href="http://turfjs.org" target="_blank" rel="noopener noreferrer" color="secondary">
            Turf.js
          </MuiLink>
          を使って作成した人口算出モジュール
          <MuiLink href="https://github.com/cieloazul310/population" target="_blank" rel="noopener noreferrer" color="secondary">
            Population Calculator
          </MuiLink>
          による演算
        </Typography>
      </section>
      <section>
        <Typography variant="h6" component="h3" gutterBottom>
          地図
        </Typography>
        <Typography paragraph>
          <MuiLink
            href="https://github.com/gsi-cyberjapan/gsimaps-vector-experiment"
            target="_blank"
            rel="noopener noreferrer"
            color="secondary"
          >
            国土地理院ベクトルタイル提供実験
          </MuiLink>
          を使って
          <MuiLink href="https://github.com/cieloazul310/canvasmap" target="_blank" rel="noopener noreferrer" color="secondary">
            CanvasMap
          </MuiLink>
          によって作成
        </Typography>
      </section>
      <section>
        <Typography variant="h6" component="h3" gutterBottom>
          制作
        </Typography>
        <Typography paragraph>
          <MuiLink href="https://cieloazul310.github.io" target="_blank" rel="noopener noreferrer" color="secondary">
            水戸地図
          </MuiLink>
          <br />
          <MuiLink href="https://twitter.com/cieloazul310" target="_blank" rel="noopener noreferrer" color="secondary">
            @cieloazul310
          </MuiLink>
        </Typography>
      </section>
    </>
  );
}

export default Attribution;
