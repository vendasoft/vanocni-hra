import './polyfills.server.mjs';
import{A as z,B as f,C as g,D as H,E as U,F as $,G as K,H as Z,I as O,J as W,K as S,R as vt,S as F,U as yt,V as w,W as Et,X as It,Y as wt,Z as xt,a as ct,aa as Dt,b as dt,c as N,d as lt,e as ut,f as ht,g as mt,ga as At,h as pt,i as ft,j as gt,k as u,l as h,m as x,n as c,o as P,p as b,q as m,r as I,s as _t,t as bt,u as D,v as A,w as R,x as k,y as B,z as V}from"./chunk-KH4RF47Q.mjs";import{a as E}from"./chunk-KRLCULJA.mjs";var Y;try{Y=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Y=!1}var T=(()=>{let t=class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?Et(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Y)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(c(_t))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var C;function Jt(){if(C==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>C=!0}))}finally{C=C||!1}return C}function G(i){return Jt()?i:!!i.capture}function kt(i){return i.composedPath?i.composedPath()[0]:i.target}function Ct(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function q(i){return Array.isArray(i)?i:[i]}function X(i){return i instanceof D?i.nativeElement:i}var Mt=new Set,y,te=(()=>{let t=class t{constructor(e,n){this._platform=e,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):ie}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&ee(e,this._nonce),this._matchMedia(e)}};t.\u0275fac=function(n){return new(n||t)(c(T),c(bt,8))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function ee(i,t){if(!Mt.has(i))try{y||(y=document.createElement("style"),t&&(y.nonce=t),y.setAttribute("type","text/css"),document.head.appendChild(y)),y.sheet&&(y.sheet.insertRule(`@media ${i} {body{ }}`,0),Mt.add(i))}catch(s){console.error(s)}}function ie(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var Ot=(()=>{let t=class t{constructor(e,n){this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new dt}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Rt(q(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Rt(q(e)).map(d=>this._registerQuery(d).observable),o=lt(r);return o=ut(o.pipe(mt(1)),o.pipe(pt(1),ht(0))),o.pipe(N(d=>{let l={matches:!1,breakpoints:{}};return d.forEach(({matches:p,query:a})=>{l.matches=l.matches||p,l.breakpoints[a]=p}),l}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),o={observable:new ct(d=>{let l=p=>this._zone.run(()=>d.next(p));return n.addListener(l),()=>{n.removeListener(l)}}).pipe(ft(n),N(({matches:d})=>({query:e,matches:d})),gt(this._destroySubject)),mql:n};return this._queries.set(e,o),o}};t.\u0275fac=function(n){return new(n||t)(c(te),c(k))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();function Rt(i){return i.map(t=>t.split(",")).reduce((t,s)=>t.concat(s)).map(t=>t.trim())}function jt(i){return i.buttons===0||i.detail===0}function Lt(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var St="cdk-high-contrast-black-on-white",Ft="cdk-high-contrast-white-on-black",Q="cdk-high-contrast-active",Nt=(()=>{let t=class t{constructor(e,n){this._platform=e,this._document=n,this._breakpointSubscription=P(Ot).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return 0;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let n=this._document.defaultView||window,r=n&&n.getComputedStyle?n.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return 2;case"rgb(255,255,255)":case"rgb(255,250,239)":return 1}return 0}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Q,St,Ft),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===1?e.add(Q,St):n===2&&e.add(Q,Ft)}}};t.\u0275fac=function(n){return new(n||t)(c(T),c(F))},t.\u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();var J=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m({type:t}),t.\u0275inj=h({});let i=t;return i})();function de(){return!0}var le=new x("mat-sanity-checks",{providedIn:"root",factory:de}),it=(()=>{let t=class t{constructor(e,n,r){this._sanityChecks=n,this._document=r,this._hasDoneGlobalChecks=!1,e._applyBodyHighContrastModeCssClasses(),this._hasDoneGlobalChecks||(this._hasDoneGlobalChecks=!0)}_checkIsEnabled(e){return Ct()?!1:typeof this._sanityChecks=="boolean"?this._sanityChecks:!!this._sanityChecks[e]}};t.\u0275fac=function(n){return new(n||t)(c(Nt),c(le,8),c(F))},t.\u0275mod=m({type:t}),t.\u0275inj=h({imports:[J,J]});let i=t;return i})();var tt=class{constructor(t,s,e,n=!1){this._renderer=t,this.element=s,this.config=e,this._animationForciblyDisabledThroughCss=n,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}},Pt=G({passive:!0,capture:!0}),et=class{constructor(){this._events=new Map,this._delegateEventHandler=t=>{let s=kt(t);s&&this._events.get(t.type)?.forEach((e,n)=>{(n===s||n.contains(s))&&e.forEach(r=>r.handleEvent(t))})}}addHandler(t,s,e,n){let r=this._events.get(s);if(r){let o=r.get(e);o?o.add(n):r.set(e,new Set([n]))}else this._events.set(s,new Map([[e,new Set([n])]])),t.runOutsideAngular(()=>{document.addEventListener(s,this._delegateEventHandler,Pt)})}removeHandler(t,s,e){let n=this._events.get(t);if(!n)return;let r=n.get(s);r&&(r.delete(e),r.size===0&&n.delete(s),n.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,Pt)))}},Bt={enterDuration:225,exitDuration:150},ue=800,Vt=G({passive:!0,capture:!0}),zt=["mousedown","touchstart"],Ht=["mouseup","mouseleave","touchend","touchcancel"],M=class M{constructor(t,s,e,n){this._target=t,this._ngZone=s,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=X(e))}fadeInRipple(t,s,e={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=E(E({},Bt),e.animation);e.centered&&(t=n.left+n.width/2,s=n.top+n.height/2);let o=e.radius||he(t,s,n),d=t-n.left,l=s-n.top,p=r.enterDuration,a=document.createElement("div");a.classList.add("mat-ripple-element"),a.style.left=`${d-o}px`,a.style.top=`${l-o}px`,a.style.height=`${o*2}px`,a.style.width=`${o*2}px`,e.color!=null&&(a.style.backgroundColor=e.color),a.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(a);let nt=window.getComputedStyle(a),Qt=nt.transitionProperty,st=nt.transitionDuration,L=Qt==="none"||st==="0s"||st==="0s, 0s"||n.width===0&&n.height===0,_=new tt(this,a,e,L);a.style.transform="scale3d(1, 1, 1)",_.state=0,e.persistent||(this._mostRecentTransientRipple=_);let rt=null;return!L&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let ot=()=>this._finishRippleTransition(_),at=()=>this._destroyRipple(_);a.addEventListener("transitionend",ot),a.addEventListener("transitioncancel",at),rt={onTransitionEnd:ot,onTransitionCancel:at}}),this._activeRipples.set(_,rt),(L||!p)&&this._finishRippleTransition(_),_}fadeOutRipple(t){if(t.state===2||t.state===3)return;let s=t.element,e=E(E({},Bt),t.config.animation);s.style.transitionDuration=`${e.exitDuration}ms`,s.style.opacity="0",t.state=2,(t._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let s=X(t);!this._platform.isBrowser||!s||s===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=s,zt.forEach(e=>{M._eventManager.addHandler(this._ngZone,e,s,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Ht.forEach(s=>{this._triggerElement.addEventListener(s,this,Vt)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===0?this._startFadeOutTransition(t):t.state===2&&this._destroyRipple(t)}_startFadeOutTransition(t){let s=t===this._mostRecentTransientRipple,{persistent:e}=t.config;t.state=1,!e&&(!s||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let s=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=3,s!==null&&(t.element.removeEventListener("transitionend",s.onTransitionEnd),t.element.removeEventListener("transitioncancel",s.onTransitionCancel)),t.element.remove()}_onMousedown(t){let s=jt(t),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ue;!this._target.rippleDisabled&&!s&&!e&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Lt(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let s=t.changedTouches;if(s)for(let e=0;e<s.length;e++)this.fadeInRipple(s[e].clientX,s[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let s=t.state===1||t.config.terminateOnPointerUp&&t.state===0;!t.config.persistent&&s&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(zt.forEach(s=>M._eventManager.removeHandler(s,t,this)),this._pointerUpEventsRegistered&&Ht.forEach(s=>t.removeEventListener(s,this,Vt)))}};M._eventManager=new et;var Ut=M;function he(i,t,s){let e=Math.max(Math.abs(i-s.left),Math.abs(i-s.right)),n=Math.max(Math.abs(t-s.top),Math.abs(t-s.bottom));return Math.sqrt(e*e+n*n)}var me=["*"];var pe=new x("MAT_CARD_CONFIG"),$t=(()=>{let t=class t{constructor(e){this.appearance=e?.appearance||"raised"}};t.\u0275fac=function(n){return new(n||t)(R(pe,8))},t.\u0275cmp=b({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(n,r){n&2&&V("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:me,decls:1,vars:0,template:function(n,r){n&1&&(K(),Z(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0});let i=t;return i})(),Kt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=I({type:t,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]});let i=t;return i})();var Zt=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=I({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]});let i=t;return i})();var j=(()=>{let t=class t{};t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=m({type:t}),t.\u0275inj=h({imports:[it,w,it]});let i=t;return i})();function ge(i,t){if(i&1&&(f(0,"mat-card-content")(1,"p"),O(2),g()()),i&2){let s=$();A(2),W(s.content)}}var Wt=(()=>{let t=class t{constructor(){this.title="",this.content="",this.isContentVisible=!1}toggleContent(){this.isContentVisible=!this.isContentVisible}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b({type:t,selectors:[["app-card"]],inputs:{title:"title",content:"content"},standalone:!0,features:[S],decls:5,vars:2,consts:[[3,"click"],[4,"ngIf"]],template:function(n,r){n&1&&(f(0,"mat-card",0),U("click",function(){return r.toggleContent()}),f(1,"mat-card-title")(2,"h2"),O(3),g()(),z(4,ge,3,1,"mat-card-content",1),g()),n&2&&(A(3),W(r.title),A(1),B("ngIf",r.isContentVisible))},dependencies:[w,yt,j,$t,Zt,Kt],styles:["mat-card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px;margin:10px;cursor:pointer;text-align:center}"]});let i=t;return i})();var Yt=(()=>{let t=class t{constructor(){this.title="napoveda",this.items=["Hadanky"],this.isContentVisible=!1}toggleContent(){this.isContentVisible=!this.isContentVisible}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b({type:t,selectors:[["app-root"]],standalone:!0,features:[S],decls:29,vars:0,consts:[[1,"main"],[1,"content"],["title","H\xE1danky: Co se vyskytuje jednou v minut\u011B, dvakr\xE1t v moment\u011B, ale ani jednou v roce?","content","Pismeno 'M'"],["title","H\xE1danky: Tloustnu a hubnu ze vzduchu, \u0161tamgasta zvol\xE1 ejchuchu. Nos\xEDm se jak mimino, \u017Eebra stoj\xED v domino.","content","Harmonika"],["title","H\xE1danky: Jen p\u016Fl roku pracuji, do \u017Eeber si pumpuji. D\u011Bv\u010De svl\xE9knu b\u011Bhem chvilky, sta\u010D\xED pustit v\xEDce \u017Eilky. Plyn, proud i ta voda je mou krevn\xED skupinou, p\u0159ijde-li v\u0161ak velk\xE1 vada, \u0161krtni sirkou jedinou.","content","Topen\xED"],["title","H\xE1danky: Chod\xED k n\xE1m moudr\xE1 p\xE1n, br\xFDle m\xE1 kulat\xE9, snad proto toho tolik v\xED, snad proto v\u0161echno najde.","content","Google"],["title","H\xE1danky: Jsem na nebi a v kapse, kdo se ztrat\xED, r\xE1d m\u011B najde.","content","GPS"],["title","H\xE1danky: Jak\xE9 slovo obsahuje 26 p\xEDsmen, ale m\xE1 jen 4 slabiky.","content","Abeceda"],["title","\u0160ifra 1. Napoveda","content","\u0160ifrujeme podle tabulek pod textem. Abychom rozeznali podle kter\xE9 tabulky \u0161ifrujeme, p\xED\u0161eme doprost\u0159ed \u0161ifry te\u010Dky, kter\xE9 jsou pod tabulkama. P\u0159.: prvn\xED tabulky \u017E\xE1dnou u druh\xE9 jednu a u t\u0159et\xED dv\u011B te\u010Dky."],["title","\u0160ifra 2. Napoveda","content","M\xEDsto p\xEDsmene, kter\xE9 chceme za\u0161ifrovat nakresl\xEDme \u010D\xE1ry, kter\xE9 jsou okolo p\xEDsmene."],["title","\u0160ifra Tajenka","content","Alespo\u0148 jednou za rok nav\u0161tiv m\xEDsto, kde jsi nikdy p\u0159ed t\xEDm nebyl."],["title","Slep\xE1 mapa 1:","content","Karlovy Vary"],["title","Slep\xE1 mapa 2:","content","Brno"],["title","Slep\xE1 mapa 3:","content","\u010Cesk\xE9 Bud\u011Bjovice"],["title","Slep\xE1 mapa 4:","content","Havl\xED\u010Dk\u016Fv Brod"],["title","Slep\xE1 mapa 5:","content","Olomouc"],["title","Slep\xE1 mapa 6:","content","Znojmo"],["title","Osmism\u011Brka tajenka","content","Kolikr\xE1t"],["title","Homonima 1:","content","Los"],["title","Homonima 2:","content","Kolej"],["title","Homonima 3:","content","Stopky"],["title","Homonima 4:","content","Pas"],["title","Homonima 5:","content","Koruna"],["title","Homonima 6:","content","V\u011Btrn\xEDk"],["title","Homonima 7:","content","Pol\u0161t\xE1\u0159"],["title","Piktogramy 1:","content","\u010Cty\u0159i vra\u017Edy sta\u010D\xE1 drahou\u0161ku"],["title","Piktogramy 2:","content","T\u0159i o\u0159\xED\u0161ky pro popelku"],["title","Piktogramy 3:","content","Slunce seno jahody"],["title","Piktogramy 4:","content","Jak se bud\xED princezny"]],template:function(n,r){n&1&&(f(0,"main",0)(1,"div",1),H(2,"app-card",2)(3,"app-card",3)(4,"app-card",4)(5,"app-card",5)(6,"app-card",6)(7,"app-card",7)(8,"app-card",8)(9,"app-card",9)(10,"app-card",10)(11,"app-card",11)(12,"app-card",12)(13,"app-card",13)(14,"app-card",14)(15,"app-card",15)(16,"app-card",16)(17,"app-card",17)(18,"app-card",18)(19,"app-card",19)(20,"app-card",20)(21,"app-card",21)(22,"app-card",22)(23,"app-card",23)(24,"app-card",24)(25,"app-card",25)(26,"app-card",26)(27,"app-card",27)(28,"app-card",28),g()())},dependencies:[w,Wt,j],styles:["mat-card[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px;margin:10px;cursor:pointer;text-align:center}"]});let i=t;return i})();var Gt=[];var qt={providers:[At(Gt),xt(),wt()]};var _e={providers:[Dt()]},Xt=vt(qt,_e);var be=()=>It(Yt,Xt),an=be;export{an as a};
