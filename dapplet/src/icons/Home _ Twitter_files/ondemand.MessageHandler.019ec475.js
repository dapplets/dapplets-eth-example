(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{J23q:function(e,t,n){"use strict";n.r(t);var r=n("ezF+"),o=n("97Jx"),a=n.n(o),i=n("ERkP"),c=n.n(i),s=n("TEXq");var l=Object.freeze({CompactPrompt:"compactPrompt",HeaderImagePrompt:"headerImagePrompt",InlinePrompt:"inlinePrompt",LargePrompt:"largePrompt"}),d=n("EIk2"),p=n("rxPX"),m=n("0KEI");const u=(e,t)=>{const{entry:n}=t;return n.content.content.pagedCarouselFeedbackItem?void 0:n.content.content.message?n.content.content.message:t.entry.content},y=(e,t)=>{var n;const r=null===(n=u(0,t))||void 0===n?void 0:n.content;return r&&Object(s.a)(r)||void 0},g=(e,t)=>{var n;const r=null===(n=u(0,t))||void 0===n?void 0:n.content;if(r)return r.headerImagePrompt?r.headerImagePrompt:r.inlinePrompt?r.inlinePrompt:r.compactPrompt?r.compactPrompt:r.largePrompt?r.largePrompt:void 0},h=(e,t)=>{var n;return null===(n=u(0,t))||void 0===n?void 0:n.impressionCallbacks},b=(e,t)=>{const{entry:n}=t;return!!n.content.content.message},k=(e,t)=>t.entry.entryId,C=(e,t)=>t.feedbackItems;var E=Object(p.a)().propsFromState((()=>({displayType:y,entryId:k,feedbackItems:C,messagePrompt:g,impressionCallbacks:h,shouldRenderBorder:b}))).adjustStateProps((({displayType:e,entryId:t,feedbackItems:n,impressionCallbacks:r,messagePrompt:o,shouldRenderBorder:a})=>{const i=(null==o?void 0:o.headerImage)&&{...o.headerImage.imageVariants[0],backgroundColor:o.headerImage.backgroundColor};return{bodyText:(null==o?void 0:o.bodyText)||void 0,bodyRichText:(null==o?void 0:o.bodyRichText)||void 0,entryId:t,feedbackItems:n,image:i,impressionCallbacks:r,isCompact:e===l.CompactPrompt,primaryButtonAction:(null==o?void 0:o.primaryButtonAction)||void 0,secondaryButtonAction:(null==o?void 0:o.secondaryButtonAction)||void 0,shouldRenderBorder:a,titleText:null==o?void 0:o.headerText,titleRichText:(null==o?void 0:o.headerRichText)||void 0}})).propsFromActions((({module:e})=>({createLocalApiErrorHandler:Object(m.createLocalApiErrorHandlerWithContextFactory)("URT_TIMELINE_MESSAGE"),impressEntry:e.impressEntry,processCallback:d.a,removeEntry:e.removeEntry}))).withAnalytics(),v=n("RoyM"),f=n("caTy"),x=n("Lz2T"),I=n("ywYn");var P=E((e=>{const{analytics:t,createLocalApiErrorHandler:n,entry:r,entryId:o,feedbackItems:i,impressEntry:s,impressionCallbacks:l,module:d,primaryButtonAction:p,processCallback:m,removeEntry:u,secondaryButtonAction:y,...g}=e,{element:h}=t.contextualScribeNamespace,b=n(),k=(e,n)=>{return e?{link:(r=e.action.url,r&&Object(f.b)({url:r,urlType:r.indexOf("twitter://")>=0?I.a.DeepLink:I.a.ExternalUrl})),onClick:()=>{const r=(null==e?void 0:e.action.onClickCallbacks)||[];t.scribe({element:h||n,action:"click"}),r&&r.forEach((e=>{m(e).catch(b)})),null!=e&&e.action.dismissOnClick&&u(o)},text:e.text}:void 0;var r},C=k(p,"primary_action"),E=k(y,"secondary_action"),P=null!=i&&i.length?c.a.createElement(v.a,{feedbackItems:i,isDisplayedOnMedia:!!e.image}):null;return c.a.useEffect((()=>{t.scribeAction("impression"),l&&s({entryId:o,callbacks:l})}),[]),c.a.createElement(x.a,a()({},g,{primaryAction:C,rightControl:P,secondaryAction:E}))})),A=n("Rp9C");t.default=({withGaps:e})=>r.b({component:P,divider:{bottom:e,top:e},getScribeDataItem:e=>A.a.forMessage(e.itemMetadata.clientEventInfo)}).getHandler()},Lz2T:function(e,t,n){"use strict";var r=n("97Jx"),o=n.n(r),a=n("ERkP"),i=n.n(a),c=n("PnKw"),s=n("vYiB"),l=n("X3+4"),d=n("rcen"),p=n("k89r");function m(e){const{bodyRichText:t,bodyText:n,onImpression:r,primaryAction:a,titleRichText:m,titleText:u,...y}=e,g=Object(p.a)(),h=()=>{g.scribe({action:"click"})},b=m?i.a.createElement(d.a,{entities:m.entities,onEntityClick:h,text:m.text}):u&&u.length?u:null,k=t?i.a.createElement(d.a,{entities:t.entities,onEntityClick:h,text:t.text}):n&&n.length?n:null,C=e=>({...a,onClick:t=>{(null==a?void 0:a.onClick)&&a.onClick(t),e(t)}}),E=i.a.createElement(l.a.Consumer,null,(({handleNextSlide:e})=>i.a.createElement(c.a,o()({},y,{headline:b,primaryAction:a?C(e):void 0,subtext:k}))));return"function"==typeof r?i.a.createElement(s.a,{onImpression:r},E):E}m.defaultProps={shouldRenderBorder:!1},t.a=m},PnKw:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("KEM+"),o=n.n(r),a=n("ERkP"),i=n.n(a),c=n("TIdA"),s=n("t62R"),l=n("A91F"),d=n("/yvb"),p=n("rHpw"),m="inlinePrompt",u="inlinePrompt-primaryAction",y="inlinePrompt-secondaryAction",g="inlinePrompt-centeredImageContainer",h=n("MWbm");class b extends i.a.Component{constructor(...e){super(...e),o()(this,"_renderImage",(e=>{const t=i.a.createElement(c.a,{accessibilityLabel:"",aspectMode:l.a.exact(e.width/e.height),backgroundColor:e.backgroundColor,image:e});return e.isCentered?i.a.createElement(h.a,{style:k.centeredImage,testID:g},i.a.createElement(h.a,{style:{width:`${e.width}px`,height:`${e.height}px`}},t)):t})),o()(this,"_renderTitle",(()=>{const{headline:e}=this.props;return e?i.a.createElement(s.b,{accessibilityRole:"heading",align:"left",size:"title4",style:k.flexGrow,weight:"bold",withHashflags:!0},e):null})),o()(this,"_renderBodyText",(()=>{const{subtext:e}=this.props;return e?i.a.createElement(s.b,{align:"left",color:"gray700",style:this.styles.body,withHashflags:!0},e):null})),o()(this,"_renderAction",(({action:e,buttonSize:t,buttonType:n,style:r,testID:o})=>{const{secondaryAction:a}=this.props,{link:c,onClick:s,text:l}=e;return i.a.createElement(h.a,{style:[this.styles.actionContainer,r,{justifyContent:"flex-start"}],testID:o},i.a.createElement(d.a,{link:c,onPress:s,size:t,style:{width:a?"100%":"auto"},type:n},l))}))}render(){const{image:e,primaryAction:t,rightControl:n,secondaryAction:r,shouldRenderBorder:o}=this.props;return i.a.createElement(h.a,{style:o?[C.root,C.rootMargin]:k.root},i.a.createElement(i.a.Fragment,null,e?this._renderImage(e):null,i.a.createElement(h.a,{style:this.styles.rootPadding,testID:m},this._renderTitle(),this._renderBodyText(),t?this._renderAction({action:t,buttonType:"primaryFilled",style:this.styles.primaryAction,buttonSize:"large",testID:u}):null,r?this._renderAction({action:r,buttonType:"primaryOutlined",style:this.styles.secondaryAction,buttonSize:"large",testID:y}):null)),n?i.a.createElement(h.a,{style:k.rightControl},n):null)}get styles(){return this.props.isCompact?v:E}}o()(b,"defaultProps",{shouldRenderBorder:!1});const k=p.a.create((e=>({root:{backgroundColor:e.colors.cellBackground},flexGrow:{flexGrow:1},centeredImage:{display:"flex",flexDirection:"row",justifyContent:"center"},rightControl:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical,position:"absolute",right:0,top:0}}))),C=p.a.create((e=>({root:{borderColor:e.colors.nestedBorderColor,borderWidth:e.borderWidths.small,borderRadius:e.borderRadii.xLarge,overflow:"hidden"},rootMargin:{marginLeft:e.spaces.space16,marginRight:e.spaces.space16}}))),E=p.a.create((e=>({rootPadding:{padding:e.spaces.space32},body:{marginTop:e.spaces.space8},actionContainer:{flexDirection:"row"},primaryAction:{marginTop:e.spaces.space28},secondaryAction:{marginTop:e.spaces.space16}}))),v=p.a.create((e=>({rootPadding:{padding:e.spaces.space16},body:{marginTop:e.spaces.space2},actionContainer:{flexDirection:"row"},primaryAction:{marginTop:e.spaces.space4},secondaryAction:{marginTop:e.spaces.space2}})))},RoyM:function(e,t,n){"use strict";var r=n("ERkP"),o=n.n(r),a=n("zb92");var i=Object(a.a)({loader:()=>n.e(170).then(n.bind(null,"ACNv"))}),c=n("4bW+"),s=n("IG7M"),l=n("rHpw"),d=n("Irs7");const p=l.a.create((e=>({curationControl:{marginStart:e.spaces.space20}})));t.a=Object(d.a)((e=>{const{analytics:t,feedbackItems:n,isDisplayedOnMedia:r}=e;if(n&&n.length>0){const e=e=>o.a.createElement(i,{actionItems:n,onClose:e}),a=()=>t.scribe({element:"caret",action:"click"});return o.a.createElement(s.a,{onClick:a,renderActionMenu:e,style:p.curationControl,testID:c.a.caret,withDarkBackground:r})}return null}))},"X3+4":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ERkP"),o=n.n(r),a=n("fs1G");const i=o.a.createContext({handleNextSlide:a.a})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.MessageHandler.019ec475.js.map