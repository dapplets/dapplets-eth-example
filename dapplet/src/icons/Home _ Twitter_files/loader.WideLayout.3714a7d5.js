(window.webpackJsonp=window.webpackJsonp||[]).push([[185,202],{"0af8":function(e,t,o){"use strict";o.r(t),o.d(t,"roundToNearestDevicePixel",(function(){return u})),o.d(t,"default",(function(){return m}));var i=o("KEM+"),s=o.n(i),n=o("ERkP"),r=o.n(n),a=o("aITJ"),c=(o("aWzz"),o("v6aA")),l=o("jHwr"),d=o("rHpw"),h=o("i4Oy"),p=o("MWbm");const u=({cssPixels:e,dpr:t})=>Math.round(e*t)/t;class m extends r.a.PureComponent{constructor(e,t){super(e,t),s()(this,"_setContentRef",(e=>{this._contentNode=e})),s()(this,"_setContainerRef",(e=>{this._containerNode=e})),s()(this,"_handleProgrammaticScroll",(e=>{this._prevScrollY=(this._prevScrollY||0)+e,this.setState({contentOffset:Math.max(0,this.state.contentOffset+e)})})),s()(this,"_handleLayout",(e=>{const t=e.nativeEvent.layout.height>this.state.contentHeight;this._updatePositioning(t)})),this.state={stickyTop:!0,stickyThreshold:0,contentOffset:0,contentHeight:0,stickyOffset:0,position:"sticky"},this._scheduleUpdatePositioning=Object(l.a)(this._updatePositioning.bind(this),window.requestAnimationFrame)}UNSAFE_componentWillMount(){const{viewport:e}=this.context;this._removeProgrammaticScrollListener=e.addProgrammaticScrollListener(this._handleProgrammaticScroll)}componentDidMount(){const{viewport:e}=this.context;if(this._updatePositioning(),this._removeScrollListener=e.addScrollListener(this._scheduleUpdatePositioning),this._containerNode){const t=this._containerNode.getBoundingClientRect(),o=e.scrollY();this._prevScrollY=o,this.setState({stickyOffset:o+t.top})}}componentWillUnmount(){this._removeScrollListener&&this._removeScrollListener(),this._removeProgrammaticScrollListener&&this._removeProgrammaticScrollListener()}render(){const{contentOffset:e,position:t,stickyThreshold:o,stickyTop:i}=this.state,s=f[t],n=window.devicePixelRatio||1,a=u({cssPixels:o,dpr:n}),c=u({cssPixels:e,dpr:n}),l={top:i?`${a}px`:null,bottom:i?null:`${a}px`};return r.a.createElement(p.a,{ref:this._setContainerRef,style:[f.container,{minHeight:this.state.contentHeight}]},r.a.createElement(p.a,{style:{marginTop:`${c}px`}}),r.a.createElement(p.a,{onLayout:this._handleLayout,ref:this._setContentRef,style:[this.props.style,l,s]},this.props.children))}_updatePositioning(e=!1){if(!this._contentNode||!this._containerNode)return;const t=this.context.viewport.scrollY(),o=t-this._prevScrollY;if(Math.abs(o)<.5&&!e)return;const{distanceFromBottom:i}=this.props;this._prevScrollY=t;const s=!!this._contentNode&&this._contentNode.getBoundingClientRect(),n=!!this._containerNode&&this._containerNode.getBoundingClientRect();if(!s||!n)return;const{height:r}=h.a.get("window"),c=t+n.top,l=Math.max(s.top-n.top,0);if(r-s.height>c)this._updateState({stickyTop:!0,stickyThreshold:c,contentOffset:0,stickyOffset:c,contentHeight:s.height,position:"fixed"});else{const e=o>0,t=e!==this.state.stickyTop,n=window.devicePixelRatio||1,d=s.bottom-r+i<=1/n,h=c-s.top<=1/n;if((e&&d||!e&&h)&&a.b.isFirefox()){const e=i,t=c;this._updateState({position:"fixed",stickyOffset:c,stickyTop:h,stickyThreshold:h?t:e,contentOffset:l,contentHeight:s.height})}else{const o=r-s.height-i,n=r-s.height-c;this._updateState({position:"sticky",stickyTop:e,stickyOffset:c,stickyThreshold:e?o:n,contentOffset:t?l:this.state.contentOffset,contentHeight:s.height})}}}_updateState(e){const t=this.state.stickyTop!==e.stickyTop,o=this.state.stickyThreshold!==e.stickyThreshold,i=Math.abs(this.state.contentOffset-e.contentOffset)>.5,s=Math.abs(this.state.stickyOffset-e.stickyOffset)>.5,n=this.state.position!==e.position,r=this.state.contentHeight!==e.contentHeight;(t||o||i||s||n||r)&&this.setState(e)}}s()(m,"contextType",c.a),s()(m,"defaultProps",{distanceFromBottom:10});const f=d.a.create((e=>({container:{height:"100%"},sticky:{position:"sticky"},fixed:{position:"fixed"},static:{position:"static"}})))},"88ay":function(e,t,o){"use strict";o.d(t,"c",(function(){return H})),o.d(t,"e",(function(){return M})),o.d(t,"f",(function(){return B})),o.d(t,"d",(function(){return j})),o.d(t,"a",(function(){return q}));var i=o("KEM+"),s=o.n(i),n=o("97Jx"),r=o.n(n),a=o("ERkP"),c=o.n(a),l=o("6rlp"),d=o("zh9S"),h=o("G6rE"),p=o("rxPX"),u=o("0KEI");const m=(e,t)=>h.e.select(e,t.userId),f=(e,t)=>t.promotedContent;var _=Object(p.a)().propsFromState((()=>({promotedContent:f,user:m}))).adjustStateProps((({promotedContent:e,user:t})=>({promotedContent:e||(t?t.promoted_content:void 0),user:t}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(u.createLocalApiErrorHandlerWithContextFactory)("USER_CELL_CONTAINER"),log:l.a,scribeAction:d.c}))),y=o("I57f"),b=o("vMjK"),g=o("MWbm"),I=o("IG7M"),v=o("rHpw");const E=e=>{const{children:t,promotedContent:o,user:i}=e;return c.a.createElement(g.a,{style:w.decorationWrapper},t,c.a.createElement(I.a,{renderActionMenu:e=>c.a.createElement(b.b,{onClose:e,promotedContent:o,user:i,view:"follower"}),style:w.actionMenu}))},w=v.a.create((e=>({decorationWrapper:{flexDirection:"row"},actionMenu:{marginLeft:e.spaces.space12}})));var C=o("uIZp"),S=o("mN6z"),R=o("caTy"),k=o("3IPs"),O=o("Rp9C"),T=o("X04g"),L=o("Re5t"),U=o("TnY3"),x=o("hxu0"),A=o("v6aA"),N=o("7JQg"),P=o("IMA+"),D=o("cFuS");const F=e=>{const{user:t}=e;return t&&t.profile_image_url_https?c.a.createElement(W,r()({},e,{avatarUri:t.profile_image_url_https,description:t.description,entities:t.entities,followRequestReceived:t.follow_request_received,highlightedLabel:t.highlightedLabel,isAutoblocking:t.smart_blocking,isBlockedBy:t.blocked_by,isBlocking:t.blocking,isDeviceFollowing:t.notifications,isFollowedBy:t.followed_by,isFollowing:t.following,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,user:t,withheldDescription:t.withheld_description,withheldEntities:t.withheld_entities})):null};F.defaultProps={cellClickable:!0,decoration:null,displayMode:L.a.UserCompact,followRequestReceived:!1,hideBlocked:!1,promotedItemType:D.c.USER,shouldScribeProfileClick:!0,shouldScribeImpression:!1,withFollowsYou:!1};const H=({isDeviceFollowing:e,userId:t})=>c.a.createElement(y.a,{isFollowing:e,style:K.followButton,userId:t}),M=({loggedInUserId:e,promotedContent:t,userId:o})=>e!==o?c.a.createElement(C.a,{promotedContent:t,size:"small",style:K.followButton,userId:o}):null,B=e=>c.a.createElement(E,{promotedContent:e.promotedContent,user:e.user},M(e)),j=e=>c.a.createElement(I.a,{renderActionMenu:t=>c.a.createElement(b.b,{onClose:t,promotedContent:e.promotedContent,user:e.user,view:"rito_flagged_accounts"})});class W extends c.a.Component{constructor(...e){super(...e),s()(this,"_handleAvatarClick",(()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({element:"avatar",action:"profile_click"}),this._handleAsyncPromotedEvent(D.b.PROFILE_IMAGE_CLICK)})),s()(this,"_handleCellClick",(()=>{const{history:e,onClick:t,screenName:o,user:i}=this.props,s=this._getPromotedTweetState();this._handleSaveAsRecentSearch(),this._handleScreenNameClick(),t?t({user:i,state:s}):e.push({pathname:`/${o}`,state:s||void 0})})),s()(this,"_handleScreenNameClick",(()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({action:"profile_click"}),this._handleAsyncPromotedEvent(D.b.SCREEN_NAME_CLICK)})),s()(this,"_handleSaveAsRecentSearch",(()=>{const{saveAsRecentSearch:e,shouldStoreTypeaheadItem:t,userId:o}=this.props;e&&t&&t(T.a.ItemType.USER)&&e({user:{id:o,type:k.a.User}})})),s()(this,"_scribeAction",(e=>{var t;const{promotedContent:o,scribeAction:i,scribeData:s,scribeNamespace:n,user:r,userId:a}=this.props,c=null==s||null===(t=s.items)||void 0===t?void 0:t.find((e=>e.item_type===T.a.ItemType.USER&&e.id===a)),l=s.search_details;i({...n,...e},{items:[{...c,...O.a.getUserItem(r,o)}],profile_id:a,search_details:l})}))}componentDidMount(){this._shouldRender()&&this._handleImpression()}shouldComponentUpdate(e){return!Object(S.a)(this.props,e)}render(){const{avatarDecoration:e,bottomControl:t,cellClickable:o,createLocalApiErrorHandler:i,decoration:s,followRequestReceived:n,hideBlocked:a,history:l,isAutoblocking:d,isBlockedBy:h,isBlocking:p,isDeviceFollowing:u,isFollowing:m,isInSidebar:f,location:_,log:y,onClick:b,promotedItemId:g,saveAsRecentSearch:I,scribeAction:v,scribeData:E,scribeNamespace:w,shouldScribeImpression:C,shouldScribeProfileClick:S,shouldStoreTypeaheadItem:k,socialContext:O,user:T,...L}=this.props;return this._shouldRender()?c.a.createElement(P.a,r()({},L,{avatarDecoration:e,bottomControl:this._renderBottomControl(),decoration:this._renderDecoration(),highlightedLabel:this._getHighlightedLabel(),isBlocking:T.blocking,onAvatarClick:this._handleAvatarClick,onCellClick:o?this._handleCellClick:void 0,onScreenNameClick:this._handleScreenNameClick,socialContext:O?{contextType:O.contextType,text:O.text,link:O.landingUrl?Object(R.b)(O.landingUrl):void 0}:void 0,withDarkerInteractiveBackground:f})):null}_renderBottomControl(){return this._renderControl(this.props.bottomControl||null)}_renderDecoration(){return this._renderControl(this.props.decoration)}_renderControl(e){const{loggedInUserId:t}=this.context,{displayMode:o,followRequestReceived:i,isAutoblocking:s,isBlocking:n,isDeviceFollowing:r,isFollowing:a,promotedContent:c,screenName:l,user:d,userId:h}=this.props;return"function"==typeof e?e({displayMode:o,followRequestReceived:i,isAutoblocking:s,isBlocking:n,isDeviceFollowing:!!r,isFollowing:!!a,loggedInUserId:t,promotedContent:c,screenName:l,user:d,userId:h}):e}_shouldRender(){const{hideBlocked:e,isBlockedBy:t,isBlocking:o,screenName:i,userId:s}=this.props;return s&&i&&!(e&&(t||o))}_getHighlightedLabel(){const{highlightedLabel:e}=this.props.user,t="AutomatedLabel"===(null==e?void 0:e.userLabelType),o=!!t&&this.context.featureSwitches.isTrue("account_taxonomy_automated_label_enabled");return!t||o?e:void 0}_getPromotedTweetState(){const{promotedContent:e,promotedItemType:t}=this.props;return e&&t===D.c.TWEET?{promotedTweetState:e}:null}_handleAsyncPromotedEvent(e){const{createLocalApiErrorHandler:t,log:o,promotedContent:i,promotedItemId:s,promotedItemType:n,userId:r}=this.props;if(i){const{disclosure_type:a,impression_id:c}=i;o({disclosureType:a,itemId:s||r,itemType:n,params:{event:e,impression_id:c}}).catch(t())}}_handleImpression(){const{createLocalApiErrorHandler:e,log:t,promotedContent:o,promotedItemType:i,shouldScribeImpression:s,userId:n}=this.props;if(o&&i===D.c.USER){const{disclosure_type:i,impression_id:s}=o;t({disclosureType:i,itemId:n,itemType:D.c.USER,params:{event:D.b.IMPRESSION,impression_id:s}}).catch(e())}else s&&this._scribeAction({action:"impression"})}}s()(W,"contextType",A.a),s()(W,"defaultProps",F.defaultProps);const K=v.a.create((e=>({followButton:{marginLeft:e.spaces.space12}}))),q=Object(U.a)(Object(x.a)(_(F)));t.b=Object(N.c)({element:"user"})(q)},LHcr:function(e,t,o){"use strict";o.r(t),o.d(t,"WhoToFollowContainer",(function(){return F}));var i=o("KEM+"),s=o.n(i),n=o("ERkP"),r=o.n(n),a=o("Xs4Y"),c=o("kGix"),l=o("v//M"),d=o("3XMw"),h=o.n(d),p=o("Rp9C"),u=o("rHpw"),m=o("MWbm"),f=o("lP98"),_=o("RqPI"),y=o("rxPX"),b=o("0KEI");const g="profile_accounts_sidebar",I=(e,t)=>_.q(e),v=(e,t)=>t.userId,E=(e,t)=>{const o=v(0,t),i=I(e);return f.c(e,{displayLocation:g,similarToUserId:o===i?void 0:o})},w=(e,t)=>{const o=v(0,t),i=I(e);return f.b(e,{displayLocation:g,similarToUserId:o===i?void 0:o})};var C=Object(y.a)().propsFromState((()=>({fetchStatus:w,loggedInUserId:I,recommendations:E}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(b.createLocalApiErrorHandlerWithContextFactory)("WHO_TO_FOLLOW_CONTAINER"),fetchRecommendationsIfNeeded:f.a}))).withAnalytics({component:"suggest_who_to_follow"}),S=o("Re5t"),R=o("hqDb"),k=o("hxu0"),O=o("6vad"),T=o("rC8y");const L=h.a.a526aa66,U=h.a.ef62501f,x=h.a.d228a9a0;var A=Object(k.a)((({isInSidebar:e,userId:t,userIds:o,withProfileHeaderText:i})=>{const s=o.length>3,n=`/i/connect_people?user_id=${t}`;return r.a.createElement(m.a,{accessibilityLabel:L,accessibilityRole:"complementary"},r.a.createElement(O.b,{text:i?U:L}),r.a.createElement(R.a,{displayMode:S.a.UserCompact,userIds:o.slice(0,3),withItemBorder:!0}),s&&r.a.createElement(T.a,{link:n,text:x,withBottomRadius:!0,withDarkerInteractiveBackground:e}))}));const N=h.a.fd6473fa,P={element:"user",action:"results"},D={viewType:"who_to_follow"};class F extends r.a.PureComponent{constructor(...e){super(...e),s()(this,"_renderContent",(()=>{const{recommendations:e,userId:t,withProfileHeaderText:o}=this.props,i=e&&e.map((e=>e.user));return r.a.createElement(A,{userId:t,userIds:i,withProfileHeaderText:o})})),s()(this,"_handleImpression",(e=>{const{analytics:t}=this.props,o=e&&e.slice(0,3).map((e=>({...p.a.forUser(e.user),suggestion_details:{source_data:e.token}})));t.scribe({...P,data:{items:o}})}))}componentDidMount(){const{recommendations:e}=this.props;this._fetchRecommendations(this.props),e&&e.length>0&&this._handleImpression(e)}componentDidUpdate(e){const{recommendations:t}=this.props;this.props.userId!==e.userId&&this._fetchRecommendations(this.props),t!==e.recommendations&&t&&t.length>0&&this._handleImpression(t)}render(){const{fetchStatus:e,style:t}=this.props;return e===c.a.FAILED||this._hasEmptySuggestionList()?null:r.a.createElement(m.a,{style:[H.root,t]},r.a.createElement(l.a,{accessibilityLabel:N,behavioralEventContext:D,fetchStatus:e,render:this._renderContent}))}_fetchRecommendations(e){const{createLocalApiErrorHandler:t,fetchRecommendationsIfNeeded:o,loggedInUserId:i,userId:s}=e;o({limit:4,displayLocation:g,similarToUserId:s!==i?s:void 0}).catch(t(a.a))}_hasEmptySuggestionList(){const{fetchStatus:e,recommendations:t}=this.props;return e===c.a.LOADED&&0===t.length}}const H=u.a.create((e=>({root:{minHeight:"15rem"}}))),M=C(F);t.default=M},Xs4Y:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o("k49u"),s=o("fs1G");const n={[i.a.ResourceNotFound]:{customAction:s.a}}},fyKl:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return C}));var i=o("97Jx"),s=o.n(i),n=o("KEM+"),r=o.n(n),a=o("ERkP"),c=o.n(a),l=o("zfvc"),d=o("jHwr"),h=o("VY6S"),p=o("w9LO"),u=o("//dC"),m=o("lHOd"),f=o("Oe3h"),_=o("0FVZ"),y=o("7N4s"),b=o("cHvH"),g=o("rHpw"),I=o("i4Oy"),v=o("shC7"),E=o("MWbm");const w=g.a.create((e=>({rootNarrow:{maxWidth:"75%"},rootWide:{maxWidth:`calc(${e.spaces.space64} * 6)`},anchor:g.a.absoluteFillObject,mask:{...g.a.absoluteFillObject,position:"fixed"},bodyRectHelper:{...g.a.absoluteFillObject,bottom:void 0},content:{borderRadius:e.borderRadii.small,position:"absolute",overflow:"hidden",backgroundColor:e.colors.navigationBackground,boxShadow:e.boxShadows.medium},contentInitialRender:{position:"fixed",opacity:0},contentFixed:{position:"fixed",overflowY:"auto",overscrollBehavior:"contain"}})));class C extends c.a.Component{constructor(e,t){super(e,t),r()(this,"_handleAnimateComplete",(()=>{const{onAnimateComplete:e}=this.props;e&&e()})),r()(this,"_handleEsc",(e=>{const{onDismiss:t}=this.props,{altKey:o,ctrlKey:i,key:s,metaKey:n}=e;!(o||i||n)&&"Escape"===s&&t()})),r()(this,"_receiveBodyRectHelperRef",(e=>{e&&this._bodyRectHelperNode!==e&&(this._bodyRectHelperNode=e,this._scheduleUpdate())})),r()(this,"_receiveAnchorRef",(e=>{e&&this._anchorNode!==e&&(this._anchorNode=e,this._scheduleUpdate())})),r()(this,"_receiveContentRef",(e=>{e&&this._contentNode!==e&&(this._contentNode=e,this._scheduleUpdate())})),r()(this,"_updatePosition",(()=>{if(!(this._mounted&&(this._anchorNode||this.props.position)&&this._contentNode&&this._contentNode instanceof window.HTMLElement&&this._bodyRectHelperNode&&this._bodyRectHelperNode instanceof window.HTMLElement))return;const e=this._contentNode.scrollHeight,t=this._contentNode.scrollWidth,{left:o,top:i,width:s}=this._bodyRectHelperNode.getBoundingClientRect(),{height:n,width:r}=I.a.get("window");let a={left:0,top:0,height:0,width:0};this.props.position?a={...a,...this.props.position}:this._anchorNode&&this._anchorNode instanceof window.HTMLElement&&(a=this._anchorNode.getBoundingClientRect());const{height:c,left:l,top:d,width:h}=a,p=r-s,u=l-o,m=d-i,f=l+h>=t,_=d+c>=e,y=r-l>=t,b=n-d>=e,g=this.props.preferredVerticalOrientation,E=(e=>v.a.getConstants().isRTL?"left"===e?"right":"left":e)(this.props.preferredHorizontalOrientation),w=this.state.verticalOrientation||(({canOrientDown:e,canOrientUp:t,verticalPreference:o})=>t&&e||!t&&!e?o:t?"up":"down")({verticalPreference:g,canOrientUp:_,canOrientDown:b}),C=this.state.horizontalOrientation||(({canOrientLeft:e,canOrientRight:t,horizontalPreference:o})=>!e||"left"!==o&&t?"right":"left")({horizontalPreference:E,canOrientLeft:f,canOrientRight:y}),S=this.props.isFixed?l:u,R=this.props.isFixed?d:m,k="up"===w?R+c-e:R,O="left"===C?r-S-h-p:r-S-t-p;this.setState({top:Math.max(k,0),right:O,verticalOrientation:w,horizontalOrientation:C})})),this.state=Object.freeze({}),this._scheduleUpdate=Object(d.a)(this._updatePosition,window.requestAnimationFrame),this._scheduleDebouncedUpdate=Object(h.a)(this._scheduleUpdate,250)}componentDidMount(){this._mounted=!0,I.a.addEventListener("change",this._scheduleDebouncedUpdate)}componentWillUnmount(){this._mounted=!1,I.a.removeEventListener("change",this._scheduleDebouncedUpdate)}render(){const{animateInDuration:e,animateType:t,children:o,isFixed:i,onDismiss:n,withKeyboardNavigation:r}=this.props,{right:a,top:d,verticalOrientation:h}=this.state,I=void 0===d,C=`calc(100vh - ${d||0}px)`,S=[w.content,I&&w.contentInitialRender,i&&[w.contentFixed,{maxHeight:C}],{top:d,right:v.a.getConstants().isRTL?void 0:a,left:v.a.getConstants().isRTL?a:void 0}];return c.a.createElement(E.a,{ref:this._receiveAnchorRef,style:w.anchor},c.a.createElement(_.a.Dropdown,null,c.a.createElement(m.a.Consumer,null,(i=>c.a.createElement(y.b.Consumer,null,(({isModal:a})=>c.a.createElement(u.a,{history:i,isModal:a,onDismiss:n},c.a.createElement(p.a,{withKeyboardNavigation:r},c.a.createElement(E.a,{onClick:n,style:w.mask}),c.a.createElement(E.a,{ref:this._receiveBodyRectHelperRef,style:w.bodyRectHelper}),c.a.createElement(b.a,null,(({windowWidth:i})=>c.a.createElement(E.a,{accessibilityRole:"menu",onKeyUp:this._handleEsc,ref:this._receiveContentRef,style:[i<g.a.theme.breakpoints.medium?w.rootNarrow:w.rootWide,S]},I&&"slide"===t?o:c.a.createElement(l.b,{animateMount:"up"!==h,duration:e,onAnimateComplete:this._handleAnimateComplete,show:!0,type:t},(({isAnimating:e})=>c.a.createElement(f.a,{id:"Dropdown",minimizeReporting:e},((e,t)=>c.a.createElement(E.a,s()({ref:e()},t({})),o))))))))))))))))}}r()(C,"defaultProps",{preferredHorizontalOrientation:"left",preferredVerticalOrientation:"down",animateType:"slide",animateInDuration:"normal",withKeyboardNavigation:!0})},hqDb:function(e,t,o){"use strict";var i=o("97Jx"),s=o.n(i),n=o("KEM+"),r=o.n(n),a=o("ERkP"),c=o.n(a),l=o("k49u"),d=o("6xIQ"),h=o("kGix"),p=o("G6rE"),u=o("rxPX"),m=o("0KEI");const f=(e,t)=>t.userIds,_=(e,t)=>{const{userIds:o}=t;return o.filter((t=>!!p.e.select(e,t)))},y=(e,t)=>{const{userIds:o}=t;return o.reduce(((t,o)=>{const i=p.e.selectFetchStatus(e,o);return t[o]=i===h.a.NONE?h.a.LOADING:i,t}),{})};var b=Object(u.a)().propsFromState((()=>({availableUserIds:Object(d.a)(_,(e=>e)),fetchStatus:Object(d.a)(_,y,f,((e,t,o)=>{let i=h.a.LOADED;for(let s=0;s<o.length;s++){const n=o[s];if(-1===e.indexOf(n)){const e=t[n]||h.a.LOADING;i=i===h.a.LOADED?e:i}if(i===h.a.LOADED)break}return i}))}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(m.createLocalApiErrorHandlerWithContextFactory)("USERS_LIST_CONTAINER"),fetchUsersIfNeeded:p.e.fetchManyIfNeeded}))),g=o("v//M"),I=o("3XMw"),v=o.n(I),E=o("pQ3Z"),w=o.n(E),C=o("cFuS"),S=o("Re5t"),R=o("MWbm"),k=o("88ay");const O=({displayMode:e,renderUserCell:t,userIds:o,withFinalItemBorder:i,withItemBorder:s})=>c.a.createElement(R.a,null,o.map(((o,i)=>t?t(o):c.a.createElement(k.b,{decoration:k.e,displayMode:e,key:o,promotedItemType:C.c.USER,userId:o,withFollowsYou:!0}))));O.defaultProps={displayMode:S.a.UserDetailed,withFinalItemBorder:!0,withItemBorder:!1};var T=O;const L=v.a.f5b426c2,U={viewType:"user_list"};class x extends c.a.Component{constructor(...e){super(...e),r()(this,"state",{allUsersUnavailable:!1}),r()(this,"_renderContent",(()=>{const{availableUserIds:e,createLocalApiErrorHandler:t,fetchStatus:o,fetchUsersIfNeeded:i,userIds:n,...r}=this.props;return c.a.createElement(T,s()({},r,{userIds:e}))})),r()(this,"_handleFetch",(()=>{this._fetchUsersIfNeeded()}))}componentDidMount(){this._fetchUsersIfNeeded()}componentDidUpdate(e){w()(e.userIds,this.props.userIds)||this._fetchUsersIfNeeded()}render(){return c.a.createElement(g.a,{accessibilityLabel:L,behavioralEventContext:U,fetchStatus:this.state.allUsersUnavailable?h.a.LOADED:this.props.fetchStatus,onRequestRetry:this._handleFetch,render:this._renderContent,retryable:!1})}_fetchUsersIfNeeded(){const{availableUserIds:e,createLocalApiErrorHandler:t,fetchUsersIfNeeded:o,userIds:i}=this.props;o(i).then((()=>{this.setState({allUsersUnavailable:!1})}),t({[l.a.AddressBookLookupNotFound]:{customAction:()=>{0===e.length&&this.setState({allUsersUnavailable:!0})}},[l.a.OtherUserSuspended]:{customAction:()=>{0===e.length&&this.setState({allUsersUnavailable:!0})}}}))}}const A=b(x);t.a=A},hxu0:function(e,t,o){"use strict";var i=o("97Jx"),s=o.n(i),n=o("ERkP"),r=o.n(n),a=o("vqbU");t.a=e=>t=>r.a.createElement(a.a.Consumer,null,(o=>r.a.createElement(e,s()({},t,{isInSidebar:o}))))},jHwr:function(e,t,o){"use strict";t.a=(e,t)=>{let o=null;const i=()=>{o=null,e()};return()=>(o||(o=t(i)),o)}},lP98:function(e,t,o){"use strict";o.d(t,"c",(function(){return b})),o.d(t,"b",(function(){return g})),o.d(t,"a",(function(){return I}));var i=o("/kEJ"),s=o("oEOe"),n=o("RgK2"),r=o.n(n),a=o("kGix"),c=o("Ssj5");const l="recommendations",d=30,h="rweb/recommendations/FETCH_REQUEST",p="rweb/recommendations/FETCH_SUCCESS",u="rweb/recommendations/FETCH_FAILURE",m={},f=({displayLocation:e,similarToUserId:t})=>e+(t?`_${t}`:"");c.a.register({[l]:function(e=m,t){if(!t.meta)return e;switch(t.type){case h:{const o=f(t.meta);return{...e,[o]:{...e[o],fetchStatus:a.a.LOADING}}}case u:{const o=f(t.meta);return{...e,[o]:{...e[o],fetchStatus:a.a.FAILED}}}case p:{const o=f(t.meta),i=t.payload&&t.payload.entities?t.payload.entities:{recommendations:r.a},s=(t.payload&&t.payload.result?t.payload.result:y).map((e=>i.recommendations[e]));return{...e,[o]:{...e[o],fetchStatus:a.a.LOADED,recommendations:s}}}default:return e}}});const _=[],y=[],b=(e,{displayLocation:t,similarToUserId:o})=>{const i=e.recommendations[f({displayLocation:t,similarToUserId:o})];return i&&i.recommendations?i.recommendations:_},g=(e,{displayLocation:t,similarToUserId:o})=>{const i=e.recommendations[f({displayLocation:t,similarToUserId:o})];return i?i.fetchStatus:a.a.NONE},I=e=>(t,o,n)=>{const c=o(),{displayLocation:l,similarToUserId:m}=e,f=b(c,{displayLocation:l,similarToUserId:m}),_=g(c,{displayLocation:l,similarToUserId:m})===a.a.LOADED;return f&&_?Promise.resolve(r.a):t((e=>(t,o,{api:n})=>{const{displayLocation:r,itsInterests:a,limit:c=d,similarToUserId:l}=e;return Object(s.b)(t,{request:n.Recommendations.fetch,params:{display_location:r,itsInterests:a,limit:c,user_id:l}})({actionTypes:{REQUEST:h,SUCCESS:p,FAILURE:u},context:"FETCH_RECOMMENDATIONS",meta:{displayLocation:r,similarToUserId:l}},(e=>{if(e&&e.entities)return[Object(i.c)(e.entities)]}))})(e))}},sAnO:function(e,t,o){"use strict";o.r(t);var i=o("fyKl");t.default=i.default},uo3S:function(e,t,o){"use strict";o.r(t);var i=o("ERkP"),s=o.n(i),n=o("VAyw"),r=o("XOJV"),a=o("s1N3"),c=o("rxPX");const l=e=>{var t,o;return(null===(t=e.entities)||void 0===t||null===(o=t.user_mentions)||void 0===o?void 0:o.map((e=>e.id_str)))||[]},d=(e,t)=>t.focalTweetId;var h=Object(c.a)().propsFromState((()=>({tweetMap:r.a.selectAll,focalTweetId:d}))).adjustStateProps((({focalTweetId:e,tweetMap:t})=>{const o=e&&t[e];if(!o)return{participantIds:[]};const i=[o.user,...l(o),...(s=o,n.a.mergeTaggedUsers(s.extended_entities&&s.extended_entities.media||[]).map((e=>e.user_id)))];var s;const r=o.quoted_status&&t[o.quoted_status];return r&&(i.push(r.user),i.push(...l(r))),{participantIds:Object(a.a)(i)}})).withAnalytics({component:"in_this_conversation"}),p=o("3XMw"),u=o.n(p),m=o("6vad"),f=o("hqDb"),_=o("MWbm");const y=u.a.j88f27d8,b=({maxCount:e,participantIds:t})=>s.a.createElement(_.a,{accessibilityLabel:y,accessibilityRole:"complementary"},s.a.createElement(m.b,{text:y}),s.a.createElement(f.a,{userIds:t.slice(0,e),withFinalItemBorder:!1,withItemBorder:!0}));b.defaultProps={maxCount:3};var g=b;const I=h((e=>s.a.createElement(g,{participantIds:e.participantIds})));t.default=I}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout.3714a7d5.js.map