(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{"1Ws7":function(e,t,a){"use strict";a.r(t);var n=a("ezF+"),s=a("VPAj"),i=a("97Jx"),c=a.n(i),o=a("ERkP"),r=a.n(o),l=a("1AUC"),d=a("sYiQ");const m=({entry:e,feedbackItems:t,module:a,shouldDisplayPin:n,...s})=>{const i=n?d.a.Pinning:void 0;return r.a.createElement(l.a,c()({isMember:e.content.isMember,listId:e.content.id,mode:i},s))};var p=r.a.memo(m),u=a("Rp9C");t.default=e=>n.b({component:p,isFocusable:Object(s.a)(!0),getScribeDataItem(e){const{id:t}=e.content;return u.a.forList(t)}}).getHandler((()=>e))},O4YN:function(e,t,a){"use strict";a.r(t);var n=a("ezF+"),s=a("VPAj"),i=a("ERkP"),c=a.n(i),o=a("xZmF"),r=a("iPch"),l=a("kHBp"),d=a("P1r1"),m=a("rxPX");const p=(e,t)=>t.entry.content.id,u=(e,t)=>l.a.select(e,p(0,t)),b=(e,t)=>r.h(e,p(0,t));var g=Object(m.a)().propsFromState((()=>({list:u,listId:p,dataSaverMode:d.k,media:b}))).adjustStateProps((({dataSaverMode:e,list:t,listId:a,media:n})=>({name:null==t?void 0:t.name,isPrivate:"private"===(null==t?void 0:t.mode),listId:a,dataSaverMode:e,media:n}))).withAnalytics(),v=a("3XMw"),k=a.n(v),P=a("a5gf"),f=a("2My+"),y=a("MWbm"),w=a("htQn"),h=a("t62R"),I=a("rHpw");const M=k.a.j681933d,S=e=>{const{analytics:t,dataSaverMode:a,isPrivate:n,listId:s,media:i,name:r}=e,l=`/i/lists/${s}`,d=c.a.useCallback((()=>{t.scribeAction("click")}),[t]);return c.a.createElement(f.a,{basePath:l,listId:s},c.a.createElement(w.a,{link:l,onPress:d,style:j.root},c.a.createElement(o.a,{cropCandidates:i.crop,dataSaverMode:a,icon:"lists",image:i.image}),c.a.createElement(y.a,{style:j.name},c.a.createElement(h.b,{align:"center",numberOfLines:1,size:"subtext2"},r?r.trim():null),n?c.a.createElement(P.a,{accessibilityLabel:M,style:j.iconLock}):null)))},j=I.a.create((e=>({root:{alignItems:"center",backgroundColor:e.colors.cellBackground,padding:e.spaces.space12},name:{alignSelf:"stretch",paddingTop:e.spaces.space4,flexDirection:"row",justifyContent:"center",width:e.spaces.space80},iconLock:{color:e.colors.text,marginHorizontal:e.spaces.space4}})));var E=g(c.a.memo(S)),C=a("Rp9C");const x=n.b({component:E,isFocusable:Object(s.a)(!0),getScribeDataItem(e){const{id:t}=e.content;return C.a.forList(t)},shouldDisplayBorder:Object(s.a)(!1)}).getHandler();t.default=x}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ListHandler.5fd74da5.js.map