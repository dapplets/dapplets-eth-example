(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{"88ay":function(e,t,o){"use strict";o.d(t,"c",(function(){return D})),o.d(t,"e",(function(){return j})),o.d(t,"f",(function(){return O})),o.d(t,"d",(function(){return H})),o.d(t,"a",(function(){return J}));var r=o("KEM+"),i=o.n(r),n=o("97Jx"),s=o.n(n),c=o("ERkP"),a=o.n(c),l=o("6rlp"),d=o("zh9S"),p=o("G6rE"),u=o("rxPX"),h=o("0KEI");const m=(e,t)=>p.e.select(e,t.userId),b=(e,t)=>t.promotedContent;var _=Object(u.a)().propsFromState((()=>({promotedContent:b,user:m}))).adjustStateProps((({promotedContent:e,user:t})=>({promotedContent:e||(t?t.promoted_content:void 0),user:t}))).propsFromActions((()=>({createLocalApiErrorHandler:Object(h.createLocalApiErrorHandlerWithContextFactory)("USER_CELL_CONTAINER"),log:l.a,scribeAction:d.c}))),C=o("I57f"),g=o("vMjK"),I=o("MWbm"),v=o("IG7M"),k=o("rHpw");const S=e=>{const{children:t,promotedContent:o,user:r}=e;return a.a.createElement(I.a,{style:f.decorationWrapper},t,a.a.createElement(v.a,{renderActionMenu:e=>a.a.createElement(g.b,{onClose:e,promotedContent:o,user:r,view:"follower"}),style:f.actionMenu}))},f=k.a.create((e=>({decorationWrapper:{flexDirection:"row"},actionMenu:{marginLeft:e.spaces.space12}})));var y=o("uIZp"),w=o("mN6z"),E=o("caTy"),A=o("3IPs"),R=o("Rp9C"),T=o("X04g"),P=o("Re5t"),x=o("TnY3"),B=o("hxu0"),L=o("v6aA"),F=o("7JQg"),M=o("IMA+"),N=o("cFuS");const U=e=>{const{user:t}=e;return t&&t.profile_image_url_https?a.a.createElement(q,s()({},e,{avatarUri:t.profile_image_url_https,description:t.description,entities:t.entities,followRequestReceived:t.follow_request_received,highlightedLabel:t.highlightedLabel,isAutoblocking:t.smart_blocking,isBlockedBy:t.blocked_by,isBlocking:t.blocking,isDeviceFollowing:t.notifications,isFollowedBy:t.followed_by,isFollowing:t.following,isProtected:t.protected,isVerified:t.verified,name:t.name,screenName:t.screen_name,translatorType:t.translator_type,user:t,withheldDescription:t.withheld_description,withheldEntities:t.withheld_entities})):null};U.defaultProps={cellClickable:!0,decoration:null,displayMode:P.a.UserCompact,followRequestReceived:!1,hideBlocked:!1,promotedItemType:N.c.USER,shouldScribeProfileClick:!0,shouldScribeImpression:!1,withFollowsYou:!1};const D=({isDeviceFollowing:e,userId:t})=>a.a.createElement(C.a,{isFollowing:e,style:K.followButton,userId:t}),j=({loggedInUserId:e,promotedContent:t,userId:o})=>e!==o?a.a.createElement(y.a,{promotedContent:t,size:"small",style:K.followButton,userId:o}):null,O=e=>a.a.createElement(S,{promotedContent:e.promotedContent,user:e.user},j(e)),H=e=>a.a.createElement(v.a,{renderActionMenu:t=>a.a.createElement(g.b,{onClose:t,promotedContent:e.promotedContent,user:e.user,view:"rito_flagged_accounts"})});class q extends a.a.Component{constructor(...e){super(...e),i()(this,"_handleAvatarClick",(()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({element:"avatar",action:"profile_click"}),this._handleAsyncPromotedEvent(N.b.PROFILE_IMAGE_CLICK)})),i()(this,"_handleCellClick",(()=>{const{history:e,onClick:t,screenName:o,user:r}=this.props,i=this._getPromotedTweetState();this._handleSaveAsRecentSearch(),this._handleScreenNameClick(),t?t({user:r,state:i}):e.push({pathname:`/${o}`,state:i||void 0})})),i()(this,"_handleScreenNameClick",(()=>{const{shouldScribeProfileClick:e}=this.props;this._handleSaveAsRecentSearch(),e&&this._scribeAction({action:"profile_click"}),this._handleAsyncPromotedEvent(N.b.SCREEN_NAME_CLICK)})),i()(this,"_handleSaveAsRecentSearch",(()=>{const{saveAsRecentSearch:e,shouldStoreTypeaheadItem:t,userId:o}=this.props;e&&t&&t(T.a.ItemType.USER)&&e({user:{id:o,type:A.a.User}})})),i()(this,"_scribeAction",(e=>{var t;const{promotedContent:o,scribeAction:r,scribeData:i,scribeNamespace:n,user:s,userId:c}=this.props,a=null==i||null===(t=i.items)||void 0===t?void 0:t.find((e=>e.item_type===T.a.ItemType.USER&&e.id===c)),l=i.search_details;r({...n,...e},{items:[{...a,...R.a.getUserItem(s,o)}],profile_id:c,search_details:l})}))}componentDidMount(){this._shouldRender()&&this._handleImpression()}shouldComponentUpdate(e){return!Object(w.a)(this.props,e)}render(){const{avatarDecoration:e,bottomControl:t,cellClickable:o,createLocalApiErrorHandler:r,decoration:i,followRequestReceived:n,hideBlocked:c,history:l,isAutoblocking:d,isBlockedBy:p,isBlocking:u,isDeviceFollowing:h,isFollowing:m,isInSidebar:b,location:_,log:C,onClick:g,promotedItemId:I,saveAsRecentSearch:v,scribeAction:k,scribeData:S,scribeNamespace:f,shouldScribeImpression:y,shouldScribeProfileClick:w,shouldStoreTypeaheadItem:A,socialContext:R,user:T,...P}=this.props;return this._shouldRender()?a.a.createElement(M.a,s()({},P,{avatarDecoration:e,bottomControl:this._renderBottomControl(),decoration:this._renderDecoration(),highlightedLabel:this._getHighlightedLabel(),isBlocking:T.blocking,onAvatarClick:this._handleAvatarClick,onCellClick:o?this._handleCellClick:void 0,onScreenNameClick:this._handleScreenNameClick,socialContext:R?{contextType:R.contextType,text:R.text,link:R.landingUrl?Object(E.b)(R.landingUrl):void 0}:void 0,withDarkerInteractiveBackground:b})):null}_renderBottomControl(){return this._renderControl(this.props.bottomControl||null)}_renderDecoration(){return this._renderControl(this.props.decoration)}_renderControl(e){const{loggedInUserId:t}=this.context,{displayMode:o,followRequestReceived:r,isAutoblocking:i,isBlocking:n,isDeviceFollowing:s,isFollowing:c,promotedContent:a,screenName:l,user:d,userId:p}=this.props;return"function"==typeof e?e({displayMode:o,followRequestReceived:r,isAutoblocking:i,isBlocking:n,isDeviceFollowing:!!s,isFollowing:!!c,loggedInUserId:t,promotedContent:a,screenName:l,user:d,userId:p}):e}_shouldRender(){const{hideBlocked:e,isBlockedBy:t,isBlocking:o,screenName:r,userId:i}=this.props;return i&&r&&!(e&&(t||o))}_getHighlightedLabel(){const{highlightedLabel:e}=this.props.user,t="AutomatedLabel"===(null==e?void 0:e.userLabelType),o=!!t&&this.context.featureSwitches.isTrue("account_taxonomy_automated_label_enabled");return!t||o?e:void 0}_getPromotedTweetState(){const{promotedContent:e,promotedItemType:t}=this.props;return e&&t===N.c.TWEET?{promotedTweetState:e}:null}_handleAsyncPromotedEvent(e){const{createLocalApiErrorHandler:t,log:o,promotedContent:r,promotedItemId:i,promotedItemType:n,userId:s}=this.props;if(r){const{disclosure_type:c,impression_id:a}=r;o({disclosureType:c,itemId:i||s,itemType:n,params:{event:e,impression_id:a}}).catch(t())}}_handleImpression(){const{createLocalApiErrorHandler:e,log:t,promotedContent:o,promotedItemType:r,shouldScribeImpression:i,userId:n}=this.props;if(o&&r===N.c.USER){const{disclosure_type:r,impression_id:i}=o;t({disclosureType:r,itemId:n,itemType:N.c.USER,params:{event:N.b.IMPRESSION,impression_id:i}}).catch(e())}else i&&this._scribeAction({action:"impression"})}}i()(q,"contextType",L.a),i()(q,"defaultProps",U.defaultProps);const K=k.a.create((e=>({followButton:{marginLeft:e.spaces.space12}}))),J=Object(x.a)(Object(B.a)(_(U)));t.b=Object(F.c)({element:"user"})(J)},hxu0:function(e,t,o){"use strict";var r=o("97Jx"),i=o.n(r),n=o("ERkP"),s=o.n(n),c=o("vqbU");t.a=e=>t=>s.a.createElement(c.a.Consumer,null,(o=>s.a.createElement(e,i()({},t,{isInSidebar:o}))))},lX7a:function(e,t,o){"use strict";o.r(t);var r=o("ezF+"),i=o("wtjx"),n=o("RgK2"),s=o.n(n),c=o("cFuS"),a=o("Rp9C"),l=o("Re5t"),d=o("VPAj"),p=o("fs1G"),u=o("88ay");const h=e=>e?{disclosure_type:e.disclosureType,impression_id:e.impressionId}:void 0,m=[u.e,u.f];t.default=({cellClickable:e=!0,decoration:t,displayMode:o=l.a.UserCompact,onClick:n,shouldScribeProfileClick:b=!0,shouldScribeImpression:_=!1,shouldStoreTypeaheadItem:C,withLink:g=!0})=>{const I=t||u.e;return r.g({component:u.a,selectData:Object(d.a)(s.a),bindActions:()=>({saveAsRecentSearch:i.a}),defaultScribeNamespace:{element:"user"},createProps:({actions:{saveAsRecentSearch:t},entry:r,scribeData:i,scribeNamespace:s})=>{const{content:{id:a,promotedMetadata:l,socialContext:d}}=r,p=h(l),u=d&&d.generalContext||void 0;return{decoration:I,displayMode:o,shouldStoreTypeaheadItem:C,promotedContent:p,promotedItemType:c.c.USER,scribeData:i,scribeNamespace:s,userId:a,withFollowsYou:m.includes(I),socialContext:u,withLink:g,cellClickable:e,shouldScribeProfileClick:b,shouldScribeImpression:_,onClick:n,saveAsRecentSearch:t}},onImpression:p.a,getScribeDataItem(e){const{content:{id:t,promotedMetadata:o},cursor:r,itemMetadata:i,position:n}=e,s=i.clientEventInfo,c=h(o);return a.a.getUserItem({id_str:t,promoted_content:c},void 0,n,r,s)},isFocusable:Object(d.a)(!0)})}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.UserHandler.460dead5.js.map