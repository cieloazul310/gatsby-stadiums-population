import * as React from 'react';
import Typography from '@material-ui/core/Typography';

const MapAttribution: React.FC<{}> = () => (
  <section>
    <Typography variant="h5">地図とデータについて</Typography>
    <Typography variant="h6">データ</Typography>
    <Typography variant="body1">{'国勢調査 2015年 5次メッシュ(250mメッシュ) その1 人口等基本集計に関する事項'}</Typography>
    <ul>
      <Typography variant="body1" component="li">
        {'URL: '}
        <a
          href="https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876"
          target="_blank"
          rel="noopener noreferrer"
        >
          {
            'https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876'
          }
        </a>
      </Typography>
    </ul>
  </section>
);

export default MapAttribution;
