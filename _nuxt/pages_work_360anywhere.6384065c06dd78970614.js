webpackJsonp([4],{"0jMF":function(t,e,a){var s=a("qhbP");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("6636613c",s,!1,{sourceMap:!1})},"1GCA":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("IzGr"),i=a("j4wZ"),n=!1;var r=function(t){n||a("0jMF")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-03e93103",null);o.options.__file="pages\\work\\360anywhere.vue",e.default=o.exports},"3Cwb":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},"3VcA":function(t,e,a){"use strict";e.a={data:function(){return{mRotation:0,sRotation:0,mStep:90,sStep:-45}},methods:{rotateCharacters:function(){this.mRotation=(this.mRotation+this.mStep)%360,this.sRotation=(this.sRotation+this.sStep)%360,document.querySelector(".m").style.transform="rotateZ("+this.mRotation+"deg)",document.querySelector(".s").style.transform="rotateZ("+this.sRotation+"deg)"},smoothScroll:function(t){t.preventDefault();var e=t.target.dataset.scrollTo;document.querySelector(e).scrollIntoView({behavior:"smooth"})}}}},"4Twp":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},"6ZqE":function(t,e,a){var s=a("RjWg");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("06f941be",s,!1,{sourceMap:!1})},B0AV:function(t,e,a){var s=a("4Twp");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("300edcd4",s,!1,{sourceMap:!1})},BUvs:function(t,e,a){"use strict";e.a={props:["prevTitle","prevLink","nextTitle","nextLink"]}},ExLz:function(t,e,a){"use strict";var s=a("cmjW"),i=a("h2xj"),n=!1;var r=function(t){n||a("B0AV")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-71636e8d",null);o.options.__file="components\\Section.vue",e.a=o.exports},FnsG:function(t,e,a){"use strict";var s=a("O+IE"),i=a("pvuS"),n=a("VU/8")(s.a,i.a,!1,null,null,null);n.options.__file="components\\PrivacyPolicy.vue",e.a=n.exports},IkvF:function(t,e,a){t.exports=a.p+"img/360anywhere.6cc91b1.jpg"},IzGr:function(t,e,a){"use strict";var s=a("YXP+"),i=a("yqLL"),n=a("Rnqo"),r=a("YokB"),o=a("hq9x"),c=a("ExLz"),l=a("ZHz7");e.a={components:{MyHeader:s.a,MyFooter:i.a,ProjectSummary:n.a,Process:r.a,ProjectSectionText:o.a,ProjectSection:c.a,PrevNext:l.a},data:function(){return{process:{teamSize:5,timeframe:"Jun&ndash;Sep 2017",affiliation:"University of Michigan",roles:["Team/Project Lead","User Research","System Design + Architecture"],process:{Discovery:["literature review","competitive analysis"],Concept:["sketches","storyboards","mind maps","affinity diagrams","wireframes","initial prototype"],"Iterative Implementation (3&times;)":["high-fidelity prototype","user study","kanban"]}}}}}},JUgP:function(t,e,a){"use strict";var s=a("FnsG");e.a={components:{PrivacyPolicy:s.a},methods:{strikeMeDownWithAllYourHatred:function(t){t.preventDefault(),window.toggleNerdMode()}}}},"M+54":function(t,e,a){var s=a("cwES");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("b27719a0",s,!1,{sourceMap:!1})},MnSh:function(t,e,a){t.exports=a.p+"img/360anywhere-detail-2.670a326.jpg"},NGXA:function(t,e,a){"use strict";e.a={props:["title"]}},"O+IE":function(t,e,a){"use strict";e.a={mounted:function(){this.$nextTick(function(){var t,e,a,s=document.querySelector("[src='https://cdn.iubenda.com/iubenda.js']");s&&s.remove(),window,t=document,e=t.createElement("script"),a=t.getElementsByTagName("script")[0],e.src="https://cdn.iubenda.com/iubenda.js",a.parentNode.insertBefore(e,a)})}}},RjWg:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},Rnqo:function(t,e,a){"use strict";var s=a("p/5V"),i=a("bKVv"),n=!1;var r=function(t){n||a("ZdZg")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-08064ece",null);o.options.__file="components\\Summary.vue",e.a=o.exports},XYtp:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cf mt5 mt6-ns mw-90 tl"},[a("div",{staticClass:"fl pa3 w-100 w-50-ns"},[a("div",{staticClass:"ba b--white pa3"},[a("div",{staticClass:"fw7 pb3 ttu"},[t._v("Setting")]),a("div",{staticClass:"indent pb3"},[t._v(t._s(t.data.affiliation))]),a("div",{staticClass:"pb3"},[t._v("Team of "),a("span",{staticClass:"fw7"},[t._v(t._s(t.data.teamSize))])]),a("div",{staticClass:"pb5",domProps:{innerHTML:t._s(t.data.timeframe)}}),a("div",{staticClass:"fw7 pb3 ttu"},[t._v("What I was/did")]),t._l(t.data.roles,function(e){return a("div",{key:e,staticClass:"indent pb3"},[a("span",{domProps:{innerHTML:t._s(e)}})])})],2)]),a("div",{staticClass:"fl pa3 w-100 w-50-ns"},[a("div",{staticClass:"ba b--white pa3"},[a("div",{staticClass:"fw7 pb3 ttu"},[t._v("How the process turned out")]),t._l(t.data.process,function(e,s){return a("div",{key:s,staticClass:"fancy-list"},[a("div",{staticClass:"fw7 pb2",domProps:{innerHTML:t._s(s)}}),a("div",{staticClass:"indent small-caps"},t._l(e,function(e){return a("div",{key:e,domProps:{innerHTML:t._s(e)}})}))])})],2)])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},"YXP+":function(t,e,a){"use strict";var s=a("3VcA"),i=a("h9CM"),n=!1;var r=function(t){n||a("M+54")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-46cf1d15",null);o.options.__file="components\\Header.vue",e.a=o.exports},YokB:function(t,e,a){"use strict";var s=a("Z+9Q"),i=a("XYtp"),n=!1;var r=function(t){n||a("mtv1")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-5b323917",null);o.options.__file="components\\Process.vue",e.a=o.exports},"Z+9Q":function(t,e,a){"use strict";e.a={props:["data"]}},"Z6O+":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},ZHz7:function(t,e,a){"use strict";var s=a("BUvs"),i=a("sX2Q"),n=!1;var r=function(t){n||a("fdkI")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-53ba69ce",null);o.options.__file="components\\PrevNext.vue",e.a=o.exports},ZdZg:function(t,e,a){var s=a("bQGt");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("4683f1ba",s,!1,{sourceMap:!1})},bKVv:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dib f3 f1-ns fw6 measure-wide tl w-100"},[this._v("\n  "+this._s(this.title)+"\n  "),e("div",{staticClass:"f4 f3-ns fw4 lh-title mt4"},[this._t("default")],2)])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},bQGt:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},cmjW:function(t,e,a){"use strict";e.a={props:[]}},cwES:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".rotate[data-v-46cf1d15]{display:inline-block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .5s;transition:all .5s}",""])},"e+Ux":function(t,e,a){t.exports=a.p+"img/360anywhere-detail-3.d7182d1.jpg"},fWyS:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"cf lh-copy mt6"},[a("div",{staticClass:"fl w-100 w-50-ns tc tl-ns"},[t._v("\n    Made with "),a("i",{staticClass:"fas fa-coffee"}),t._v(" in "),a("span",{staticClass:"fw4"},[t._v("Ann Arbor.")]),a("br"),t._v("\n    Powered by "),a("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" and "),a("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[t._v("Tachyons")]),t._v(".\n    "),a("div",{staticClass:"mt4"},[a("privacy-policy")],1)]),a("div",{staticClass:"fl mt4 mt0-ns w-100 w-50-ns tc tr-ns"},[a("div",{staticClass:"social-media"},[t._m(0),t._m(1),t._m(2),a("a",{staticClass:"dim",attrs:{href:"#"},on:{click:t.strikeMeDownWithAllYourHatred}},[a("i",{staticClass:"fab fa-sith fa-2x mh2"})]),t._m(3)])])])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/profile/Maximilian_Speicher"}},[e("i",{staticClass:"fab fa-researchgate fa-2x mh2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://www.linkedin.com/in/maximilianspeicher/"}},[e("i",{staticClass:"fab fa-linkedin-in fa-2x mh2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://github.com/maxspeicher/"}},[e("i",{staticClass:"fab fa-github fa-2x mh2"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"dim",attrs:{href:"https://medium.com/@maxspeicher"}},[e("i",{staticClass:"fab fa-medium-m fa-2x mh2"})])}]};e.a=i},fdkI:function(t,e,a){var s=a("Z6O+");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("4299e948",s,!1,{sourceMap:!1})},gVNN:function(t,e,a){t.exports=a.p+"img/360anywhere-mockups.53b42df.png"},h2xj:function(t,e,a){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mt5 mt6-ns"},[this._t("default")],2)};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},h9CM:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"cf mb6"},[a("div",{staticClass:"abril f3 fl tl w-100 w-50-ns"},[a("div",{staticClass:"dib",on:{mouseenter:t.rotateCharacters}},[a("nuxt-link",{attrs:{to:"/"}},[a("span",{staticClass:"rotate m"},[t._v("M")]),t._v("aximilian\n            "),a("span",{staticClass:"nowrap"},[a("span",{staticClass:"rotate s"},[t._v("S")]),t._v("peicher.\n            ")])])],1)]),a("div",{staticClass:"menu dt fl fw4 mt2 mt0-ns pt2-ns tl tr-ns w-100 w-50-ns"},[a("span",{staticClass:"dib mb2-m"},[a("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" \n      ")],1),a("span",{staticClass:"dib mb2-m pl4"},[a("nuxt-link",{attrs:{to:"/#work","data-scroll-to":"#work"},nativeOn:{click:function(e){return t.smoothScroll(e)}}},[t._v("Work")]),t._v(" \n      ")],1),a("span",{staticClass:"dib pl4"},[a("nuxt-link",{attrs:{to:"/#publications","data-scroll-to":"#publications"},nativeOn:{click:function(e){return t.smoothScroll(e)}}},[t._v("Publications")]),t._v(" \n      ")],1)])])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},hq9x:function(t,e,a){"use strict";var s=a("NGXA"),i=a("uQhc"),n=!1;var r=function(t){n||a("6ZqE")},o=a("VU/8")(s.a,i.a,!1,r,"data-v-0beab6da",null);o.options.__file="components\\SectionText.vue",e.a=o.exports},j4wZ:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"template-container"},[t._m(0),s("div",{staticClass:"template-container-inner pa3 pa5-ns tc"},[s("div",{staticClass:"on-top"},[s("my-header"),s("project-summary",{attrs:{title:"360Anywhere"}},[t._v("\n        In this research project, we wanted to merge the physical and digital worlds by providing a\n        collaboration tool that combines 360° video and augmented reality.\n        Imagine a meeting room that is live-streamed to remote meeting participants in 360° and whatever\n        they draw into the live stream appears in the actual room."),s("br"),s("br"),t._v("\n        A full research paper about 360Anywhere has been accepted at\n        "),s("a",{attrs:{href:"http://eics.acm.org/2018/"}},[t._v("EICS 2018")]),t._v(".\n      ")]),s("process",{attrs:{data:t.process}}),s("project-section-text",{attrs:{title:"Identifying Challenges."}},[t._v("\n        Both 360° videos and augmented reality are really powerful for remote collaboration.\n        Yet, their full potential had not been made use of so far.\n        Through a "),s("span",{staticClass:"fw4 small-caps"},[t._v("literature review")]),t._v(" and\n        "),s("span",{staticClass:"fw4 small-caps"},[t._v("competitive analysis")]),t._v(" (including Skype on HoloLens, \n        Sketchboard.io, and Chalk by Vuforia), we found a number of unresolved challenges, the most\n        important of which were:\n        "),s("ul",[s("li",[t._v("360° video and AR had not been combined before.")]),s("li",[t._v("Users are often not aware of where others are looking in a 360° video.")]),s("li",[t._v("Users are often looking into different directions.")])])]),s("project-section",[s("img",{attrs:{src:a("gVNN")}})]),s("project-section-text",{attrs:{title:"Finding a Solution."}},[t._v("\n        Making use of standard methods—"),s("span",{staticClass:"fw4 small-caps"},[t._v("sketching")]),t._v(",\n        "),s("span",{staticClass:"fw4 small-caps"},[t._v("storyboards")]),t._v(", "),s("span",{staticClass:"fw4 small-caps"},[t._v("mind maps")]),t._v(", and\n        "),s("span",{staticClass:"fw4 small-caps"},[t._v("affinity diagrams")]),t._v("—we brainstormed a range of scenarios\n        and solutions and also created initial "),s("span",{staticClass:"fw4 small-caps"},[t._v("wireframes")]),t._v(".\n        We soon noticed that there is no one-size-fits-all solution for all remote collaboration scenarios.\n        Therefore, we decided for a component-based solution that lets users design just the system they\n        need.\n        A second important requirement was as little hardware as possible to address a wide range of\n        potential users.\n      ")]),s("project-section",{staticClass:"cf"},[s("div",{staticClass:"fl pa2 w-100 w-50-ns"},[s("img",{staticClass:"shadow",attrs:{src:a("MnSh")}})]),s("div",{staticClass:"fl pa2 w-100 w-50-ns"},[s("img",{staticClass:"shadow",attrs:{src:a("e+Ux")}})])]),s("project-section-text",{attrs:{title:"Building and Testing 360&shy;Any&shy;where."}},[t._v("\n        Starting with an initial prototype based on A-Frame, "),s("span",{staticClass:"script"},[t._v("360Anywhere")]),t._v(" was\n        built in three "),s("span",{staticClass:"fw4 small-caps"},[t._v("iterations")]),t._v(", each with a\n        "),s("span",{staticClass:"fw4 small-caps"},[t._v("user study")]),t._v(" at the end.\n        Based on these tests as well as the challenges and requirements we had identified earlier in the\n        process, we ultimately created a system that (among other things) provides the following components\n        that can be activated based on users' needs:\n        "),s("ul",[s("li",[t._v("Gaze cones to indicate where other users are looking in the 360° live stream,")]),s("li",[t._v("a function to "),s("q",[t._v("take over")]),t._v(" the stream and force everyone to look in the same direction, and")]),s("li",[t._v("the possibility to add text, images, videos, and drawings to the 360° live stream.")])]),t._v("\n        However, most importantly, when a projector is available, the system can be set up to support\n        "),s("span",{staticClass:"fw4"},[t._v("projective augmented reality")]),t._v(".\n        That is, whatever is drawn into such a projective region in the 360° live stream appears at the\n        exact position in the room and can be saved for later sessions.\n        In this way, we can create interactive whiteboards onto which both local and remote meeting\n        participants can draw."),s("br"),s("br"),t._v("\n        The "),s("span",{staticClass:"fw4 small-caps"},[t._v("user studies")]),t._v(" were carried out with one group of three\n        and two groups of four and were intended to identify usability issues and explore more potential\n        scenarios.\n        Our participants were presented with three tasks to be solved in a group and afterwards filled out\n        a post-study questionnaire and gave open-ended feedback.\n        The studies suggest that our system can solve the existing challenges and be applied to a wide\n        range of scenarios."),s("br"),s("br"),t._v("\n        Overall, setting up 360Anywhere requires only a laptop, a 360° camera, and (optionally) a projector.\n      ")]),s("prev-next",{attrs:{prevTitle:"",prevLink:"",nextTitle:"Gesture&shy;Wiz",nextLink:"gesturewiz"}}),s("my-footer")],1)])])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-image"},[e("div",{staticClass:"gradient"})])}]};e.a=i},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},mtv1:function(t,e,a){var s=a("3Cwb");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("ae5b1ccc",s,!1,{sourceMap:!1})},"p/5V":function(t,e,a){"use strict";e.a={props:["title"]}},pvuS:function(t,e,a){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"iubenda-white iubenda-embed ",attrs:{href:"https://www.iubenda.com/privacy-policy/16529602",title:"Privacy Policy"}},[this._v("Privacy Policy")])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},qhbP:function(t,e,a){var s=a("kxFB");(t.exports=a("FZ+f")(!1)).push([t.i,".template-container[data-v-03e93103]{background-color:#2c3e50;color:ivory}.template-container[data-v-03e93103] a{color:ivory}.bg-image[data-v-03e93103]{background-image:url("+s(a("IkvF"))+")}.gradient[data-v-03e93103]{background-image:-webkit-gradient(linear,left top,left bottom,color-stop(30%,rgba(44,62,80,0)),to(#2c3e50));background-image:linear-gradient(rgba(44,62,80,0) 30%,#2c3e50)}",""])},sX2Q:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"prev-next dt f5 f4-m f3-l fw7 mt5 mt6-ns tl w-100"},[a("div",{staticClass:"dtc tl v-btm w-50"},[t.prevTitle&&t.prevLink?a("nuxt-link",{attrs:{to:"/work/"+t.prevLink}},[a("i",{staticClass:"fas fa-angle-left mr2"}),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.prevTitle)}})]):a("span",[t._v(" ")])],1),a("div",{staticClass:"dtc tr v-btm w-50"},[t.nextTitle&&t.nextLink?a("nuxt-link",{attrs:{to:"/work/"+t.nextLink}},[a("span",{domProps:{innerHTML:t._s(t.nextTitle)}}),t._v(" "),a("i",{staticClass:"fas fa-angle-right ml2"})]):t._e()],1)])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},uQhc:function(t,e,a){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cf lh-copy mt5 mt6-ns tl"},[e("div",{staticClass:"f3 fl fw4 mb3 mb0-ns pr3-ns w-100 w-third-m w-25-l"},[e("span",{domProps:{innerHTML:this._s(this.title)}})]),e("div",{staticClass:"fl w-100 w-two-thirds-m w-75-l"},[this._t("default")],2)])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i},yqLL:function(t,e,a){"use strict";var s=a("JUgP"),i=a("fWyS"),n=a("VU/8")(s.a,i.a,!1,null,null,null);n.options.__file="components\\Footer.vue",e.a=n.exports}});