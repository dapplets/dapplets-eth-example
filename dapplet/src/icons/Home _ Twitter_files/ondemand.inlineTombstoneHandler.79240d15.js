(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{"NO+D":function(e,t,o){"use strict";o.r(t);var n=o("ezF+"),i=o("ERkP"),a=o.n(i),r=o("VPAj"),s=o("rcen"),d=o("xM7j"),c=o("xZXe"),l=o("P1oR"),w=o("kY28");const v=({actionText:e,children:t,contextTweetId:o,conversationPosition:n,conversationTreeMetadata:i,ctaLink:r,ctaText:s,forwardPivotInfo:v,innerForwardPivotInfo:T,isFocalTweet:u,isReaderMode:p,lang:f,onTweetDismiss:I,quotedTweetTombstoneInfo:P,socialContext:m,tweetId:x,withHideReply:b})=>{const[h,y]=a.a.useState(!0);a.a.useEffect((()=>{y(!0)}),[x]);const k=a.a.useCallback((()=>{y(!1)}),[]);return h||!x?a.a.createElement(d.a,{actionText:e,children:t,conversationPosition:n,conversationTreeMetadata:i,ctaLink:r,ctaText:s,lang:f,onClick:k}):x?u&&!p?a.a.createElement(l.b,{contextTweetId:o,forwardPivotInfo:v,innerForwardPivotInfo:T,onTweetDismiss:I,quotedTweetTombstoneInfo:P,socialContext:m,tweetId:x,withHideReply:b}):a.a.createElement(c.b,{conversationPosition:n,conversationTreeMetadata:i,displayBlocked:!0,displayPromotedContent:!0,forwardPivotInfo:v,innerForwardPivotInfo:T,isReaderMode:p,onTweetDismiss:I,quotedTweetTombstoneInfo:P,replyContext:p?w.a.ReplyContextTypes.None:void 0,shouldSelfThreadIncludeAvatar:!0,tweetId:x,withActions:!0,withHideReply:b,withInlineMedia:!0,withSocialContext:!0}):null};var T=a.a.memo(v);const u=Object(r.a)(!1),p=e=>{const{alignment:t,entities:o,rtl:n,text:i}=e;return a.a.createElement(s.a,{alignment:t,entities:o,rtl:n,text:i})};t.default=({createAdditionalProps:e=Object(r.a)(null),shouldDisplayBorder:t=u})=>n.g({bindActions:({module:e})=>({applyFeedbackAction:e.applyFeedbackAction}),component:T,createProps:t=>{var o,n,i,a;const{actions:r,entry:s}=t,{content:d,conversationPosition:c,conversationTreeMetadata:l}=s,{revealText:w,richRevealText:v,richText:T,text:u}=d.tombstoneInfo||{};return{actionText:v?p(v):w,children:T?p(T):u,conversationPosition:c,conversationTreeMetadata:l,forwardPivotInfo:null===(o=d.tweet)||void 0===o?void 0:o.forwardPivot,innerForwardPivotInfo:null===(n=d.tweet)||void 0===n?void 0:n.innerForwardPivot,quotedTweetTombstoneInfo:null===(i=d.tweet)||void 0===i?void 0:i.innerTombstoneInfo,tweetId:null===(a=d.tweet)||void 0===a?void 0:a.id,...e(s,r)}},shouldDisplayBorder:e=>{const{conversationPosition:t,treeDisplay:o}=e;return"VerticalConversation"!==(null==o?void 0:o.displayType)&&(!t||!!t.isEnd)}})}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.inlineTombstoneHandler.79240d15.js.map