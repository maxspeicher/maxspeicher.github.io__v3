webpackJsonp([5],{"/TYz":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("0qDp"),e=a("iA8U"),n=!1;var r=function(t){n||a("S5nK")},o=a("VU/8")(i.a,e.a,!1,r,null,null);o.options.__file="pages\\index.vue",s.default=o.exports},"0qDp":function(t,s,a){"use strict";var i=a("fzEs"),e=a("YXP+"),n=a("yqLL"),r=a("dJon"),o=a("M4X/"),c=a("OLt4");s.a={asyncData:function(t){return i.a},components:{MyHeader:e.a,MyFooter:n.a,Box:r.a,BackToTop:o.a,MyArticle:c.a},data:function(){return{isMoreDisplayed:!1}},layout:"default",methods:{displayMore:function(t){t.preventDefault(),this.isMoreDisplayed=!0}}}},"27cA":function(t,s,a){t.exports=a.p+"img/w3touch-thumb.0fe3738.jpg"},"3VcA":function(t,s,a){"use strict";s.a={data:function(){return{mRotation:0,sRotation:0,mStep:90,sStep:-45}},methods:{rotateCharacters:function(){this.mRotation=(this.mRotation+this.mStep)%360,this.sRotation=(this.sRotation+this.sStep)%360,document.querySelector(".m").style.transform="rotateZ("+this.mRotation+"deg)",document.querySelector(".s").style.transform="rotateZ("+this.sRotation+"deg)"},smoothScroll:function(t){t.preventDefault();var s=t.target.dataset.scrollTo;document.querySelector(s)&&document.querySelector(s).scrollIntoView({behavior:"smooth"})}}}},"42wM":function(t,s,a){var i=a("wMmA");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("ea0723f8",i,!1,{sourceMap:!1})},"8j31":function(t,s,a){var i=a("X0SS");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("b49d1b26",i,!1,{sourceMap:!1})},FnsG:function(t,s,a){"use strict";var i=a("O+IE"),e=a("pvuS"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="components\\PrivacyPolicy.vue",s.a=n.exports},ImTp:function(t,s,a){var i=a("kxFB");(t.exports=a("FZ+f")(!1)).push([t.i,".box-360anywhere{background-image:url("+i(a("mqNq"))+")}.box-gesturewiz{background-image:url("+i(a("tYDd"))+")}.box-holobuilder{background-image:url("+i(a("ZB2x"))+")}.box-sio{background-image:url("+i(a("yZUI"))+")}.box-w3touch{background-image:url("+i(a("27cA"))+")}",""])},JUgP:function(t,s,a){"use strict";var i=a("FnsG");s.a={components:{PrivacyPolicy:i.a},methods:{strikeMeDownWithAllYourHatred:function(t){t.preventDefault(),window.toggle90sMode()}}}},"M+54":function(t,s,a){var i=a("cwES");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("b27719a0",i,!1,{sourceMap:!1})},"M4X/":function(t,s,a){"use strict";var i=a("d9lI"),e=a("rAk6"),n=!1;var r=function(t){n||a("8j31")},o=a("VU/8")(i.a,e.a,!1,r,null,null);o.options.__file="components\\BackToTop.vue",s.a=o.exports},"O+IE":function(t,s,a){"use strict";s.a={mounted:function(){this.$nextTick(function(){var t,s,a,i=document.querySelector("[src='https://cdn.iubenda.com/iubenda.js']");i&&i.remove(),window,t=document,s=t.createElement("script"),a=t.getElementsByTagName("script")[0],s.src="https://cdn.iubenda.com/iubenda.js",a.parentNode.insertBefore(s,a)})}}},OLt4:function(t,s,a){"use strict";var i=a("hdWZ"),e=a("WD9v"),n=!1;var r=function(t){n||a("42wM")},o=a("VU/8")(i.a,e.a,!1,r,"data-v-7fe54c1e",null);o.options.__file="components\\Article.vue",s.a=o.exports},Q8pV:function(t,s,a){var i=a("yIBr");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("7c16afe4",i,!1,{sourceMap:!1})},S5nK:function(t,s,a){var i=a("ImTp");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("707df2a8",i,!1,{sourceMap:!1})},WD9v:function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mb4"},[s("div",{staticClass:"f4 fw4 lh-title mb3"},[s("a",{staticClass:"dim",attrs:{href:this.link}},[this._v(this._s(this.title))])]),s("div",{staticClass:"lh-copy"},[this._v("\n      "+this._s(this.publication)+"\n  ")])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},X0SS:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".back-to-top{bottom:1em;position:fixed;right:1em}",""])},"YXP+":function(t,s,a){"use strict";var i=a("3VcA"),e=a("h9CM"),n=!1;var r=function(t){n||a("M+54")},o=a("VU/8")(i.a,e.a,!1,r,"data-v-46cf1d15",null);o.options.__file="components\\Header.vue",s.a=o.exports},ZB2x:function(t,s,a){t.exports=a.p+"img/holobuilder-thumb.76105b4.jpg"},cwES:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,".rotate[data-v-46cf1d15]{display:inline-block;-webkit-transform-origin:center;transform-origin:center;-webkit-transition:all .5s;transition:all .5s}",""])},d9lI:function(t,s,a){"use strict";s.a={methods:{smoothScroll:function(t){t.preventDefault(),window.scrollTo({behavior:"smooth",left:0,top:0})}}}},dJon:function(t,s,a){"use strict";var i=a("zSu8"),e=a("f/c0"),n=!1;var r=function(t){n||a("Q8pV")},o=a("VU/8")(i.a,e.a,!1,r,"data-v-5359d273",null);o.options.__file="components\\Box.vue",s.a=o.exports},"f/c0":function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[s("div",{class:"box f2 f3-m fw6 w-100 box-"+this.id},[s("div",{staticClass:"box-padding"}),s("nuxt-link",{staticClass:"box-inner color-background",attrs:{to:"/work/"+this.id}},[s("div",{staticClass:"center pa2 w-100"},[s("span",{domProps:{innerHTML:this._s(this.title)}}),s("div",{staticClass:"separator-thin"}),s("span",{staticClass:"f3 f4-m fw2",domProps:{innerHTML:this._s(this.topic)}})])])],1)])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},fWyS:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("footer",{staticClass:"cf lh-copy mt6"},[a("div",{staticClass:"fl w-100 w-50-ns tc tl-ns"},[t._v("\n    Made with "),a("i",{staticClass:"fas fa-coffee"}),t._v(" in "),a("span",{staticClass:"fw4"},[t._v("Ann Arbor.")]),a("br"),t._v("\n    Powered by "),a("a",{attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Nuxt.js")]),t._v(" and "),a("a",{attrs:{href:"http://tachyons.io/",target:"_blank"}},[t._v("Tachyons")]),t._v(".\n    "),a("div",{staticClass:"mt4"},[a("privacy-policy")],1)]),a("div",{staticClass:"fl mt4 mt0-ns w-100 w-50-ns tc tr-ns"},[a("div",{staticClass:"social-media"},[t._m(0),t._m(1),t._m(2),a("a",{staticClass:"dim",attrs:{href:"#"},on:{click:t.strikeMeDownWithAllYourHatred}},[a("i",{staticClass:"fab fa-sith fa-2x mh2"})]),t._m(3)])])])};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/profile/Maximilian_Speicher"}},[s("i",{staticClass:"fab fa-researchgate fa-2x mh2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://www.linkedin.com/in/maximilianspeicher/"}},[s("i",{staticClass:"fab fa-linkedin-in fa-2x mh2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://github.com/maxspeicher/"}},[s("i",{staticClass:"fab fa-github fa-2x mh2"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"dim",attrs:{href:"https://medium.com/@maxspeicher"}},[s("i",{staticClass:"fab fa-medium-m fa-2x mh2"})])}]};s.a=e},fzEs:function(t,s,a){"use strict";for(var i={projects:[{id:"vfl-wehbach",occupation:"Owner",place:"Old West Site Usability",name:"VfL-Wehbach.de",year:2018,timeFrame:"since April 2018",teamSize:1,roles:["Design","Consulting"],summary:"",process:[{id:"step1",title:"Requirements Elicitation",description:"\n                        Blah blah blah\n                    "},{id:"step2",title:"Step 2",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."},{id:"step3",title:"Step 3",description:"Ducimus quasi eos quo vel tenetur. Quia et sequi velit sunt autem facilis. Doloribus non corporis modi sunt exercitationem sint. Aliquid sit quo illo qui et fugit. Delectus cum itaque eos. Autem aut natus nihil eos."}]},{id:"gesturewiz",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"GestureWiz",roles:["Project Lead","Design","Code"]},{id:"xd-ar",occupation:"Research Fellow",place:"University of Michigan",year:2017,name:"XD-AR",roles:["Project Lead","Design"]},{id:"floorplan",occupation:"VP of Data Analytics",place:"bitstars GmbH",year:2016,name:"Floor Plan Feature for HoloBuilder.com",roles:["Feature Ownership","Interaction Design"]},{id:"sio",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2016,name:"Search Interaction Optimization",roles:["Project Lead","Design","Code"]},{id:"sos",occupation:"Industrial Ph.D. Student",place:"Unister GmbH",year:2015,name:"SERP Optimization Suite",roles:["Project Lead","Design","Code"]},{id:"w3touch",occupation:"Master's Student",place:"ETH Zürich",year:2012,name:"W3Touch",roles:["Design","Code"]},{id:"crowdadapt",occupation:"Research Assistant",place:"ETH Zürich",year:2011,name:"CrowdAdapt",roles:["Design","Code"]}],byOccupation:{},byOccupationKeys:[],byYear:{},byYearKeys:[]},e=0;e<i.projects.length;++e){var n=i.projects[e],r=n.occupation+" @ "+n.place;i.byOccupation[r]||(i.byOccupation[r]=[],i.byOccupationKeys.push(r)),i.byOccupation[r].push({id:n.id,name:n.name}),i.byYear[n.year]||(i.byYear[n.year]=[],i.byYearKeys.push(n.year)),i.byYear[n.year].push({id:n.id,name:n.name})}s.a=i},h9CM:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"cf mb6"},[a("div",{staticClass:"abril f3 fl tl w-100 w-50-ns"},[a("div",{staticClass:"dib",on:{mouseenter:t.rotateCharacters}},[a("nuxt-link",{attrs:{to:"/"}},[a("span",{staticClass:"rotate m"},[t._v("M")]),t._v("aximilian\n            "),a("span",{staticClass:"nowrap"},[a("span",{staticClass:"rotate s"},[t._v("S")]),t._v("peicher.\n            ")])])],1)]),a("div",{staticClass:"menu dt fl fw4 mt2 mt0-ns pt2-ns tl tr-ns w-100 w-50-ns"},[a("span",{staticClass:"dib mb2-m"},[a("nuxt-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" \n      ")],1),a("span",{staticClass:"dib mb2-m pl4"},[a("nuxt-link",{attrs:{to:"/#work","data-scroll-to":"#work"},nativeOn:{click:function(s){return t.smoothScroll(s)}}},[t._v("Work")]),t._v(" \n      ")],1),a("span",{staticClass:"dib pl4"},[a("nuxt-link",{attrs:{to:"/#publications","data-scroll-to":"#publications"},nativeOn:{click:function(s){return t.smoothScroll(s)}}},[t._v("Publications")]),t._v(" \n      ")],1)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},hdWZ:function(t,s,a){"use strict";s.a={props:["title","link","publication"]}},iA8U:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"template-container"},[a("div",{staticClass:"template-container-inner pa3 pa5-ns tc"},[a("my-header"),a("div",{staticClass:"dib f3 f1-ns fw6 lh-title measure-wide tl"},[t._v("\n      I'm a researcher, designer, & computer scientist\n      "),a("div",{staticClass:"f4 f3-ns fw4 mt4"},[t._v("\n        who does augmented reality, UX design, & usability.\n        "),t.isMoreDisplayed?t._e():a("a",{attrs:{href:"#"},on:{click:t.displayMore}},[t._v("More ...")]),t.isMoreDisplayed?a("span",[t._v("\n          Currently, I'm a UX Manager at C&A—one of Europe's biggest fashion retailers.\n          I mainly work on optimizing their online shops through quantitative and qualitative research,\n          as well as UX design and A/B testing.\n          ")]):t._e()]),t._m(0)]),a("div",{staticClass:"mt5 mt6-ns"},[a("a",{attrs:{id:"work",name:"work"}}),a("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Selected Work.\n      ")]),a("div",{staticClass:"cf"},[a("box",{attrs:{id:"360anywhere",title:"360&shy;Any&shy;where",topic:"Collaboration in 360° & AR."}}),a("box",{attrs:{id:"gesturewiz",title:"Gesture&shy;Wiz",topic:"Rapid gesture prototyping."}}),a("box",{attrs:{id:"holobuilder",title:"Holo&shy;Builder",topic:"An AR/VR web platform."}}),a("box",{attrs:{id:"sio",title:"Search<br />Inter&shy;action<br />Optimi&shy;zation",topic:"My Ph.D. thesis."}}),a("box",{attrs:{id:"w3touch",title:"W3Touch",topic:"Website adaptation for touch."}}),t._m(1)],1)]),t._m(2),a("div",{staticClass:"mt5 mt6-ns"},[a("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        A Couple of Articles.\n      ")]),a("div",{staticClass:"tl mb4 mb5-ns"},[a("my-article",{attrs:{title:"What is augmented reality, anyway?",link:"http://theconversation.com/what-is-augmented-reality-anyway-99827",publication:"The Conversation"}}),a("my-article",{attrs:{title:"What is Design Thinking?",link:"https://medium.muz.li/what-is-design-thinking-4afa067cb986",publication:"Muzli"}}),a("my-article",{attrs:{title:"On Design Thinking",link:"https://medium.theuxblog.com/on-design-thinking-4a4980aebe8d",publication:"The UX Blog"}}),a("my-article",{attrs:{title:"How usability impacts profit: The Conversion/Usability Framework",link:"https://uxdesign.cc/the-conversion-usability-framework-3e2068edebbc",publication:"UX Collective"}}),a("my-article",{attrs:{title:"What Do Highly Successful Start-ups Have in Common?",link:"https://www.startups.co/articles/what-do-highly-successful-start-ups-have-in-common",publication:"Startups.co"}}),a("my-article",{attrs:{title:"How to Data Analytics (in a Start-up)",link:"https://medium.com/startupsco/how-to-data-analytics-in-a-start-up-f801d0ccf5d2",publication:"Startups.co"}})],1)]),a("my-footer"),a("back-to-top")],1)])};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"f5 f4-ns fw3 mt5"},[this._v("\n        A website is never finished. Therefore, I keep feedback & to-dos in\n        "),s("a",{staticClass:"dim fw4 important-link",attrs:{href:"https://trello.com/b/OV7i5MHH/maxspeichercom"}},[this._v("a public Trello board "),s("i",{staticClass:"fab fa-trello"})]),this._v("\n         "),s("i",{staticClass:"fas fa-long-arrow-alt-right"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"fl pa2 w-100 w-50-m w-third-l"},[s("div",{staticClass:"box f2 f3-m fw6 w-100"},[s("div",{staticClass:"box-padding"}),s("a",{staticClass:"box-inner mid-gray",staticStyle:{"background-color":"#eee"},attrs:{href:"https://2008.maxspeicher.com"}},[s("div",{staticClass:"center w-100"},[this._v("\n                Read my blog\n              ")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"mt5 mt6-ns"},[a("a",{attrs:{id:"publications",name:"publications"}}),a("div",{staticClass:"f3 f2-ns fw6 mb4 mb5-ns tl"},[t._v("\n        Some Publications.\n      ")]),a("div",{staticClass:"tl mb4 mb5-ns"},[a("div",{staticClass:"mb4"},[a("div",{staticClass:"relative f4 fw4 lh-title mb3"},[a("span",{staticClass:"dn db-ns fa-layers fa-fw",staticStyle:{position:"absolute",transform:"translateX(-105%) translateY(15%)"}},[a("i",{staticClass:"fas fa-certificate"}),a("span",{staticClass:"fa-layers-text fa-inverse",attrs:{"data-fa-transform":"shrink-11.5 rotate--30"}},[t._v("NEW")])]),a("a",{staticClass:"dim",attrs:{href:"/pdf/what-is-mr.pdf"}},[t._v("What is Mixed Reality?")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", B.D. Hall, M. Nebeling\n            • "),a("span",{staticClass:"fw4"},[t._v("CHI '19")]),t._v(" "),a("i",{staticClass:"silver fas fa-award",attrs:{title:"Best Paper Honorable Mention Award"}}),t._v(" • #AR\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"relative f4 fw4 lh-title mb3"},[a("span",{staticClass:"dn db-ns fa-layers fa-fw",staticStyle:{position:"absolute",transform:"translateX(-105%) translateY(15%)"}},[a("i",{staticClass:"fas fa-certificate"}),a("span",{staticClass:"fa-layers-text fa-inverse",attrs:{"data-fa-transform":"shrink-11.5 rotate--30"}},[t._v("NEW")])]),a("a",{staticClass:"dim",attrs:{href:"/pdf/the-trouble.pdf"}},[t._v("The Trouble with Augmented Reality/Virtual Reality Authoring Tools")])]),a("div",{staticClass:"lh-copy"},[t._v("\n            M. Nebeling, "),a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v("\n            • "),a("span",{staticClass:"fw4"},[t._v("ISMAR '18 Adjunct")]),t._v(" • #AR #UXDesign\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"/pdf/xd-ar.pdf"}},[t._v("XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", B.D. Hall, A. Yu, B. Zhang, H. Zhang, J. Nebeling, M. Nebeling\n            • "),a("span",{staticClass:"fw4"},[t._v("EICS '18")]),t._v(" "),a("i",{staticClass:"gold fas fa-trophy",attrs:{title:"Best Paper Award"}}),t._v(" • #AR\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/324665021_GestureWiz_A_Human-Powered_Gesture_Design_Environment_for_User_Interface_Prototypes"}},[t._v("GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", M. Nebeling\n            • "),a("span",{staticClass:"fw4"},[t._v("CHI '18")]),t._v(" • #UXdesign\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/282441131_SOS_Does_Your_Search_Engine_Results_Page_SERP_Need_Help"}},[t._v("S.O.S.: Does Your Search Engine Results Page (SERP) Need Help?")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),a("span",{staticClass:"fw4"},[t._v("CHI '15")]),t._v(" "),a("i",{staticClass:"silver fas fa-award",attrs:{title:"Best Paper Honorable Mention Award"}}),t._v(" • #UXdesign #usability\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"relative f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"/pdf/360anywhere.pdf"}},[t._v("360Anywhere: Mobile Ad-hoc Collaboration in Any Environment using 360 Video and Augmented Reality")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", J. Cao, A. Yu, H. Zhang, M. Nebeling\n            • "),a("span",{staticClass:"fw4"},[t._v("EICS '18")]),t._v(" • #AR\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/249009504_W3touch_Metrics-based_Web_Page_Adaptation_for_Touch"}},[t._v("W3Touch: Metrics-based Web Page Adaptation for Touch")])]),a("div",{staticClass:"lh-copy"},[t._v("\n            M. Nebeling, "),a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", M.C. Norrie\n            • "),a("span",{staticClass:"fw4"},[t._v("CHI '13")]),t._v(" • #usability\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/301430241_TellMyRelevance_Predicting_the_Relevance_of_Web_Search_Results_from_Cursor_Interactions"}},[t._v("TellMyRelevance! Predicting the Relevance of Web Search Results from Cursor Interactions")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),a("span",{staticClass:"fw4"},[t._v("CIKM '13")]),t._v(" • #usability\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"https://www.researchgate.net/publication/271269916_Ensuring_Web_Interface_Quality_through_Usability-Based_Split_Testing"}},[t._v("Ensuring Web Interface Quality through Usability-Based Split Testing")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v(", A. Both, M. Gaedke\n            • "),a("span",{staticClass:"fw4"},[t._v("ICWE '14")]),t._v(" • #usability\n          ")])]),a("div",{staticClass:"mb4"},[a("div",{staticClass:"f4 fw4 lh-title mb3"},[a("a",{staticClass:"dim",attrs:{href:"http://www.qucosa.de/fileadmin/data/qucosa/documents/20810/Dissertation_Archivierung_Speicher.pdf"}},[t._v("Search Interaction Optimization: A Human-Centered Design Approach")])]),a("div",{staticClass:"lh-copy"},[a("span",{staticClass:"fw4"},[t._v("M. Speicher")]),t._v("\n            • "),a("span",{staticClass:"fw4"},[t._v("Ph.D. Thesis")]),t._v(" • #UXdesign #usability #searchEngines\n          ")])])]),a("div",{staticClass:"f4 tl"},[a("a",{staticClass:"dim fw4 important-link",attrs:{href:"http://dblp.org/pers/hd/s/Speicher:Maximilian"}},[t._v("And some more")]),t._v("\n         "),a("i",{staticClass:"fas fa-long-arrow-alt-right"})])])}]};s.a=e},kxFB:function(t,s){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},mqNq:function(t,s,a){t.exports=a.p+"img/360anywhere-thumb.61f12f0.jpg"},pvuS:function(t,s,a){"use strict";var i=function(){var t=this.$createElement;return(this._self._c||t)("a",{staticClass:"iubenda-white iubenda-embed ",attrs:{href:"https://www.iubenda.com/privacy-policy/16529602",title:"Privacy Policy"}},[this._v("Privacy Policy")])};i._withStripped=!0;var e={render:i,staticRenderFns:[]};s.a=e},rAk6:function(t,s,a){"use strict";var i=function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"back-to-top"},[s("a",{staticClass:"dim bw0",attrs:{href:"#top"},on:{click:this.smoothScroll}},[this._m(0)])])};i._withStripped=!0;var e={render:i,staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"fa-layers fa-fw fa-2x"},[s("i",{staticClass:"fas fa-circle color-background"}),s("i",{staticClass:"fas fa-arrow-alt-circle-up",attrs:{"data-fa-transform":"shrink-3"}})])}]};s.a=e},tYDd:function(t,s,a){t.exports=a.p+"img/gesturewiz-thumb.eb95fdf.jpg"},wMmA:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},yIBr:function(t,s,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},yZUI:function(t,s,a){t.exports=a.p+"img/sio-thumb.fa3da55.jpg"},yqLL:function(t,s,a){"use strict";var i=a("JUgP"),e=a("fWyS"),n=a("VU/8")(i.a,e.a,!1,null,null,null);n.options.__file="components\\Footer.vue",s.a=n.exports},zSu8:function(t,s,a){"use strict";s.a={props:["id","title","topic"]}}});