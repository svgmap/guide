/**
 * 使い方
 * 
 * 1st Step: node.jsとnpmをインストール
 * 2st Step: `npm install`で必要なモジュール群をインストール
 * 3rd Step: `npm test`で単体試験を実施
 * 
 * Refer to https://github.com/svgmap/svgmapjs/blob/main/README.md#development
 * 
 */

import {SvgImagesProps, SvgImageProps} from "../libs/SvgImagesProps";
import {jest} from "@jest/globals";

describe("unittest for SvgImagesProps.js",()=>{
    describe("target SvgImageProps class",()=>{
        let svgimageprops;
        beforeAll(()=>{
            svgimageprops = new SvgImageProps();
        });

        it("access Attribute of CRS.",()=>{
            const dummy_crs = {
				a : 1 ,
				b : 0 ,
				c : 0 ,
				d : 1 ,
				e : 0 ,
				f : 0 ,
				isSVG2 : false
			};
            svgimageprops.updateCrs(dummy_crs);
            expect(svgimageprops.CRS.a).toBe(1); // a-fはCRS配下にコピー
            expect(svgimageprops.CRS.b).toBe(0);
            expect(svgimageprops.CRS.isSVG2).toBeUndefined(); //isSVG2はsvgimageprops直下に移動
            expect(svgimageprops.isSVG2).toBeFalsy();
        });
        
        it("access Attribute of altdMap.",()=>{
            expect(svgimageprops.altdMap).toBeInstanceOf(WeakMap);
        });

        it("access Attribute of styleMap.",()=>{
            expect(svgimageprops.styleMap).toBeInstanceOf(WeakMap);
        });

        it("access Attribute of commonQuery.", ()=>{ // クエリストリングにJWTキーを与えて認可を突破するための仕組み
            //expect(svgimageprops.commonQuery).toBeNull(); //本来こっちを採用したい
            expect(svgimageprops.commonQuery).toBeUndefined();
            svgimageprops.commonQuery = "?q=abcd";
            expect(svgimageprops.commonQuery).toBe("?q=abcd");
        });

        it("access Attributes.", ()=>{
            expect(svgimageprops.childImages).toEqual([]);
            expect(svgimageprops.editalble).toBe(false);
            expect(svgimageprops.editing).toBe(false);
            expect(svgimageprops.isClickable).toBe(false);
            expect(svgimageprops.isSVG2).toBe("??");
            expect(svgimageprops.metaSchema).toBe(false);
            expect(svgimageprops.noChache).toBe(true);
            expect(svgimageprops.parentDocId).toBe("??");
            expect(svgimageprops.preRenderControllerFunction).toBe("??");
            expect(svgimageprops.Path).toBe("??");
            expect(svgimageprops.rootLayer).toBe("root");
            expect(svgimageprops.scale).toBe("??");
            // TODO: 標準機能なので単体試験いらんかも
            expect(svgimageprops.domMutationObserver).toBe("??"); 
        });

        it("Error Handling.", ()=>{
            expect(svgimageprops.loadError).toBe(true);

        });


        // TODO: svgImagesProps[id]=functionというケースあり、要確認

        it("access to Attribute of controller.", ()=>{
            expect(svgimageprops.controller).toBe("何が入っているの？");
            expect(svgimageprops.controller.src).toBe("何が入っているの？");
            expect(svgimageprops.controller.url).toBe("何が入っているの？");
        });
        
        it("access to script attributes.",()=>{
            expect(svgimageprops.script).toBe("");
            expect(svgimageprops.script.actualViewBox).toBe("");
            expect(svgimageprops.script.childDocOp).toBe("");
            expect(svgimageprops.script.docId).toBe("");
            expect(svgimageprops.script.drawGeoJson).toBe("");
            expect(svgimageprops.script.geoViewBox).toBe("");
            expect(svgimageprops.script.getCanvasSize).toBe("");
            expect(svgimageprops.script.getCORSURL).toBe("");
            expect(svgimageprops.script.initialLoad).toBe("");
            expect(svgimageprops.script.initObject).toBe("");
            expect(svgimageprops.script.isIntersect).toBe("");
            expect(svgimageprops.script.linkedDocOp).toBe("");
            expect(svgimageprops.script.location).toBe("");
            expect(svgimageprops.script.onload).toBe("");
            expect(svgimageprops.script.refreshScreen).toBe("");
            expect(svgimageprops.script.scale).toBe("");
            expect(svgimageprops.script.transform).toBe("");
            expect(svgimageprops.script.verIE).toBe("");
            expect(svgimageprops.script.viewport).toBe("");
            expect(svgimageprops.script.handleScriptCf()).toBe("");
        });

    });

    describe("target SvgImagesProps class",()=>{
        let svgimagesprops, svgDocument;

        beforeAll(()=>{
            svgimagesprops = new SvgImagesProps();
        });

        it("create a root document.", ()=>{
            let id = "root";
            svgDocument  = new DOMParser();
            svgimagesprops.createDocument(id, svgDocument);
            expect(svgimagesprops.get("root")).toBe(Object);
        });
        
        it("access to specific id", ()=>{
            svgimagesprops["root"] = "rootLayer";
            expect(svgimagesprops["root"]).toBe("rootLayer");
        });
    });
});