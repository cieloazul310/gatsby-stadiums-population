import * as React from 'react';
import Typography from '@material-ui/core/Typography';

const DataAttribution: React.FC<{}> = () => (
  <section>
    <Typography variant="h5" gutterBottom>
      人口データについて
    </Typography>
    <Typography variant="body1" paragraph>
      人口データは総務省統計局の地域メッシュ統計を点データに変換したものを用いています。
    </Typography>
    <Typography variant="body1" paragraph>
      {'データ: '}
      <a
        href="https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876"
        target="_blank"
        rel="noopener noreferrer"
      >
        {'国勢調査 2015年 5次メッシュ(250mメッシュ) その1 人口等基本集計に関する事項'}
      </a>
      <br />
      公開日: 2018年1月4日
      <br />
      データ取得日: 2018年4月10日
    </Typography>
    <blockquote>
      <Typography variant="subtitle1" gutterBottom>
        地域メッシュ統計とは
      </Typography>
      <Typography variant="body1" paragraph>
        {
          '地域メッシュ統計とは，緯度・経度に基づき地域を隙間なく網の目（メッシュ）の区域に分けて，それぞれの区域に関する統計データを編成したものです。'
        }
      </Typography>
      <Typography variant="body2">
        引用元:{' '}
        <a href="https://www.stat.go.jp/data/mesh/m_tuite.html" target="_blank" rel="noopener noreferrer">
          総務省統計局
        </a>
      </Typography>
    </blockquote>
    <Typography variant="h5" gutterBottom>
      距離円と人口データの演算
    </Typography>
    <Typography variant="body1" paragraph>
      距離円および距離円に含まれる人口データは JavaScript ライブラリである{' '}
      <a href="https://turfjs.org" target="_blank" rel="noopener noreferrer">
        Turf.js
      </a>{' '}
      で算出しました。
    </Typography>
    <Typography variant="body1">
      人口の算出方法は、
      <a
        href="https://midoriit.com/2014/08/qgis%E3%81%AB%E3%82%88%E3%82%8B%E7%B5%B1%E8%A8%88%E8%A7%A3%E6%9E%904.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        QGISによるデータ分析(4) 合同会社 緑IT事務所
      </a>
      を参考にしています。
    </Typography>
  </section>
);

const MapAttribution: React.FC<{}> = () => (
  <section>
    <Typography variant="h5" gutterBottom>
      地図について
    </Typography>
    <Typography variant="body1" paragraph>
      背景地図には国土地理院の
      <a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank" rel="noopener noreferrer">
        地理院タイル
      </a>
      を使用しています。標準モードでは電子国土基本図、地形モードでは傾斜量図を表示しています。
    </Typography>
    <blockquote>
      <Typography variant="subtitle1" gutterBottom>
        電子国土基本図
      </Typography>
      <Typography variant="body1" paragraph>
        {
          '電子国土基本図（地図情報）とは、道路、建物などの電子地図上の位置の基準である項目（基盤地図情報の取得項目）と、植生、崖、岩、構造物などの土地の状況を表す項目とを一つにまとめたデータです。電子国土基本図（地図情報）は、縮尺レベル25000の精度に限定することなく、より精度の高いものを含んだ我が国全域を覆うベクトル形式の基盤データで、これまでの2万5千分1地形図に替わる新たな基本図と位置づけられるものです。'
        }
      </Typography>
      <Typography variant="body2">
        引用元: <a href="http://www.gsi.go.jp/kibanjoho/mapinfo_what.html">国土地理院</a>
      </Typography>
    </blockquote>
    <blockquote>
      <Typography variant="subtitle1" gutterBottom>
        傾斜量図
      </Typography>
      <Typography variant="body1" paragraph>
        {
          '地表面の傾きの量を算出し、その大きさを白黒の濃淡で表現したものです。白いほど傾斜が緩やか、黒いほど急峻であることを意味します。台地、段丘、山地、火山地形、地すべり、断層などの地形判読などにご活用いただけます。'
        }
      </Typography>
      <Typography variant="body2">
        引用元: <a href="http://www.gsi.go.jp/bousaichiri/slopemap.html">国土地理院</a>
      </Typography>
    </blockquote>
  </section>
);

export { DataAttribution, MapAttribution };
