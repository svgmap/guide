class SvgImagesProps extends Map{
    constructor(){
        super();
    }

    /**
     * 
     * @param {String} id  SVGMapをユニークに管理するID
     * @param {String} svgPath  SVGファイルのURI(パス)
     * @param {Document} document SVGファイルをパースしたオブジェクト
     */
    createDocument(id, svgPath, document){
        let svgimageprops = new SvgImageProps(svgPath, document);
        this.set(id,svgimageprops);
    }
}

/**
 * 
 */
class SvgImageProps{
    constructor(svgPath, document){
        this.Path = svgPath;
        this.refresh = []; //これがデフォルトを設定すべきなのか不明
        this.altdMap = new WeakMap();
        this.styleMap = new WeakMap();
        this.CRS = {};
        this.editalble = false;
        this.editing = false;
        this.isClickable = false;
        this.childImages = [];
        this.controller = '';
        this.script = '';
        this.commonQuery = undefined; //TODO: 事前にNullか""で定義しておくべき
        this.isSVG2 = false;
        this.rootLayer = "";
        this.parentDocId = "";
    }
    /**
     * Cordinate Reference System（座標参照系）
     * CRS変数の仲間で定義しなくて気はしますが、わからなくならないようにばらしておきます。
     * 
     * @param {Number} a 
     * @param {Number} b 
     * @param {Number} c 
     * @param {Number} d 
     * @param {Number} e 
     * @param {Number} f 
     * @param {Boolean} isSVG2 
     */
    updateCrs(crs){
        // this.CRS = crs これでよくない？
        this.CRS = {a: crs.a, b: crs.b, c: crs.c, d: crs.d, e: crs.e, f: crs.f}
        this.isSVG2 = crs.isSVG2;
    }
}


export { SvgImagesProps, SvgImageProps};
