# 全体像
```.js
class SvgImageProps{
    Path: 
    script:
    CRS:
    styleMap:
    altdMap:
    domMutationObserver:
    metaSchema:
    isSVG2:
    parentDocId: 
    scale: 
    childImages:
    rootLayer:
    geoViewBox
}
```

# 各要素の説明
- path
    - `handleResult`の引数`docPath`がそのまま代入されている
        - `handleResult`は`loadSvg`の中でのみ参照されている
- script
- CRS
    - 座標参照系
- editable
    - Demoではこの要素は見つからなかった
- editing
    - Demoではこの要素は見つからなかった
- isClickable
    - Demoではこの要素は見つからなかった
- controller
    - Demoではこの要素は見つからなかった
- refresh
    - to be obsoluted: 指定時間で、コンテンツをリロードするためのパラメータ
- styleMap
- altdMap
    - WeakMapオブジェクトとして作成されている
    - MutationObserverのオブジェクトを作る際に、関数内で削除されている
    - めちゃでかメソッド`parseSvg`でいじられている
    - `PathRenderer.setSVGpolyPoints`メソッド内で`PathNode`キーに対して何かが挿入されている（ただ、pathNodeがなんなのかはわかっていないし、webアプリ上ではこのキーは存在していない）
    - canvas2dのPath2Dオブジェクトを用いたキャッシュ機構　ビューポート含めDOMに変化がない状態で再描画が指示された場合このキャッシュを使う。それ以外では全て破棄
- domMutationObserver
    - MutationObserverクラスのオブジェクトで、mutationObsという変数を経由して代入されている
    - SVGdocumentの要素（おそらくthis.#svgImages[docId].documentElement）とその子孫要素全体を監視
    - 属性変更の場合に`styleMap`,`altdMap`の2種類のキャッシュを削除
- metaSchema
    - layerにおける各スポットの情報ハッシュのキーをcsv形式で表している
- isSVG2
    - boolean（SVG2.0形式での記載かどうかを入れている）主に使われている関数は`LayerManager.getLayer`,`SvgMap.parseSvg`（`svgImages["root"].getElementsByTagName()`で`iframe`か`animation`を参照するかの区別を設けるために使われていそう）
- parentDocId
    - 親layerId
- scale: 
- childImages
    - このsvgコンテンツから参照された子svgコンテンツの、layerId
- rootLayer
    - 親を辿って行った時のroot直前のlayerIDなのかな？？
- geoViewBox
    - [height, width, x, y]などのカラムがある
    - スクロールすると値が変わる