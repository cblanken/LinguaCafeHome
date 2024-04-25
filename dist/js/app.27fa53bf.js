(function(){"use strict";var e={665:function(e,t,a){var r=a(144),i=a(726),n=a(506),o=a(381),s=a(102),g=function(){var e=this,t=e._self._c;return t(i.Z,[t(n.Z,{attrs:{app:"",color:"primary",light:"",dense:"",flat:""}},[t(o.Z,{attrs:{rounded:"",text:"",plain:""},on:{click:function(t){e.page="home"}}},[e._v("Overview")])],1),t(s.Z,["home"===e.page?t("Home"):e._e()],1)],1)},c=[],l=a(941),u=a(255),d=a(316),m=a(444),h=a(248),p=a(88),v=a(767),f=function(){var e=this,t=e._self._c;return t(h.Z,[t(v.Z,{attrs:{value:e.overlay.active,opacity:1}},[t(o.Z,{staticClass:"textDark--text",attrs:{id:"close-image-button",small:"",rounded:"",color:"error"},on:{click:function(t){e.overlay.active=!1}}},[e._v(" close ")]),t("img",{attrs:{src:e.overlay.img}})],1),t("div",{staticStyle:{"text-align":"center","font-size":"42px"}},[e._v("LinguaCafe")]),t(l.Z,{staticClass:"rounded-lg",attrs:{outlined:""}},[t(u.EB,[e._v("What is LinguaCafe?")]),t(u.ZB,[e._v(" LinguaCafe is a free, web-based and self-hosted platform that helps language learners read in foreign languages. It allows users to import texts from different sources, and provides a set of tools that helps them easily acquire vocabulary."),t("br"),t("br"),e._v(" I developed LinguaCafe mainly for personal use, because I found the alternative platforms too expensive or lacking in features I wanted. "),t("br"),t("br"),e._v("After years of developement and reading other language learners' opinions about similar platforms, i realised that it might also be a useful tool for other learners, so I have started adding more features to grow LinguaCafe into a platform that more people can benefit from."),t("br"),t("br"),e._v(" This overview was written for v0.7, it is possible that some improvements have been made since."),t("br"),t("br"),e._v(" You can download it from here:"),t("br"),t(p.Z,{staticClass:"mr-2"},[e._v("mdi-github")]),t("a",{attrs:{href:"https://github.com/simjanos-dev/LinguaCafe"}},[e._v("Github")])],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[t(p.Z,{staticClass:"mr-2",attrs:{large:"",color:"error"}},[e._v("mdi-alert")]),e._v("Active development disclaimer")],1),t(u.ZB,[e._v(" LinguaCafe is still in active development. There are a few missing features, and you might encounter some bugs while using the software. Please test it before you start actively using it, and make sure it is up to your expectations. ")])],1),t("div",{staticStyle:{"text-align":"center","font-size":"42px"}},[e._v("Feature overview")]),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Supported languages")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/Languages.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/Languages.jpg"}})])],1),e._v(" LinguaCafe currently supports 15 languages. You can see a more detailed list of supported features for each language on the github page. "),t("br"),t("br"),e._v(" More languages will be added soon. ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Library")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/LibraryCover.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/LibraryCover.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/LibraryDetailed.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/LibraryDetailed.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/LibraryChapters.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/LibraryChapters.jpg"}})])],1),e._v(" You can manage all imported texts on the "),t("b",[e._v("Library")]),e._v(" page."),t("br"),t("br"),e._v(" The imported texts are arranged and labeled as "),t("b",[e._v("books")]),e._v(" and "),t("b",[e._v("chapters")]),e._v(", but they can be anything like subtitles, podcast transcripts or news articles."),t("br"),t("br"),e._v(" You can see how many "),t("span",{staticClass:"new"},[e._v("new words")]),e._v(" and "),t("span",{staticClass:"highlighted"},[e._v("highlighted words")]),e._v(" each "),t("b",[e._v("book")]),e._v(" and "),t("b",[e._v("chapter")]),e._v(" contains and estimate how difficult a text will be for your level."),t("br"),t("br")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Importing text")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/Import.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/Import.jpg"}})])],1),e._v(" LinguaCafe has a variety of supported import sources, and more are coming in future updates. ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Reading")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/TextReader1.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/TextReader1.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/TextReader2.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/TextReader2.jpg"}})])],1),e._v(" When you first start reading, all your words will be yellow, which represents "),t("span",{staticClass:"new"},[e._v("new words")]),e._v(" that you haven't seen before. Select the words you don't know, and add a translation from the built-in vocabulary search. From now on whenever you see this word again, it will be "),t("span",{staticClass:"highlighted"},[e._v("highlighted")]),e._v(" in any text you read. "),t("br"),t("br"),e._v(" You will be able to review these words to memorize their meaning. Clicking on the "),t("b",[e._v("Finished reading")]),e._v(" button will set all the yellow words to known in the chapter."),t("br"),t("br"),e._v(" You can also select multiple words, and save them as a "),t("b",[e._v("phrase")]),e._v(". ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Review")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ReviewFrontCard.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ReviewFrontCard.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ReviewBackCard.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ReviewBackCard.jpg"}})])],1),e._v(" After reading your texts and creating "),t("span",{staticClass:"highlighted"},[e._v("highlighted words and phrases")]),e._v(", you can review them on the "),t("b",[e._v("Review page")]),e._v(". You can review words from a specific "),t("b",[e._v("book")]),e._v(", "),t("b",[e._v("chapter")]),e._v(", or you can review them all at once."),t("br"),t("br"),e._v(" LinguaCafe uses a spaced repetition system similar to the Leitner system, but you can export your highlighted cards to Anki or other SRS software if you want. ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Goal tracking")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/GoalTracking.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/GoalTracking.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/Statistics.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/Statistics.jpg"}})])],1),e._v(" LinguaCafe tracks how many words you read, highlight and review daily. You can view and edit your daily goals on the "),t("b",[e._v("Home page")]),e._v(", and you can see your progress over time on the "),t("b",[e._v("Calendar")]),e._v("."),t("br"),t("br"),e._v(" You can also view your all time statistics on the bottom of "),t("b",[e._v("Home page")]),e._v(". ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Vocabulary")]),t(u.ZB,[e._v(" You can search, edit and export your words on the "),t("b",[e._v("Vocabulary")]),e._v(" page. "),t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/VocabularySearch.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/VocabularySearch.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/VocabularyEdit.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/VocabularyEdit.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/VocabularyExport.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/VocabularyExport.jpg"}})])],1)],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Dictionaries")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/DictionaryList.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/DictionaryList.jpg"}})])],1),e._v(" LinguaCafe comes with no dictionary files by default, but you can download and import them from different sources. There is a list of supported dictionaries on the github page. "),t("br"),t("br"),e._v(" You can also use DeepL translator, which allows you to translate 500.000 characters/month for free with machine translation. ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Kanji and radicals")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/KanjiList.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/KanjiList.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/KanjiDetails.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/KanjiDetails.jpg"}})])],1),e._v(" You can view information about the kanji you know. ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Anki")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/AnkiHome.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/AnkiHome.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/AnkiReview.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/AnkiReview.jpg"}})])],1),e._v(" LinguaCafe comes with built-in Anki support. It can send words when you highlight them to Anki automatically, or you can send them manually. You can find more information about setting it up on the github page. ")],1)],1),t(l.Z,{staticClass:"rounded-lg my-16",attrs:{outlined:""}},[t(u.EB,[e._v("Theming and customization")]),t(u.ZB,[t(d.Z,{staticClass:"my-4 rounded-lg carousel",attrs:{eager:"",cycle:"",height:"auto"}},[t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ThemeDark.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ThemeDark.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ThemeLight.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ThemeLight.jpg"}})]),t(m.Z,{attrs:{contain:"",eager:""},on:{click:function(t){return e.openImage("images/ThemeEink.jpg")}}},[t("img",{attrs:{width:"100%",eager:"",src:"images/ThemeEink.jpg"}})])],1),e._v(" LinguaCafe comes with a light, dark and e-ink theme."),t("br"),t("br"),e._v(" Mobile view is also supported. You can use LinguaCafe from any device that has a browser and at least 340px wide screen. ")],1)],1)],1)},y=[],b={data:function(){return{overlay:{active:!1,img:""}}},methods:{openImage(e){this.overlay.active=!0,this.overlay.img=e}}},w=b,_=a(1),Z=(0,_.Z)(w,f,y,!1,null,null,null),k=Z.exports,C={name:"App",components:{Home:k},data:()=>({page:"home"}),mounted(){"#user-manual"===window.location.hash&&(this.page="user-manual")}},j=C,x=(0,_.Z)(j,g,c,!1,null,null,null),L=x.exports,I=a(154);r.ZP.use(I.Z);var B=new I.Z({theme:{dark:!0,themes:{dark:{background:"#1C1B20",foreground:"#28272C",primary:"#B59686",secondary:"#C5947D",text:"#c3c3c3",textDark:"#141110",newWord:"#ffdd4b",highlightedWord:"#61df6b"}}}});r.ZP.config.productionTip=!1,new r.ZP({vuetify:B,render:function(e){return e(L)}}).$mount("#app")}},t={};function a(r){var i=t[r];if(void 0!==i)return i.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,r,i,n){if(!r){var o=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],n=e[l][2];for(var s=!0,g=0;g<r.length;g++)(!1&n||o>=n)&&Object.keys(a.O).every((function(e){return a.O[e](r[g])}))?r.splice(g--,1):(s=!1,n<o&&(o=n));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[r,i,n]}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,n,o=r[0],s=r[1],g=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(g)var l=g(a)}for(t&&t(r);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(l)},r=self["webpackChunklingua_cafe_home"]=self["webpackChunklingua_cafe_home"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(665)}));r=a.O(r)})();
//# sourceMappingURL=app.27fa53bf.js.map