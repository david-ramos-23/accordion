!function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t){e.exports=function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a);var s=class{constructor(e){this.text=e}render(){return`\n      <dd class='AccordionPanel is-hidden'>\n        <p>${this.text}</p>\n      </dd>`}};var o=class{constructor({title:e,text:t}){this.title=e,this.text=t}render(){const e=new s(this.text).render();return`\n    <dt class='AccordionTitle is-closed'>${this.title}\n    <svg viewBox="0 0 20 20" width="20" height="20" class="Accordion-arrow"><title>cheveron down</title><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></dt>\n    ${e}`}};const r=[{id:"1",title:"Heading Panel 1",text:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},{id:"2",title:"Heading Panel 2",text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then"},{id:"3",title:"Heading Panel 3",text:"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! Now fax quiz Jack! my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps quickly in fog. Watch Jeopardy!, Alex Trebek's fun TV quiz game. Woven silk pyjamas exchanged for blue quartz."}],l=async e=>{const t=`https://5ced853eb779120014b4a30a.mockapi.io/api/mockText/section/${e}`,i={method:"GET",headers:{"Content-Type":"application/json"}};try{const e=await fetch(t,i);return await e.json()}catch(e){console.log("Error getting data section",e)}};var u=class{constructor(){n()(this,"handleEventListener",async()=>{(await this.getAllAccordionsByClass(".AccordionTitle")).forEach(e=>{e.addEventListener("click",this.toggleAccordion)})}),n()(this,"toggleAccordion",e=>{e.stopPropagation(),e.preventDefault();const t=e.target.nextElementSibling,i=e.target;t.classList.contains("is-active")?(this.toggleClass(t,"is-active","remove"),this.toggleClass(i,"is-open","remove"),this.toggleClass(i,"is-closed","add"),this.toggleClass(t,"is-hidden","add")):this.toggleActiveClass(t,i)}),n()(this,"toggleActiveClass",async(e,t)=>{let i=await this.getAllAccordionsByClass(".AccordionPanel");await i.forEach((e,t)=>{const i=e.previousElementSibling;this.toggleClass(e,"is-active","remove"),this.toggleClass(i,"is-open","remove"),this.toggleClass(i,"is-closed","add"),this.toggleClass(e,"is-hidden","add")}),this.toggleClass(t,"is-closed","remove"),this.toggleClass(e,"is-hidden","remove"),this.toggleClass(e,"is-active","add"),this.toggleClass(t,"is-open","add")}),n()(this,"toggleClass",(e,t,i)=>{e.classList[i](t)}),n()(this,"getAllAccordionsByClass",e=>document.querySelectorAll(e)),n()(this,"addSections",async()=>{const e=await l(4),t=[...r,e],i=t&&t.map(e=>new o(e).render()).join("");this.getAllAccordionsByClass(".Accordion")[0].innerHTML=i}),n()(this,"init",async()=>{await this.addSections(),await this.handleEventListener()})}render(){return'\n        <h1>Animated SCSS & VanillaJS Accordion!</h1>\n\n        <dl class="u-container Accordion"></dl> \n    '}};i(1),i(2);const c=new u;var d;d=c,document.querySelector("#app").innerHTML=d.render(),d.init()}]);