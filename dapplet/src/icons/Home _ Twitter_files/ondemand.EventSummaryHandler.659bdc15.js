(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{"0mK8":function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return h}));var r=a("ERkP"),n=a.n(r),o=a("MWbm"),i=a("GcQN"),s=a("PU7B"),c=a("/WPq"),l=a("78ol"),d=a("jV+4"),m=a("rHpw");const p=({author:e,color:t="normal",size:a="subtext2",style:r,withHoverCard:o=!0,withLink:i=!1,withScreenName:s=!1})=>n.a.createElement(d.a,{avatarSize:{subtext2:"small",body:"medium",headline1:"large"}[a],color:t,isProtected:e.protected,isVerified:e.verified,name:e.name,nameSize:a,profileImageUrl:e.profile_image_url_https,screenName:e.screen_name,screenNameSize:a,style:[g.authorUserName,r],withHoverCard:o,withLink:i,withScreenName:s}),u=({style:e})=>n.a.createElement(o.a,{style:[g.lightningBadge,e]},n.a.createElement(i.a,{style:g.lightningIcon})),h=({icon:e})=>n.a.createElement(o.a,{style:g.placeholderIconContainer},"news"===e?n.a.createElement(s.a,{style:g.placeholderIcon}):"lists"===e?n.a.createElement(c.a,{style:g.placeholderIcon}):n.a.createElement(l.a,{style:g.placeholderIcon})),g=m.a.create((e=>({authorUserName:{alignItems:"center"},lightningBadge:{backgroundColor:"rgba(0, 0, 0, 0.6)",borderRadius:e.borderRadii.small,position:"absolute"},lightningIcon:{boxSizing:"border-box",color:e.colors.white,height:e.spaces.space20,paddingVertical:"0.25rem",paddingHorizontal:"0.2rem"},middot:{paddingHorizontal:e.spaces.space4},placeholderIcon:{color:e.colors.gray700,height:"2em"},placeholderIconContainer:{alignItems:"center",borderWidth:e.borderWidths.small,borderStyle:"solid",borderColor:e.colors.borderColor,borderRadius:e.borderRadii.xLarge,backgroundColor:e.colors.gray0,height:"100%",justifyContent:"center"}})))},"3fah":function(e,t,a){"use strict";var r=a("ezF+"),n=a("6rlp"),o=a("ERkP"),i=a.n(o),s=a("wtjx"),c=a("VPAj"),l=a("0KEI"),d=a("RoyM"),m=a("k+3s"),p=a("x5Pi"),u=a("Fg8X"),h=a("caTy"),g=a("cFuS"),b=a("zh9S"),C=a("Rp9C"),y=a("P1r1"),S=a("X04g"),v=a("Zejx"),E=a("XOJV"),f=a("G6rE");t.a=({component:e,errorContext:t,getDisplayTypeSpecificProps:a,shouldStoreTypeaheadItem:o})=>r.g({isFocusable:Object(c.a)(!0),component:e,bindActions:({module:e})=>({logTrend:n.c,saveAsRecentSearch:s.a,scribe:b.c,createLocalApiErrorHandler:Object(l.createLocalApiErrorHandlerWithContextFactory)(t)}),selectData:({entry:e})=>{var t,a,r,n,o,i;const{content:s}=e,c=null===(t=s.media)||void 0===t||null===(a=t.mediaEntity)||void 0===a||null===(r=a.tweetMedia)||void 0===r?void 0:r.tweetId,l=null===(n=s.media)||void 0===n||null===(o=n.mediaEntity)||void 0===o||null===(i=o.tweetMedia)||void 0===i?void 0:i.momentId,d=s.socialContext&&s.socialContext.topicContext&&s.socialContext.topicContext.topicId;return{advertiser:e=>s.promotedMetadata?f.e.select(e,s.promotedMetadata.advertiserId):void 0,dataSaverMode:y.k,publisher:e=>s.publisherId?f.e.select(e,s.publisherId):void 0,tweet:e=>c?E.a.select(e,c):void 0,moment:e=>u.a.select(e,l),topic:e=>d?v.a.select(e,d):void 0}},createProps:({actions:{createLocalApiErrorHandler:e,logTrend:t,saveAsRecentSearch:r,scribe:n},data:{advertiser:s,dataSaverMode:c,moment:l,publisher:u,topic:b,tweet:C},entry:y,feedbackItems:S,scribeData:v,scribeNamespace:E})=>{const{content:f}=y,{groupedTrends:w,promotedMetadata:x,richContext:T}=f,I=f.url&&Object(h.b)(f.url),k=f.displayType===m.a.CellWithProminentSocialContext,_=Object(p.d)({isCellWithProminentSocialContext:k,socialContext:f.socialContext,topic:b}),P=(w||[]).map((e=>({name:e.name,link:Object(h.b)(e.url)})));return{...a({eventSummary:f,tweet:C,moment:l,scribe:n,scribeNamespace:E,entry:y,dataSaverMode:c,saveAsRecentSearch:r,shouldStoreTypeaheadItem:o}),badge:f.badge,groupedTrends:P,promotedContent:x?{advertiser:{id_str:x.advertiserId},advertiser_name:s?s.name:null,impression_id:x.impressionId,disclosure_type:"NoDisclosure"}:void 0,promotedTrendDescription:x?x.promotedTrendDescription:void 0,publisher:u,socialContext:_,supportingText:f.supportingText,timeString:f.timeString,link:I,curationMenu:i.a.createElement(d.a,{feedbackItems:S,isDisplayedOnMedia:!("Hero"!==y.content.displayType||"eventSummary"!==y.type)}),onClick:()=>{n({...E,action:"click"},v),x&&x.promotedTrendId&&t({promoted_trend_id:x.promotedTrendId,impression_id:x.impressionId,event:g.d.SPOTLIGHT_CLICK}).catch(e())},title:f.title,topic:b,richContext:T}},getScribeDataItem:e=>(e=>{const{promotedMetadata:t}=e.content,a=e.content.id,r={item_type:S.a.ItemType.EVENT,event_details:{event_id:a},...C.a.getAllSurfaceDetails(e.itemMetadata.clientEventInfo)};return t&&(r.disclosure_type=t.disclosureType,r.promoted_id=t.impressionId),r})(e),onImpression:({actions:{createLocalApiErrorHandler:e,logTrend:t,scribe:a},entry:r,scribeData:n,scribeNamespace:o})=>{const{promotedMetadata:i}=r.content;a({...o,action:"impression"},n),i&&i.promotedTrendId&&t({promoted_trend_id:i.promotedTrendId,impression_id:i.impressionId,event:g.d.SPOTLIGHT_IMPRESSION}).catch(e())}})},"8qIq":function(e,t,a){"use strict";a.r(t);var r=a("3fah"),n=a("ERkP"),o=a.n(n),i=a("xZmF"),s=a("rH47"),c=a("PbbS"),l=a("LWCC"),d=a("9B+1"),m=a("8bWS"),p=a("caTy"),u=a("3IPs"),h=a("qbku"),g=a("X04g"),b=a("MWbm"),C=a("hxu0"),y=a("PbQQ"),S=a("htQn"),v=a("5mJL"),E=a("21zW"),f=a("rHpw");const w=({socialContext:e,topic:t})=>{const{contextType:a,landingUrl:r,text:n,topicContext:i}=e,s=i&&Object(m.c)(i),u=t&&o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{style:x.topicMiddot}),o.a.createElement(l.a,{isTransparent:!0,size:"smallCompact",textMode:c.a.FollowTopic,topic:t}));return o.a.createElement(h.a,{contextType:a,link:r?Object(p.b)(r):void 0,rightControl:s?u:void 0,text:n,topicData:t&&i?Object(d.a)(i):void 0,weight:"bold",withLeftPadding:!1})},x=f.a.create((e=>({details:{flex:1,marginRight:e.spaces.space12},topicMiddot:{alignSelf:"center",paddingRight:0},rootLink:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},row:{flexDirection:"row"},socialContextRow:{justifyContent:"space-between",marginBottom:e.spaces.space4}})));var T=Object(C.a)((e=>{const{badge:t,curationMenu:a,dataSaverMode:r,groupedTrends:n,hasProminentSocialContext:c,id:l,image:d,isInSidebar:m,link:p,onClick:h,publisher:C,richContext:E,saveAsRecentSearch:f,scoreEvent:T,shouldStoreTypeaheadItem:I,socialContext:k,supportingText:_,timeString:P,title:M,topic:R}=e,O=()=>{h(),f&&I&&I(g.a.ItemType.EVENT)&&f({event:{id:l,image:d||{url:"",height:0,width:0},supportText:_,title:M,type:u.a.Event}})};return o.a.createElement(y.a.Consumer,null,(e=>o.a.createElement(S.a,{link:e.withAnchorless(p),onClick:O,style:x.rootLink,withDarkerInteractiveBackground:m},c&&k?o.a.createElement(v.a,{rightControl:a||null,style:x.socialContextRow},w({socialContext:k,topic:R})):null,o.a.createElement(b.a,{style:x.row},o.a.createElement(s.a,{badge:t,groupedTrends:n,hasProminentSocialContext:c,publisher:C,richContext:E,scoreEvent:T,style:x.details,supportingText:_,timeString:P,title:M}),o.a.createElement(i.a,{dataSaverMode:r,icon:"news",image:d,isCellWithProminentSocialContext:c,scoreEvent:T,type:c?"fixed":void 0})))))}));const I=e=>({id:e.eventSummary.id,image:e.eventSummary.image,dataSaverMode:e.dataSaverMode,saveAsRecentSearch:e.saveAsRecentSearch,shouldStoreTypeaheadItem:e.shouldStoreTypeaheadItem}),k=e=>{const{category:t,eventState:a,gameClock:r,gameClockPeriod:n,participants:o,startTimeMillis:i,winnerId:s}=e.eventSummary.scoreEvent||{};return{...I(e),hasProminentSocialContext:!0,scoreEvent:e.eventSummary.scoreEvent?{category:t,eventState:a,gameClock:r,gameClockPeriod:n,startTimeMillis:i,participants:o,winnerId:s}:void 0}};t.default=({errorContext:e,hasProminentSocialContext:t=!1,shouldStoreTypeaheadItem:a})=>{let n=I;return t&&(n=k),Object(r.a)({component:T,shouldStoreTypeaheadItem:a,getDisplayTypeSpecificProps:n,errorContext:e})}},GliE:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("ajvb"),n=a("3XMw"),o=a.n(n),i=a("qB1G");const s=o.a.a3484d21,c=o.a.aab2efa8,l=o.a.ba21c289,d=e=>`${e.fullName||""} ${e.score||""}`,m=(e,t,a,n,o)=>{const m=a&&o?((e,t)=>e&&t?e.find((e=>e.id===t)):void 0)(a,o):void 0,p=Object(r.a)(t),u=e||"",h=a&&a[0]?d(a[0]):"",g=a&&a[1]?d(a[1]):"",b=n||"",C=m?c({winner:m.fullName}):"",y=t===i.a.Completed?m?C:s:b;return l({gameCategory:u,gameState:p,accessibleGameClockPeriod:y,teamOneLabel:h,teamTwoLabel:g})}},IJsT:function(e,t,a){"use strict";var r=a("ERkP"),n=a.n(r),o=a("cm6r"),i=a("rHpw"),s=a("MWbm");const c=e=>{const{accessibilityLabel:t,containerStyle:a,isCompact:r,link:i,lower:c,onClick:d,stackLayoutLowerStyle:m,stackLayoutUpperStyle:p,upper:u,withInteractiveStyling:h}=e,g=n.a.createElement(n.a.Fragment,null,n.a.createElement(s.a,{style:[l.defaultUpperContainerStyle,p,r&&{height:"auto"}]},u),c?n.a.createElement(s.a,{style:[l.defaultLowerContainerStyle,m]},c):null);return n.a.createElement(o.a,{accessibilityLabel:t,interactive:h,link:i,onClick:d,style:[l.root,a]},g)};c.defaultProps={withInteractiveStyling:!1};const l=i.a.create((e=>({root:{padding:e.spaces.space12,borderRadius:e.borderRadii.large},defaultLowerContainerStyle:{marginTop:e.spaces.space12,justifyContent:"flex-end"},defaultUpperContainerStyle:{height:`calc(${e.spaces.space48}*2)`,overflow:"hidden",borderRadius:e.borderRadii.large}})));t.a=c},Nxr7:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var r=a("KEM+"),n=a.n(r),o=a("ERkP"),i=a.n(o),s=a("t62R");const c=864e5;var l=a("3XMw"),d=a.n(l),m=a("pjBI"),p=a("gmfB");const u=d.a.ccaa970e,h=d.a.d725a288,g=d.a.db355331,b=d.a.a8428d5e,C=d.a.a7aad8b9,y=d.a.e431f1aa,S=d.a.a7391707,v=d.a.d2dbfa91,E=d.a.cd734f65,f=d.a.c8891d06;class w extends i.a.Component{constructor(...e){super(...e),n()(this,"_renderCategory",(()=>{const{category:e}=this.props;return e?i.a.createElement(s.b,{align:"left",numberOfLines:1,size:"subtext2",weight:"bold"},e):null})),n()(this,"_renderGameScheduledDateTime",(()=>{const{startTimeMillis:e}=this.props;if(e){const t=new Date(parseInt(e,10)),a=(e=>{const t=(new Date).setHours(0,0,0,0),a=t+c;return e>=t&&e<a?0:e>=a&&e<t+1728e5?1:-1})(t);return-1===a?this._renderDateTime(t):this._renderTodayTomorrow(a,t)}return null})),n()(this,"_renderTodayTomorrow",((e,t)=>{const a=h(t);return i.a.createElement(m.a,null,i.a.createElement(s.b,{color:"gray700",size:"subtext2",weight:"bold"},0===e?E:f),i.a.createElement(s.b,{color:"gray700",size:"subtext2"},a))})),n()(this,"_renderDateTime",(e=>{const t=h(e),a=u(e);return i.a.createElement(m.a,null,i.a.createElement(s.b,{color:"gray700",size:"subtext2",weight:"bold"},a),i.a.createElement(s.b,{color:"gray700",size:"subtext2"},t))})),n()(this,"_renderGameStateValue",((e,t)=>{const{gameClockPeriod:a}=this.props,r=this._getWinnerName(),n=e&&r?g({team:r}):t&&a?a:void 0;return n?i.a.createElement(s.b,{color:"gray700",numberOfLines:1,size:"subtext2"},n):null})),n()(this,"_getWinnerName",(()=>{const{teams:e,winnerId:t}=this.props,a=e&&e.find((e=>e.id===t));return a&&a.shortName}))}render(){const{gameState:e,withCategory:t}=this.props,a=e===p.a.Scheduled,r=e===p.a.InProgress,n=e===p.a.Completed;return i.a.createElement(i.a.Fragment,null,a?this._renderGameScheduledDateTime():i.a.createElement(m.a,null,i.a.createElement(s.b,{color:r?"magenta500":"gray700",numberOfLines:1,size:"subtext2",weight:"bold"},(e=>{switch(e){case p.a.Scheduled:return b;case p.a.InProgress:return C;case p.a.Completed:return y;case p.a.Postponed:return S;case p.a.Cancelled:return v;default:return null}})(e)),this._renderGameStateValue(n,r)),t?this._renderCategory():null)}}n()(w,"defaultProps",{withCategory:!0})},RoyM:function(e,t,a){"use strict";var r=a("ERkP"),n=a.n(r),o=a("zb92");var i=Object(o.a)({loader:()=>a.e(170).then(a.bind(null,"ACNv"))}),s=a("4bW+"),c=a("IG7M"),l=a("rHpw"),d=a("Irs7");const m=l.a.create((e=>({curationControl:{marginStart:e.spaces.space20}})));t.a=Object(d.a)((e=>{const{analytics:t,feedbackItems:a,isDisplayedOnMedia:r}=e;if(a&&a.length>0){const e=e=>n.a.createElement(i,{actionItems:a,onClose:e}),o=()=>t.scribe({element:"caret",action:"click"});return n.a.createElement(c.a,{onClick:o,renderActionMenu:e,style:m.curationControl,testID:s.a.caret,withDarkBackground:r})}return null}))},ajvb:function(e,t,a){"use strict";var r=a("3XMw"),n=a.n(r),o=a("qB1G");const i=n.a.f178e38c,s=n.a.b6da6b01,c=n.a.i9f615c8,l=n.a.f897267a,d=n.a.f93c4b69;t.a=e=>{switch(e){case o.a.Scheduled:return i;case o.a.InProgress:return s;case o.a.Completed:return c;case o.a.Postponed:return l;case o.a.Cancelled:return d;default:return""}}},gmfB:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=Object.freeze({Scheduled:"Scheduled",InProgress:"InProgress",Completed:"Completed",Postponed:"Postponed",Cancelled:"Cancelled",Unused6:"_Unused6",Unused7:"_Unused7"})},hxu0:function(e,t,a){"use strict";var r=a("97Jx"),n=a.n(r),o=a("ERkP"),i=a.n(o),s=a("vqbU");t.a=e=>t=>i.a.createElement(s.a.Consumer,null,(a=>i.a.createElement(e,n()({},t,{isInSidebar:a}))))},jUPy:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var r=a("KEM+"),n=a.n(r),o=a("ERkP"),i=a.n(o),s=a("IJsT"),c=a("Nxr7"),l=a("TIdA"),d=a("t62R"),m=a("A91F"),p=a("gmfB"),u=a("rHpw"),h=a("MWbm");const g=Object.freeze({SCORE:"score",SECONDARY_SCORE:"secondaryScore"});class b extends i.a.Component{constructor(...e){super(...e),n()(this,"state",{imageError:!1}),n()(this,"_renderTeamName",(()=>{const{team:{shortName:e}}=this.props;return i.a.createElement(h.a,{style:C.teamNameContainer},i.a.createElement(d.b,{color:"white",numberOfLines:1,weight:"heavy"},e))})),n()(this,"_renderImage",(()=>{const{isCompact:e,team:{imageUrl:t,logo:a}}=this.props,{imageError:r}=this.state,n=!a&&!t||r?C.translucent:{},o=a?m.a.exact(a.width/a.height):m.a.SQUARE;return i.a.createElement(h.a,{style:[C.imageContainer,n,e&&C.compactImageContainer]},i.a.createElement(l.a,{accessibilityLabel:"",aspectMode:o,image:a||t||"",onError:this._handleImageError,rounded:!a}))})),n()(this,"_handleImageError",(()=>{this.setState({imageError:!0})})),n()(this,"_renderScore",(()=>{const{gameState:e,team:t,winnerId:a}=this.props,{id:r,score:n,secondaryScore:o}=t,s=r===a,c=!a,l=e===p.a.Completed&&!s&&!c,m=this._shouldRenderScore(),u=this._getTeamScoreSize(g.SCORE),b=o?this._getTeamScoreSize(g.SECONDARY_SCORE):void 0;return m?i.a.createElement(h.a,{style:[C.teamScore,l&&C.losingTeamScore]},i.a.createElement(d.b,{color:"white",numberOfLines:1,size:u,weight:"heavy"},n),o?i.a.createElement(d.b,{color:"white",numberOfLines:1,size:b,weight:"bold"},o):null):null})),n()(this,"_getTeamScoreSize",(e=>{const{isCompact:t,team:{secondaryScore:a}}=this.props;if(!!!a)return t?"headline1":"title4";switch(e){case g.SCORE:return t?"subtext2":"headline1";case g.SECONDARY_SCORE:return t?"subtext3":"body";default:return}})),n()(this,"_shouldRenderScore",(()=>{const{gameState:e}=this.props;return e===p.a.Completed||e===p.a.InProgress}))}render(){const{fallbackColor:e,isCompact:t,team:{color:a}}=this.props,r={backgroundColor:a&&`rgb(${a.red}, ${a.green}, ${a.blue})`||u.a.theme.colors[e]},n=this._shouldRenderScore(),o=!t||!n;return i.a.createElement(h.a,{style:[C.root,r,t&&C.compactRoot]},this._renderImage(),o?this._renderTeamName():null,this._renderScore())}}n()(b,"defaultProps",{isCompact:!1});const C=u.a.create((e=>({root:{flexDirection:"row",height:e.spaces.space48,paddingHorizontal:e.spaces.space12},imageContainer:{alignSelf:"center",width:e.spaces.space32,marginRight:e.spaces.space12},compactImageContainer:{width:e.spaces.space20},compactRoot:{height:`calc(${e.spaces.space48} - (${u.a.theme.spaces.space1} + ${u.a.theme.spaces.space2}))`},losingTeamScore:{opacity:.5},teamNameContainer:{alignSelf:"center"},teamScore:{flexGrow:2,alignItems:"flex-end",alignSelf:"center"},translucent:{borderRadius:e.borderRadii.infinite,backgroundColor:e.colors.white,opacity:.4}})));var y=b;class S extends i.a.Component{constructor(...e){super(...e),n()(this,"_renderGameStatus",(()=>{const{category:e,gameClock:t,gameClockPeriod:a,gameState:r,isCompact:n,startTimeMillis:o,teams:s,winnerId:l}=this.props;return i.a.createElement(c.a,{category:e,gameClock:t,gameClockPeriod:a,gameState:r,startTimeMillis:o,teams:s,winnerId:l,withCategory:!n})})),n()(this,"_renderTeamRow",((e,t)=>{const{gameState:a,isCompact:r,winnerId:n}=this.props,{id:o}=e;return i.a.createElement(y,{fallbackColor:t%2==0?"gray300":"gray700",gameState:a,isCompact:r,key:o,team:e,winnerId:n})}))}render(){const{accessibilityLabel:e,containerStyle:t,isCompact:a,link:r,onClick:n,teams:o}=this.props;if(o){const c=o&&o.map(this._renderTeamRow);return i.a.createElement(s.a,{accessibilityLabel:e,containerStyle:t,isCompact:a,link:r,lower:a?void 0:this._renderGameStatus(),onClick:n,upper:c,withInteractiveStyling:!0})}return null}}n()(S,"defaultProps",{isCompact:!1})},"m5t/":function(e,t,a){"use strict";a.r(t);var r=a("3fah"),n=a("ERkP"),o=a.n(n),i=a("rH47"),s=a("97Jx"),c=a.n(s),l=a("prG5"),d=a("Modb"),m=a("lklz"),p=a("MWbm"),u=a("rHpw"),h=a("9Xij"),g=a("XrEN"),b=a("3dad"),C=a("A91F");const y={red:0,green:0,blue:0};class S extends o.a.Component{render(){const e=u.a.theme.aspectRatios.landscape;return o.a.createElement(h.a,{ratio:e},o.a.createElement(p.a,{style:[v.maxHeightWidth,this._getBackgroundColorStyle()]},this._renderCover()),o.a.createElement(p.a,{style:[u.a.absoluteFill,this._getGradientColorStyle()]}))}_renderCover(){const{coverMediaFromTweet:e,image:t,promotedContent:a,tweetId:r}=this.props;if(r&&e&&"photo"!==e.type){const t=g.a.extractVideoProps(m.b.forTweet(r),e),n={objectFitVideo:"cover",hideLeftBadges:!0,hidePosterImage:!0};return o.a.createElement(d.a,c()({},t,{aspectRatio:u.a.theme.aspectRatios.landscape,displayOptions:n,forceLoop:!0,hideDataSaverAcceptOverlay:!0,hidePreviewPlayButton:!0,promotedContent:a,showControls:!1}))}if(e){const t=e.ext_alt_text||"",a=b.a.getOriginalImage(e);return this._renderCoverImage(a,t)}return this._renderCoverImage(t)}_renderCoverImage(e,t=""){return e?o.a.createElement(l.a,{accessibilityLabel:t,aspectMode:C.a.exact(u.a.theme.aspectRatios.landscape),cropCandidates:this._getCropCandidates(),hideAcceptOverlay:!0,image:e}):null}_getBackgroundColorStyle(){const e=this._getDominantColor();return{backgroundColor:e?`rgb(${e.red},${e.green},${e.blue})`:u.a.theme.colors.primary}}_getGradientColorStyle(){return{backgroundImage:`linear-gradient(transparent 0%, transparent 25%, ${`rgba(${y.red},${y.green},${y.blue}, 0.70)`} 75%, ${`rgba(${y.red},${y.green},${y.blue}, 0.80)`} 100%)`}}_getCropCandidates(){const{coverMediaFromTweet:e,manualCrops:t}=this.props;return t||e&&b.a.getCropCandidates(e)}_getDominantColor(){const{coverMediaFromTweet:e}=this.props;return e&&b.a.getBackgroundColor(e)}}const v=u.a.create((e=>({maxHeightWidth:{height:"100%",width:"100%"}})));var E="eventHero",f=a("PbQQ"),w=a("cm6r");const x="white";class T extends o.a.Component{componentDidMount(){const{onImpression:e}=this.props;e&&e()}render(){const{badge:e,coverMediaFromTweet:t,curationMenu:a,groupedTrends:r,image:n,link:s,manualCrops:c,onClick:l,promotedContent:d,promotedTrendDescription:m,publisher:h,richContext:g,supportingText:b,timeString:C,title:y,tweetId:v}=this.props,T=y.length>80?"headline1":"title4";return o.a.createElement(f.a.Consumer,null,(f=>o.a.createElement(o.a.Fragment,null,o.a.createElement(w.a,{link:f.withAnchorless(s),onClick:l,testID:E},o.a.createElement(S,{coverMediaFromTweet:t,image:n,manualCrops:c,promotedContent:d,tweetId:v}),o.a.createElement(p.a,{style:[u.a.absoluteFill,I.details]},o.a.createElement(i.a,{badge:e,groupedTrends:r,linkColor:x,promotedContent:d,promotedTrendDescription:m,publisher:h,publisherTitleColor:x,richContext:g,shouldTruncateTitle:!0,supportingText:b,textColor:x,timeString:C,title:y,titleFontSize:T,titleWeight:"heavy"}))),a?o.a.createElement(p.a,{style:I.menuContainer},a):null)))}}const I=u.a.create((e=>({coverContainer:{width:"100%"},menuContainer:{position:"absolute",top:e.spaces.space12,right:e.spaces.space16},details:{justifyContent:"flex-end",paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical}})));var k=T,_=a("29/U");const P=({eventSummary:e,tweet:t})=>{if(t){var a,r;const n=null===(a=e.media)||void 0===a||null===(r=a.mediaKey)||void 0===r?void 0:r.id;return t.extended_entities&&t.extended_entities.media&&t.extended_entities.media.find((e=>e.id_str===n))}},M=e=>{return{coverMediaFromTweet:P(e),image:(t=e.eventSummary,null!==(a=t.media)&&void 0!==a&&null!==(r=a.mediaEntity)&&void 0!==r&&r.image?t.media.mediaEntity.image:t.image),manualCrops:Object(_.f)(e.moment),tweetId:e.tweet&&e.tweet.id_str};var t,a,r};t.default=({errorContext:e})=>Object(r.a)({component:k,getDisplayTypeSpecificProps:M,errorContext:e})},prG5:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a("97Jx"),n=a.n(r),o=a("KEM+"),i=a.n(o),s=a("ERkP"),c=a.n(s),l=a("nT9l"),d=a("3XMw"),m=a.n(d),p="image",u=a("TIdA"),h=a("a6qo");const g=m.a.f93bb3ee;class b extends c.a.Component{constructor(...e){super(...e),i()(this,"_renderContent",(({resourceSelectionHandler:e,useMinimumData:t})=>{const{accessibilityLabel:a,hideAcceptOverlay:r,shouldShowAltLabel:o,...i}=this.props;return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,n()({},i,{accessibilityLabel:a,onVariantSelection:e,previewMode:t,testID:p})),o?c.a.createElement(h.a,{align:"left",altLabel:a}):null)}))}render(){const{hideAcceptOverlay:e,image:t}=this.props;return c.a.createElement(l.a,{acceptLabel:g,hideAcceptOverlay:e,renderContent:this._renderContent,resourceId:"string"==typeof t?t:t.url})}}},qB1G:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r=Object.freeze({Scheduled:"Scheduled",InProgress:"InProgress",Completed:"Completed",Postponed:"Postponed",Cancelled:"Cancelled",Unused6:"_Unused6",Unused7:"_Unused7"})},rH47:function(e,t,a){"use strict";a("MvUL");var r=a("0mK8"),n=a("ERkP"),o=a.n(n),i=a("rcen"),s=a("MWbm"),c=a("pjBI"),l=a("t62R"),d=a("tg+X"),m=a("e5HP"),p=a("jV+4"),u=a("Nxr7"),h=a("Wms4"),g=a("rHpw");const b=/[\u0600-\u06FF]|[\u0750-\u077F]|[\u0590-\u05FF]|[\uFE70-\uFEFF]/gm,C=({badge:e,publisher:t,textColor:a,timeString:r})=>{const n=o.a.createElement(p.a,{isProtected:t.protected,isVerified:t.verified,name:t.name,nameSize:"subtext2",profileImageUrl:t.profile_image_url_https});return o.a.createElement(c.a,{style:v.publisherRow},n,S(r,e,a))},y=e=>{const{category:t,eventState:a,gameClock:r,gameClockPeriod:n,participants:i,startTimeMillis:s,winnerId:c}=e;return o.a.createElement(u.a,{category:t,gameClock:r,gameClockPeriod:n,gameState:a,startTimeMillis:s,teams:i,winnerId:c,withCategory:!1})},S=(e,t,a)=>t&&t.text?o.a.createElement(h.a,{type:"live"},t.text):e?o.a.createElement(s.a,{style:v.timestamp},o.a.createElement(l.b,{color:a,numberOfLines:1,size:"subtext2"},e)):null,v=g.a.create((e=>({aboveTitle:{alignItems:"center",flexDirection:"row"},belowTitle:{marginTop:e.spaces.space4},promotedIndicator:{marginTop:e.spaces.space12},publisherRow:{alignItems:"center"},timestamp:{maxWidth:"50%"},title:{marginVertical:e.spaces.space2}})));t.a=({badge:e,groupedTrends:t,hasProminentSocialContext:a,linkColor:n,promotedContent:p,promotedTrendDescription:u,publisher:h,publisherTitleColor:g="normal",richContext:E,scoreEvent:f,shouldTruncateTitle:w,style:x,supportingText:T,textColor:I="gray700",timeString:k,title:_,titleFontSize:P="body",titleWeight:M="bold"})=>{const R=_.replace("#","").charAt(0).match(b)?"rtl":"ltr",O=a?void 0:v.title;return o.a.createElement(s.a,{style:x},a?null:o.a.createElement(c.a,{color:I,style:v.aboveTitle},T?o.a.createElement(l.b,{color:I,numberOfLines:1,size:"subtext2"},T):null,h?o.a.createElement(r.a,{author:h,color:g,size:"subtext2"}):null,e||k?S(k,e,I):null),o.a.createElement(l.b,{color:g,dir:R,numberOfLines:w?3:void 0,size:P,style:O,weight:M,withHashflags:!0},_),o.a.createElement(d.a,{groupedTrends:t,linkColor:n,textColor:I}),a?o.a.createElement(s.a,{style:v.belowTitle},f?y(f):(e||k)&&h?C({badge:e,publisher:h,textColor:I,timeString:k})||S(k,e,I):null):null,p&&p.advertiser?o.a.createElement(o.a.Fragment,null,o.a.createElement(l.b,{color:I},u),o.a.createElement(m.a,{color:"white",promotedContent:p,style:v.promotedIndicator})):null,E?o.a.createElement(i.a,{color:I,entities:E.entities,rtl:E.rtl,size:"subtext2",text:E.text}):null)}},"tg+X":function(e,t,a){"use strict";var r=a("ERkP"),n=a.n(r),o=a("t62R"),i=a("3XMw"),s=a.n(i),c=a("rHpw");const l=({groupedTrends:e,linkColor:t,textColor:a})=>{const r=d(e,t);return r?n.a.createElement(o.b,{color:a,numberOfLines:2,size:"subtext2",style:h.root},r):null};l.defaultProps={textColor:"gray700"};const d=(e,t)=>e.length>=2?p(e,t):1===e.length?m(e[0],t):null,m=(e,t)=>n.a.createElement(s.a.I18NFormatMessage,{$i18n:"fe7c309b"},u(e,t,!0)),p=(e,t)=>n.a.createElement(s.a.I18NFormatMessage,{$i18n:"ea753bf4"},u(e[0],t,!0),u(e[1],t)),u=(e,t,a=!1)=>n.a.createElement(o.b,{color:t,link:e.link,size:"subtext2",style:a&&h.paddingLeft,withHashflags:!0},e.name),h=c.a.create((e=>({root:{marginTop:e.spaces.space4},paddingLeft:{paddingLeft:e.spaces.space2}})));t.a=l},xZmF:function(e,t,a){"use strict";var r=a("0mK8"),n=a("ERkP"),o=a.n(n),i=a("GliE"),s=a("YeIG"),c=a("MWbm"),l=a("TIdA"),d=a("A91F"),m=a("9Xij"),p=a("jUPy"),u=a("rHpw");const h=Object.freeze({Fixed:"fixed",Variable:"variable"}),g=e=>{const{cropCandidates:t,dataSaverMode:a,icon:n,image:i,isCellWithProminentSocialContext:p,scoreEvent:u,type:h}=e,g=C({isCellWithProminentSocialContext:p,type:h});return o.a.createElement(c.a,{style:[y.coverContainer,g]},u?b(u):!i||Object(s.a)(i)||a?a||Object(s.a)(i)?o.a.createElement(m.a,{ratio:1},o.a.createElement(r.c,{icon:n})):null:o.a.createElement(l.a,{accessibilityLabel:"",aspectMode:d.a.SQUARE,cropCandidates:t,image:i}))},b=e=>{const{category:t,eventState:a,gameClock:r,gameClockPeriod:n,participants:s,startTimeMillis:c,winnerId:l}=e,d=Object(i.a)(t,a,s,n,l);return o.a.createElement(p.a,{accessibilityLabel:d,category:t,containerStyle:y.scoreCardTile,gameClock:r,gameClockPeriod:n,gameState:a,isCompact:!0,startTimeMillis:c,teams:s,winnerId:l})},C=({isCellWithProminentSocialContext:e,type:t})=>{switch(t){case h.Fixed:return e&&y.fixedCellThumbnailWithProminentSocialContext||y.fixedCellThumbnail;case h.Variable:return y.variableCellThumbnail;default:return}};g.defaultProps={type:"variable"};const y=u.a.create((e=>({coverContainer:{borderRadius:e.borderRadii.large,overflow:"hidden"},fixedCellThumbnail:{height:u.a.theme.spaces.space48,width:u.a.theme.spaces.space48},fixedCellThumbnailWithProminentSocialContext:{height:`calc(${u.a.theme.spaces.space48} + ${u.a.theme.spaces.space40} + ${u.a.theme.spaces.space1} + ${u.a.theme.spaces.space2})`,width:`calc(${u.a.theme.spaces.space48} + ${u.a.theme.spaces.space40} + ${u.a.theme.spaces.space1} + ${u.a.theme.spaces.space2})`},scoreCardTile:{padding:0},variableCellThumbnail:{maxHeight:`calc(${u.a.theme.spaces.space48} * 2)`,maxWidth:`calc(${u.a.theme.spaces.space48} * 2)`,minHeight:`calc(${u.a.theme.spaces.space48} + ${u.a.theme.spaces.space20})`,minWidth:`calc(${u.a.theme.spaces.space48} + ${u.a.theme.spaces.space20})`,height:"15%",width:"15%"}})));t.a=g}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.EventSummaryHandler.659bdc15.js.map