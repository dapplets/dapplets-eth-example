(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5emT":function(e,t,s){"use strict";var a=s("ERkP"),i=s.n(a),n=s("Lsrn"),o=s("k/Ka");const r=(e={})=>Object(o.a)("svg",{...e,accessibilityHidden:void 0===e.accessibilityLabel,style:[n.a.root,e.style],viewBox:"0 0 24 24"},i.a.createElement("g",null,i.a.createElement("path",{d:"M14.548 11.634c-1.207 0-2.188-.98-2.188-2.188 0-.664.302-1.25.77-1.653-.363-.097-.736-.165-1.13-.165-2.416 0-4.375 1.96-4.375 4.376S9.585 16.38 12 16.38c2.418 0 4.377-1.96 4.377-4.376 0-.4-.07-.78-.17-1.146-.402.47-.992.776-1.66.776z"}),i.a.createElement("path",{d:"M12 19.79c-7.228 0-10.12-6.724-10.24-7.01-.254-.466-.254-1.105.035-1.642C1.88 10.923 4.772 4.2 12 4.2s10.12 6.723 10.24 7.01c.254.465.254 1.104-.035 1.64-.085.216-2.977 6.94-10.205 6.94zm0-14c-6.154 0-8.668 5.787-8.772 6.033-.068.135-.068.208-.033.273.137.316 2.65 6.104 8.805 6.104 6.18 0 8.747-5.973 8.772-6.033.07-.136.07-.21.034-.274-.138-.316-2.652-6.103-8.806-6.103z"})));r.metadata={width:24,height:24},t.a=r},"6XNv":function(e,t,s){"use strict";var a=s("KEM+"),i=s.n(a),n=s("ERkP"),o=s.n(n),r=s("t62R"),l=s("piX5"),c=s("4r2z"),d=s("FG+G"),p=s("rHpw"),h=(s("aWzz"),s("k/Ka")),u=s("shC7"),b=s("MWbm");const g=o.a.forwardRef(((e,t)=>Object(h.a)("select",{...e,ref:t}))),y=e=>Object(h.a)("option",e);let m=1;class _ extends o.a.PureComponent{constructor(e){super(e),i()(this,"_selectRef",o.a.createRef()),i()(this,"state",{isFocused:!1}),i()(this,"_handleChange",(e=>{const{onChange:t,withEmptyOption:s}=this.props,{selectedIndex:a,value:i}=e.target;t&&t(i,a-(s?1:0))})),i()(this,"_handleBlur",(e=>{const{onBlur:t}=this.props;this.setState({isFocused:!1}),t&&t()})),i()(this,"_handleFocus",(e=>{const{onFocus:t}=this.props;this.setState({isFocused:!0}),t&&t()})),this._id=`SELECTOR_${m}`,this._errorID=`${this._id}_ERROR`,this._helperID=`${this._id}_HELP`,this._labelID=`${this._id}_LABEL`,m+=1}componentDidMount(){this.props.autofocus&&this._selectRef&&this._selectRef.current&&this._selectRef.current.focus()}render(){const{accessibilityDescribedBy:e,disabled:t,errorText:s,hasError:a,helperText:i,options:n,style:h,testID:m,value:_,withEmptyOption:v}=this.props,{isFocused:f}=this.state,I=r.b.getLanguage(),C="ja"===I?p.a.theme.fontFamilies.japan:u.a.getConstants().isRTL||c.a.isLocaleRTL(I)?p.a.theme.fontFamilies.rtl:p.a.theme.fontFamilies.normal,w=void 0===a?!!s:a,E=new Set;s&&E.add(this._errorID),e&&E.add(e),i&&E.add(this._helperID);const L=E.size?[...E].join(" "):void 0;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,{style:[l.a.border,x.container,t&&l.a.disabled,f&&l.a.focusedBorderValid,w&&l.a.invalidBorderColor,f&&w&&l.a.focusedBorderInvalid,h]},this._renderLabel(),o.a.createElement(g,{accessibilityDescribedBy:L,accessibilityInvalid:w,accessibilityLabelledBy:this._labelID,disabled:t,nativeID:this._id,onBlur:this._handleBlur,onChange:this._handleChange,onFocus:this._handleFocus,ref:this._selectRef,style:[x.select,{fontFamily:C},t&&l.a.disabled],testID:m||"",value:_},v?o.a.createElement(y,{disabled:!0,style:x.option,value:""}):null,n.map((e=>{const{disabled:t,label:s,value:a}=e;return o.a.createElement(y,{disabled:t,key:`${s}-${a}`,style:x.option,value:a},s)}))),o.a.createElement(d.a,{style:[x.dropdownCaret,f&&l.a.validColor,(a||s)&&l.a.invalidColor]})),i?this._renderHelperText():null,w&&s?this._renderErrorText():null)}_renderLabel(){const{errorText:e,hasError:t,label:s}=this.props,{isFocused:a}=this.state;return o.a.createElement(r.b,{accessibilityRole:"label",color:t||e?"red500":a?"primary":"gray700",nativeID:this._labelID,style:x.label},s)}_renderHelperText(){return o.a.createElement(b.a,{accessibilityLiveRegion:"polite"},o.a.createElement(r.b,{color:"gray700",nativeID:this._helperID,style:x.helperText},this.props.helperText))}_renderErrorText(){return o.a.createElement(b.a,{accessibilityLiveRegion:"polite"},o.a.createElement(r.b,{color:"red500",nativeID:this._errorID,style:x.helperText},this.props.errorText))}}i()(_,"defaultProps",{disabled:!1,autofocus:!1,withEmptyOption:!1}),_.propTypes={};const x=p.a.create((e=>({container:{backgroundColor:e.colors.cellBackground},dropdownCaret:{color:e.colors.gray700,height:"1.5em",pointerEvents:"none",position:"absolute",marginTop:"-0.75em",top:"50%",right:e.spaces.space12},label:{position:"absolute",fontSize:e.fontSizes.subtext2,paddingHorizontal:e.spaces.space8,paddingTop:e.spaces.space8,pointerEvents:"none",lineHeight:e.lineHeights.subtext2},option:{backgroundColor:e.colors.navigationBackground},select:{appearance:"none",backgroundColor:"transparent",borderRadius:e.borderRadii.none,borderWidth:e.borderWidths.none,color:e.colors.text,cursor:"pointer",fontSize:e.fontSizes.headline2,lineHeight:e.lineHeights.headline2,margin:0,marginTop:e.spaces.space16,outlineStyle:"none",padding:0,paddingTop:e.spaces.space12,paddingBottom:e.spaces.space8,paddingHorizontal:e.spaces.space8},helperText:{fontSize:e.fontSizes.subtext2,paddingHorizontal:e.spaces.space8,paddingTop:e.spaces.space2}})));t.a=_},c0ZR:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));const a=e=>new Promise(((t,s)=>{const a=new window.XMLHttpRequest;a.responseType="blob",a.onreadystatechange=()=>{a.readyState===window.XMLHttpRequest.DONE&&(200===a.status?t(a.response):s(new Error("Unexpected status code")))},a.onerror=e=>s(e),a.ontimeout=e=>s(e),a.open("GET",e,!0),a.send()}))},"p+r5":function(e,t,s){"use strict";s.d(t,"a",(function(){return F}));var a=s("97Jx"),i=s.n(a),n=s("KEM+"),o=s.n(n),r=s("ERkP"),l=s.n(r),c=s("38/B"),d=s("t62R"),p=s("/yvb"),h=s("piX5"),u=s("3XMw"),b=s.n(u),g=s("tI3i"),y=s.n(g),m=s("oQhu"),_=s("rHpw"),x=s("aITJ"),v=s("MWbm"),f=(s("aWzz"),s("n5fo")),I=s("5emT"),C=s("Oib4"),w=s("WtWS"),E=s("ioan");const L=e=>e.length,T=(e,t=L)=>t(e),S=b.a.de540c32,R=b.a.b4abfdb3;class F extends l.a.Component{constructor(e){super(e),o()(this,"_blurOnBackspaceKeyUpForKaiOS",!1),o()(this,"_isLabelLarge",(()=>{const{actualCount:e,isFocused:t}=this.state;return!e&&!t})),o()(this,"_getTextInputStyle",Object(m.a)((e=>[D.root,!e&&D.disabled]))),o()(this,"_getTextInputType",(()=>{const{showPasswordVisibilityIcon:e,type:t}=this.props,{isPasswordRevealed:s}=this.state;return"password"===t&&e?s?"text":"password":t})),o()(this,"_calculateLength",(e=>T(e,this.props.calculateLength))),o()(this,"_shouldRenderDisplayCount",(()=>{const{isFocused:e}=this.state,t=this._isFormInvalid();return Boolean((e||t)&&this._getMaxDisplayCount())})),o()(this,"_isInvalidNumber",(()=>{var e,t,s,a,i;const{type:n}=this.props,o=null===(e=this._textInput)||void 0===e||null===(t=e.textInputNode)||void 0===t?void 0:t.value,r=null===(s=this._textInput)||void 0===s||null===(a=s.textInputNode)||void 0===a||null===(i=a.validity)||void 0===i?void 0:i.badInput;return"number"===n&&""===o&&!0===r})),o()(this,"_getActualCount",(e=>{let t=e.length;return this._isInvalidNumber()&&(t=1),t})),o()(this,"_handleBlur",(e=>{const{onBlur:t}=this.props,{value:s}=e.currentTarget,a=this._calculateLength(s),i=this._getActualCount(s);this.setState({isFocused:!1,displayCount:a,actualCount:i}),t&&t(e)})),o()(this,"_handleChange",(e=>{const{onChange:t}=this.props,{previousValue:s}=this.state,{value:a}=e.currentTarget,i=this._calculateLength(a),n=this._getActualCount(a),o=this._getAdjustedMaxLength();void 0!==o&&a.length>o&&s.length<a.length?e.currentTarget.value=s:(this.setState({isFocused:!0,displayCount:i,actualCount:n,previousValue:e.currentTarget.value}),t&&t(e))})),o()(this,"_handleFocus",(e=>{const{onFocus:t}=this.props;this.setState({isFocused:!0}),t&&t(e)})),o()(this,"_handleKeyPress",(e=>{const{multiline:t,onKeyPress:s,onSubmitEditing:a}=this.props;s&&s(e),e.isDefaultPrevented()||"Enter"!==e.key||e.shiftKey||t||!a||(e.preventDefault(),a(e))})),o()(this,"_handleKeyDown",(e=>{const{onKeyDown:t}=this.props,{displayCount:s}=this.state,a=0===s;x.b.isKaiOS()&&"Backspace"===e.key&&a?this._blurOnBackspaceKeyUpForKaiOS=a:t&&t(e)})),o()(this,"_handleKeyUp",(e=>{const{onKeyUp:t}=this.props;x.b.isKaiOS()&&"Backspace"===e.key&&this._blurOnBackspaceKeyUpForKaiOS&&(e.preventDefault(),this.blur()),t&&t(e)})),o()(this,"_handlePasswordVisibilityClick",(e=>{this.setState((e=>({isPasswordRevealed:!e.isPasswordRevealed})))})),o()(this,"_setTextInputRef",(e=>{this._textInput=e})),o()(this,"_checkComponentPropsUsageCorrectness",(e=>{const{defaultValue:t,maxLength:s,onChange:a,validLength:i,value:n}=e,o=!!a,r="string"==typeof n,l="string"==typeof t;y()(!(!l&&r&&!o),"A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."),y()(!(s&&i&&i>s),"Max length should be equal or greater than valid length."),y()(!(void 0!==s&&s<=0||void 0!==i&&i<=0),"Set editable to false instead of limiting the valid character count to 0.")})),o()(this,"_exceedsValidLength",(e=>{const t=this._getMaxDisplayCount();return!!t&&e>t})),o()(this,"_getMaxDisplayCount",(()=>this.props.validLength||this.props.maxLength)),o()(this,"_getAdjustedMaxLength",(()=>{const{maxLength:e}=this.props,t=this.getValue(),s=this._calculateLength(t);return e?e+t.length-s:void 0})),this._checkComponentPropsUsageCorrectness(e);const{defaultValue:t,value:s}=e,a=s||t||"";this.state={displayCount:this._calculateLength(a),actualCount:L(a),isFocused:!1,isPasswordRevealed:!1,previousValue:a}}componentDidUpdate(e){const{maxLength:t,onChange:s,validLength:a,value:i}=this.props,{maxLength:n,onChange:o,validLength:r,value:l}=e;r===a&&t===n&&!!s===!!o&&"string"==typeof i===("string"==typeof l)||this._checkComponentPropsUsageCorrectness(this.props)}static getDerivedStateFromProps(e,t){const{calculateLength:s,value:a}=e,i="string"==typeof a?T(a,s):0;return"string"==typeof a&&i!==t.displayCount?{displayCount:i,actualCount:a.length}:null}render(){const{accessibilityLabel:e,editable:t,errorText:s,helperText:a,style:i}=this.props,{isFocused:n}=this.state,o=this._isFormInvalid();return l.a.createElement(v.a,{style:[z.root,i]},l.a.createElement(v.a,{accessibilityLabel:e,accessibilityRole:"label",style:[h.a.border,z.textInputFormStyle,o&&h.a.invalidBorderColor,n&&o&&h.a.focusedBorderInvalid,n&&!o&&h.a.focusedBorderValid,!t&&h.a.disabled]},l.a.createElement(v.a,{style:z.textInputFormWrapper},l.a.createElement(v.a,{style:z.textInputHeader},this._renderLabel(),this._shouldRenderDisplayCount()?this._renderDisplayCount():null),this._renderTextInput())),l.a.createElement(v.a,{style:[z.sidePadding,z.underTextInputForm]},l.a.createElement(v.a,{style:z.subtextWrapper},a?this._renderHelperText():null,o&&s?this._renderErrorText():null)))}_renderLabel(){const{label:e}=this.props,{isFocused:t}=this.state,s=t?"primary":"gray700",a=this._isFormInvalid()?"red500":s,i=this._isLabelLarge();return l.a.createElement(d.b,{color:i?"gray700":a,numberOfLines:1,size:i?"headline1":"subtext2",style:[z.textInputHeaderItem,i&&z.placeholderText,!c.a.reducedMotionEnabled&&z.transition]},e)}_renderTextInput(){const{Icon:e,accessibilityLabel:t,calculateLength:s,editable:a,errorText:n,helperText:o,invalid:r,label:c,maxLength:p,onBlur:h,onChange:u,onFocus:b,onKeyDown:g,onKeyPress:y,onKeyUp:m,onSubmitEditing:_,showPasswordVisibilityIcon:x,showValidationIcon:f,style:I,type:C,validLength:w,...L}=this.props;return l.a.createElement(v.a,{style:D.container},e&&!this._isLabelLarge()?this._renderIcon():null,l.a.createElement(d.b,{size:"headline1",style:D.wrapper},l.a.createElement(E.a,i()({},L,{editable:a,maxLength:this._getAdjustedMaxLength(),onBlur:this._handleBlur,onChange:this._handleChange,onFocus:this._handleFocus,onKeyDown:this._handleKeyDown,onKeyPress:this._handleKeyPress,onKeyUp:this._handleKeyUp,ref:this._setTextInputRef,style:this._getTextInputStyle(a),type:this._getTextInputType()}))),f&&!this._isLabelLarge()?this._renderValidationIcon():null,this._renderPasswordVisibilityIcon())}_renderPasswordVisibilityIcon(){const{showPasswordVisibilityIcon:e,type:t}=this.props,{isPasswordRevealed:s}=this.state;return"password"===t&&e?l.a.createElement(v.a,{style:z.passwordVisibilityIconContainer},l.a.createElement(p.a,{accessibilityLabel:s?R:S,focusable:!0,hoverLabel:{label:s?R:S},icon:s?l.a.createElement(f.a,null):l.a.createElement(I.a,null),onPress:this._handlePasswordVisibilityClick,size:"smallCompact",type:"primaryText"})):null}_renderHelperText(){return l.a.createElement(v.a,{accessibilityLiveRegion:"polite"},l.a.createElement(d.b,{color:"gray700",size:"subtext2",style:z.subtext},this.props.helperText))}_renderErrorText(){return l.a.createElement(v.a,{accessibilityLiveRegion:"assertive"},l.a.createElement(d.b,{color:"red500",size:"subtext2",style:z.subtext},this.props.errorText))}_renderDisplayCount(){const{displayCount:e}=this.state,t=this._getMaxDisplayCount(),s=this._exceedsValidLength(e),a=t&&b.a.ia24dc8c(t),i=b.a.ia24dc8c(e);return l.a.createElement(v.a,{accessibilityLiveRegion:"polite",style:[z.textInputHeaderItem,z.displayCount]},l.a.createElement(d.b,{color:s?"red500":"gray700",size:"subtext2"},a?`${i} / ${a}`:""))}_renderIcon(){const{Icon:e}=this.props,{isFocused:t}=this.state,s=[z.icon,t&&z.focusedIcon];return e&&l.a.createElement(e,{style:s})}_renderValidationIcon(){return this._isFormInvalid()?l.a.createElement(C.a,{style:[z.validationIcon,h.a.invalidColor]}):l.a.createElement(w.a,{style:[z.validationIcon,h.a.validColor]})}_isFormInvalid(){const{displayCount:e}=this.state;return!!this.props.invalid||this._exceedsValidLength(e)||this._isInvalidNumber()}blur(){this._textInput&&this._textInput.blur()}getValue(){return this._textInput&&this._textInput.getValue()||""}focus(){this._textInput&&this._textInput.focus()}isValidLength(){const e=this.getValue(),t=this._calculateLength(e);return!this._exceedsValidLength(t)}}o()(F,"defaultProps",{autoComplete:"on",autoCorrect:!0,autoFocus:!1,editable:!0,invalid:!1}),F.propTypes={};const D=_.a.create((e=>({container:{flexDirection:"row",flexGrow:1,flexShrink:1,overflow:"hidden",paddingBottom:e.spaces.space8,paddingHorizontal:e.spaces.space8,paddingTop:e.spaces.space12,marginTop:e.spaces.space16},root:{backgroundColor:"transparent",borderRadius:e.borderRadii.none,borderWidth:e.borderWidths.none,boxSizing:"border-box",color:"inherit",fontFamily:"inherit",fontSize:"inherit",textAlign:"inherit",outlineStyle:"none",padding:0},wrapper:{alignItems:"center",display:"flex",fontSize:e.fontSizes.headline2,width:"100%"},disabled:{color:e.colors.gray700}}))),z=_.a.create((e=>({root:{paddingHorizontal:e.componentDimensions.gutterHorizontal,paddingVertical:e.componentDimensions.gutterVertical},textInputFormStyle:{flexDirection:"row"},textInputFormWrapper:{flexGrow:1,flexShrink:1},textInputHeader:{flexDirection:"row",justifyContent:"space-between",position:"absolute",height:"100%",width:"100%"},textInputHeaderItem:{paddingTop:e.spaces.space8,paddingHorizontal:e.spaces.space8,fontSize:"small"},placeholderText:{paddingTop:e.spaces.space16,fontSize:e.fontSizes.headline2,userSelect:"none"},displayCount:{flexGrow:1,alignItems:"flex-end"},sidePadding:{paddingHorizontal:e.spaces.space8},underTextInputForm:{flexDirection:"row"},subtextWrapper:{flexDirection:"column",flex:1,paddingRight:e.spaces.space20,paddingTop:e.spaces.space2},subtext:{alignSelf:"flex-start"},focusedIcon:{color:e.colors.primary},icon:{alignSelf:"center",color:e.colors.gray700,paddingRight:e.spaces.space4},validationIcon:{alignSelf:"center",paddingLeft:e.spaces.space4},transition:{transition:"transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)"},passwordVisibilityIconContainer:{alignSelf:"center",paddingLeft:e.spaces.space4},passwordVisibilityIcon:{color:e.colors.gray700}})))},piX5:function(e,t,s){"use strict";const a=s("rHpw").a.create((e=>({border:{borderRadius:e.borderRadii.small,borderWidth:e.borderWidths.small,borderColor:e.colors.gray200},focusedBorderValid:{boxShadow:`0 0 0 ${e.borderWidths.small} ${e.colors.primary}`,borderColor:e.colors.primary},focusedBorderInvalid:{boxShadow:`0 0 0 ${e.borderWidths.small} ${e.colors.red500}`},invalidBorderColor:{borderColor:e.colors.red500},invalidColor:{color:e.colors.red500},validColor:{color:e.colors.primary},disabled:{cursor:"default",opacity:.5,backgroundColor:e.colors.gray50,borderColor:e.colors.gray50}})));t.a=a},zmS9:function(e,t,s){"use strict";var a=s("ERkP"),i=s.n(a),n=s("3XMw"),o=s.n(n),r=s("J0mu"),l=s("t62R"),c=s("rHpw"),d=s("QbaN");const p=o.a.bfb895b1,h=c.a.create((e=>({icon:{fontSize:e.fontSizes.body,paddingRight:e.spaces.space12,textAlignVertical:"middle"}})));t.a=({onPress:e,scheduledFor:t,testID:s})=>{const a=Object(d.c)(t),n=!!a&&(Object(d.h)(t)&&!Object(d.g)(a)&&!Object(d.f)(a)),o=Boolean(e);return a&&n?i.a.createElement(l.b,{color:"gray700",onPress:e,size:"subtext2",testID:s,withInteractiveStyling:o},i.a.createElement(r.a,{style:h.icon}),p({date:Object(d.b)(a),time:Object(d.i)(a)})):null}}}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose~ondemand.ComposeScheduling~bundle.PlainTextCompose.62b49a15.js.map