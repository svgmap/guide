
class SvgImageProps{
    Path: 
    script:{

    }
    CRS:（座標参照系）{

    }
    editable: Demoではこの要素は見つからなかった
    editing: Demoではこの要素は見つからなかった
    isClickable: Demoではこの要素は見つからなかった
    controller: Demoではこの要素は見つからなかった
    refresh:（to be obsoluted: 指定時間で、コンテンツをリロードするためのパラメータ）{

    }
    
    styleMap:{

    }
    altdMap :{

    }
    domMutationObserver:{
        
    }
    metaSchema: layerにおける各スポットの情報ハッシュのキーをcsv形式で表している
    isSVG2: boolean（SVG2.0形式での記載かどうかを入れている）主に使われている関数は`LayerManager.getLayer`,`SvgMap.parseSvg`（`svgImages["root"].getElementsByTagName()`で`"iframe"`か`"animation"を参照するかの区別を設けるために使われていそう`）
    parentDocId: 親layerId
    scale: 
    childImages: このsvgコンテンツから参照された子svgコンテンツ(の、layerId)
    rootLayer: 親を辿って行った時のroot直前のlayerIDなのかな？？
}
