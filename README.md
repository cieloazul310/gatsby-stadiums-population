# 国内のサッカースタジアム周辺の人口

URL: <https://cieloazul310.github.io/gatsby-stadiums-population/>

> 国内のサッカースタジアム周辺の人口は、日本国内の主要スタジアム周辺の人口を地図で表示したサイトです。

このサイトは、[Gatsby JS][gatsby] と [TypeScript] で作成されました。

## データについて

[国勢調査 2015 年 5 次メッシュ(250m メッシュ)人口データ](https://www.e-stat.go.jp/gis/statmap-search?page=1&type=1&toukeiCode=00200521&toukeiYear=2015&aggregateUnit=Q&serveyId=Q002005112015&statsId=T000876)を基に計算しています。

## 演算

[Turf.js](http://turfjs.org)を使って作成した人口算出モジュール[Population Calculator](https://github.com/cieloazul310/population)による演算

## 地図

[国土地理院ベクトルタイル提供実験](https://github.com/gsi-cyberjapan/gsimaps-vector-experiment)を使って[CanvasMap](https://github.com/cieloazul310/canvasmap)で作成

## 制作

[水戸地図](https://cieloazul310.github.io)
[@cieloazul310](https://twitter.com/cieloazul310)

## Credits

Built with [Gatsby] - the blazing-fast static site generator for [React].

<!-- Referrences -->

[gatsby]: https://www.gatsbyjs.org
[typescript]: https://www.typescriptlang.org/
[react]: https://facebook.github.io/react/
