"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[245],{245:(oe,d,a)=>{a.r(d),a.d(d,{HomeModule:()=>te});var c=a(177),p=a(632),e=a(438),g=a(448);let f=(()=>{class t{accessHome;router;data=!1;constructor(n,o){this.accessHome=n,this.router=o}canActivate(n,o){return!0===this.accessHome.getLastValue()||this.router.navigateByUrl("")}static \u0275fac=function(o){return new(o||t)(e.KVO(g.H),e.KVO(p.Ix))};static \u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var u=a(928);let m=(()=>{class t{currentProject$=new u.t(JSON.parse(localStorage.getItem("projectData")));projectGuard$=this.currentProject$.asObservable();constructor(){}ngOnInit(){}saveProject(n){localStorage.setItem("projectData",JSON.stringify(n)),this.currentProject$.next(n)}getProject(){return this.currentProject$.getValue()}static \u0275fac=function(o){return new(o||t)};static \u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),x=(()=>{class t{router;homeService;data;constructor(n,o){this.router=n,this.homeService=o}canActivate(n,o){return this.homeService.projectGuard$.subscribe(i=>this.data=i),console.log(this.data),this.data.id>0||this.router.navigateByUrl("/error")}static \u0275fac=function(o){return new(o||t)(e.KVO(p.Ix),e.KVO(m))};static \u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const b=[{home:{presentation:{video:"../../../../assets/template/presentation-video.mp4",profilePicture:"../../../../assets/template/profile.webp",biography:"Front-end developer with 3+ years of experience in web development. I help companies make unique product features focusing on high-quality code and application performance.\n                    \u2022 Implemented several new user interface features, enhancing usability and making applications more user-friendly.\n                    \u2022 Enhanced the agile task process by introducing standardized guidelines and requirements across teams, resulting in smooth communication, a notable 30% decrease in average task completion time, and an impressive 70% reduction in idle periods.\n                    Technical Skills & Tools: React, Angular, Typescript, Javascript, HTML, CSS, Redux, Rxjs.\n                    I get excited about opportunities where I can challenge myself by taking ownership of development projects and collaborating on the design of new solutions with my team, pushing our boundaries.\n                    I love connecting with new people, you can reach me at francesco.dev.9@gmail.com"},tecnology:[{id:0,name:"Angular",icon:"../../../../assets/icons/angular-icon.svg",description:" \xe8 un framework open source per lo sviluppo di applicazioni web",animation:!1,time:500},{id:1,name:"Rxjs",icon:"../../../../assets/icons/rxjs-icon.png",description:"\xe8 una libreria per gestire eventi asincroni tramite l'utilizzo del concetto di Observarble e del paradigma funzionale (reattivo).",animation:!1,time:1e3},{id:2,name:"Typescript",icon:"../../../../assets/icons/typescript-icon.png",description:"Si tratta di un Super-set di JavaScript che basa le sue caratteristiche su ECMAScript 6",animation:!1,time:1500},{id:3,name:"Javascript",icon:"../../../../assets/icons/javascript-icon.png",description:"\xe8 un linguaggio di scripting lato client utilizzato per rendere interattive le pagine web.",animation:!1,time:2e3},{id:4,name:"CSS3",icon:"../../../../assets/icons/css-icon.png",description:"\xe8 un linguaggio che gestisce il design e la presentazione delle pagine web (cio\xe8 l'aspetto estetico)",animation:!1,time:2500},{id:5,name:"HTML5",icon:"../../../../assets/icons/html-icon.png",description:"\xe8 un linguaggio di markup. Nato per la formattazione e impaginazione di documenti ipertestuali disponibili nel web 1.0",animation:!1,time:3e3},{id:6,name:"React",icon:"../../../../assets/icons/react-icon.png",description:" \xe8 un framework open source per lo sviluppo di applicazioni web",animation:!1,time:3500},{id:7,name:"Redux",icon:"../../../../assets/icons/redux-icon.svg",description:" \xe8 un framework open source per lo sviluppo di applicazioni web",animation:!1,time:4e3}],project:[{id:11,name:"f-stream",imgCover:"../../assets/projects/f-stream/f-stream-home.png",projectImg:["../../assets/projects/f-stream/f-stream-landing.png","../../assets/projects/f-stream/f-stream-animation.png","../../assets/projects/f-stream/f-stream-home.png"],links:[{icon:"../../../../assets/icons/folder.webp",name:"Repository",link:"https://github.com/francescobert97/f-stream"},{icon:"../../../../assets/icons/live.webp",name:"live version",link:"https://f-stream.vercel.app/"}],description:"F-stream is your new go-to destination for streaming, offering a sleek, modern platform designed in bold red and black. With an intuitive interface and various sections to explore, F-stream makes it easy for users to discover and watch an extensive collection of movies available right on the platform.Whether you're in the mood for action-packed blockbusters or indie gems, F-stream has something for everyone. Users can dive into different categories, find hidden treasures, and enjoy their favorite films with a seamless viewing experience. No extra clutter\u2014just pure entertainment at your fingertips."},{id:2,name:"myportfolio",imgCover:"../../assets/projects/myportfolio//my-portfolio.webp",projectImg:["../../assets/projects/myportfolio/my-portfolio.webp"],links:[{icon:"../../../../assets/icons/folder.webp",name:"Repository",link:"https://github.com/francescobert97/pokemon-react-app"},{icon:"../../../../assets/icons/live.webp",name:"live version",link:"https://francescobert97.github.io/pokemon-react-app/"}],description:"Welcome to my Futuristic Portfolio, a cutting-edge showcase of my skills and projects. Designed with a sleek, futuristic aesthetic, this portfolio is not just a display\u2014it's an experience. Explore my expertise across a range of technologies and tools, and see how I bring ideas to life through a series of innovative projects. Each section is crafted to highlight not just what I know, but how I apply it to create real-world solutions."},{id:3,name:"pokemon-app",imgCover:"../../assets/projects/pokemon-app/pokemon-app.webp",projectImg:["../../assets/projects/pokemon-app/pokemon-app.webp","../../assets/projects/pokemon-app/pokemon-app-2.webp","../../assets/projects/pokemon-app/pokemon-app-3.webp","../../assets/projects/pokemon-app/pokemon-app-4.webp","../../assets/projects/pokemon-app/pokemon-app-5.webp"],links:[{icon:"../../../../assets/icons/folder.webp",name:"Repository",link:"https://github.com/francescobert97/pokemon-react-app"},{icon:"../../../../assets/icons/live.webp",name:"live version",link:"https://francescobert97.github.io/pokemon-react-app/"}],description:"Pok\xe9mon App is the ultimate app for Pok\xe9mon fans, offering an all-in-one solution to explore, capture, and manage your favorite Pok\xe9mon. With access to a complete Pok\xe9dex featuring all species, you can discover every detail about each Pok\xe9mon\u2014types, abilities, stats, moves, and more. But that\u2019s not all! It allows you to catch any Pok\xe9mon and organize them into your personal team or send them to your Pok\xe9mon Box for future use. Seamlessly switch between your active team and stored Pok\xe9mon, and dive deep into their individual stats and characteristics at the click of a button."}]}}];function C(t,s){if(1&t&&(e.j41(0,"a",8),e.nrm(1,"img",9),e.k0s()),2&t){const n=s.$implicit;e.FS9("href",n.link,e.B4B),e.R7$(),e.FS9("src",n.icon,e.B4B)}}let j=(()=>{class t{presentationContent;socialLink=[{icon:"../../../../assets/icons/github-icon.png",name:"GitHub",link:"https://github.com/francescobert97"},{icon:"../../../../assets/icons/linkedin-icon.png",name:"LinkedIn",link:"https://www.linkedin.com/in/francesco-bertorotta-76a581211/"},{icon:"../../../../assets/icons/gmail-icon.png",name:"Gmail",link:"francesco.dev.9@gmail.com"}];constructor(){}ngOnInit(){}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-presentation"]],inputs:{presentationContent:"presentationContent"},decls:9,vars:4,consts:[[1,"monitor","box-shadow-green","position-absolute"],[1,"presentation","overflow-hidden","position-relative","mt-sm-2","mt-md-1","mt-lg-4","box-shadow-green","w-100"],["autoplay","","muted","","loop","","playsinline","",1,"",3,"src"],[1,"position-absolute","gap-4","d-flex","justify-content-between","box-shadow-green","rounded","col-11","ms-4","me-1","p-3"],["alt","profile picture",1,"border","box-shadow-green","w-100","h-100","rounded",3,"src"],[1,"flex-grow-1"],[1,"position-absolute","links-bar","d-flex","gap-3","justify-content-center","align-items-center","p-1"],["class","single-link-card mt-2",3,"href",4,"ngFor","ngForOf"],[1,"single-link-card","mt-2",3,"href"],["alt","social icon",1,"",3,"src"]],template:function(o,i){1&o&&(e.nrm(0,"div",0),e.j41(1,"div",1),e.nrm(2,"video",2),e.j41(3,"div",3),e.nrm(4,"img",4),e.j41(5,"p",5),e.EFF(6),e.k0s()(),e.j41(7,"div",6),e.DNE(8,C,2,2,"a",7),e.k0s()()),2&o&&(e.R7$(2),e.FS9("src",i.presentationContent.video,e.B4B),e.R7$(2),e.FS9("src",i.presentationContent.profilePicture,e.B4B),e.R7$(2),e.JRh(i.presentationContent.biography),e.R7$(2),e.Y8G("ngForOf",i.socialLink))},dependencies:[c.Sq],styles:[".links-bar[_ngcontent-%COMP%]{width:40%;background:#000;bottom:0;right:32%;border-radius:10px 10px 0 0}.links-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:40px;max-height:40px}.monitor[_ngcontent-%COMP%]{background:#000;width:10%;height:80px;top:0;right:46%;animation:_ngcontent-%COMP%_slideIn .7s forwards}.presentation[_ngcontent-%COMP%]{font-size:.8em;border:10px solid black;border-radius:var(--border);max-height:400px}.presentation[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{height:100%;width:100%;object-fit:cover}.presentation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{background:#000000d9;max-height:18rem;top:5%}.presentation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   img[_ngcontent-%COMP%]{max-width:180px;max-height:180px;min-width:80px;min-height:80px}@keyframes _ngcontent-%COMP%_slideIn{0%{top:-9999px}to{top:0}}@media screen and (max-width: 856px){.presentation[_ngcontent-%COMP%]{max-height:280px}.presentation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{max-height:10rem;font-size:.6em}}@media screen and (max-width: 576px){.links-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px;max-height:20px}.monitor[_ngcontent-%COMP%]{display:none}.presentation[_ngcontent-%COMP%]{border:0;border-bottom:5px solid black;border-radius:0}.presentation[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{min-height:310px}.presentation[_ngcontent-%COMP%]   .presentation[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]{max-width:20px;max-height:20px}}@media screen and (max-width: 456px){.presentation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type{font-size:.5em}}"]})}return t})();const _=t=>({transform:t});function v(t,s){if(1&t&&(e.j41(0,"div",5)(1,"h2",6),e.EFF(2),e.k0s(),e.j41(3,"p"),e.EFF(4),e.k0s()()),2&t){const n=e.XpG().$implicit;e.R7$(2),e.JRh(n.name||"no-name"),e.R7$(2),e.JRh(n.description||"no description")}}function k(t,s){if(1&t){const n=e.RV6();e.qex(0),e.j41(1,"img",3),e.bIt("mouseover",function(){const i=e.eBV(n).index,r=e.XpG();return e.Njj(r.showInformation(i))})("mouseout",function(){const i=e.eBV(n).index,r=e.XpG();return e.Njj(r.showInformation(i))}),e.k0s(),e.DNE(2,v,5,2,"div",4),e.bVm()}if(2&t){const n=s.$implicit,o=s.index,i=e.XpG();e.R7$(),e.FS9("src",n.icon,e.B4B),e.Y8G("ngStyle",e.eq3(3,_,"rotate("+360/i.tecnologiesContent.length*o+"deg) translate(140px)")),e.R7$(),e.Y8G("ngIf",i.showItem[o])}}let w=(()=>{class t{tecnologiesContent=[];showItem;endInterval;showInfo={};constructor(){}ngOnInit(){this.showItem=new Array(this.tecnologiesContent.length).fill(!1)}showInformation(n){n<0||(this.showItem[n]=!this.showItem[n])}ngOnDestroy(){}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-tech-stack"]],inputs:{tecnologiesContent:"tecnologiesContent"},decls:4,vars:1,consts:[[1,"container-stack","mt-2","mx-auto","d-flex","justify-content-center","align-items-center"],[1,"tecnologie-title","text-center","text-shadow-green"],[4,"ngFor","ngForOf"],["alt","tecnologies icon",1,"single-tecnologie-card","box-shadow-green","p-2","rounded","bg-light",3,"mouseover","mouseout","ngStyle","src"],["class","tecnologie-info rounded position-absolute box-shadow-green p-2",4,"ngIf"],[1,"tecnologie-info","rounded","position-absolute","box-shadow-green","p-2"],[1,""]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"h2",1),e.EFF(2,"My technologies"),e.k0s(),e.DNE(3,k,3,5,"ng-container",2),e.k0s()),2&o&&(e.R7$(3),e.Y8G("ngForOf",i.tecnologiesContent))},dependencies:[c.Sq,c.bT,c.B3],styles:[".container-stack[_ngcontent-%COMP%]{position:relative;padding:2rem;width:100%;height:100%;width:300px;min-height:400px}.container-stack[_ngcontent-%COMP%]   .tecnologie-title[_ngcontent-%COMP%]{font-size:1.7em}.container-stack[_ngcontent-%COMP%]   .single-tecnologie-card[_ngcontent-%COMP%]{margin-left:50px;position:absolute;transform-origin:10px;transition:3s;width:4.5rem;height:4.5rem}.container-stack[_ngcontent-%COMP%]   .tecnologie-info[_ngcontent-%COMP%]{background:#000;box-shadow:0 0 32px -4px #37dbd6;z-index:10000;font-size:.8em;width:50%}.container-stack[_ngcontent-%COMP%]   .tecnologie-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.7em}@media screen and (max-width: 1200px){.container-stack[_ngcontent-%COMP%]{zoom:85%}}@media screen and (max-width: 576px){.container-stack[_ngcontent-%COMP%]{zoom:70%}}@media screen and (max-width: 456px){.container-stack[_ngcontent-%COMP%]   .tecnologie-info[_ngcontent-%COMP%]{width:100%;font-size:.8em}}"]})}return t})();var l=a(326),P=a(6),h=a(762),y=a(484);class M{constructor(s,n){this.dueTime=s,this.scheduler=n}call(s,n){return n.subscribe(new S(s,this.dueTime,this.scheduler))}}class S extends h.v{constructor(s,n,o){super(s),this.dueTime=n,this.scheduler=o,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(s){this.clearDebounce(),this.lastValue=s,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(I,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:s}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(s)}}clearDebounce(){const s=this.debouncedSubscription;null!==s&&(this.remove(s),s.unsubscribe(),this.debouncedSubscription=null)}}function I(t){t.debouncedNext()}class F{constructor(s,n){this.compare=s,this.keySelector=n}call(s,n){return n.subscribe(new B(s,this.compare,this.keySelector))}}class B extends h.v{constructor(s,n,o){super(s),this.keySelector=o,this.hasKey=!1,"function"==typeof n&&(this.compare=n)}compare(s,n){return s===n}_next(s){let n;try{const{keySelector:i}=this;n=i?i(s):s}catch(i){return this.destination.error(i)}let o=!1;if(this.hasKey)try{const{compare:i}=this;o=i(this.key,n)}catch(i){return this.destination.error(i)}else this.hasKey=!0;o||(this.key=n,this.destination.next(s))}}let T=(()=>{class t{resultEmitter=new e.bkB;searchResult="";constructor(){}ngOnInit(){this.sendSearchAtParent()}searchInput=new l.MJ("");getSearchData(){return this.searchInput.valueChanges.pipe((0,P.T)(n=>(n||"").toLowerCase()),function O(t,s=y.b){return n=>n.lift(new M(t,s))}(400),function R(t,s){return n=>n.lift(new F(t,s))}())}emitResult(n){this.resultEmitter.emit(n)}sendSearchAtParent(){this.emitResult(this.getSearchData())}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-project-search-bar"]],outputs:{resultEmitter:"resultEmitter"},decls:1,vars:1,consts:[["name","search","type","search","placeholder","Search projects!",1,"search-bar","box-shadow-green","text-light",3,"formControl"]],template:function(o,i){1&o&&e.nrm(0,"input",0),2&o&&e.Y8G("formControl",i.searchInput)},dependencies:[l.me,l.BC,l.l_],styles:[".search-bar[_ngcontent-%COMP%]{border-radius:10px;border:1px solid rgb(0,255,255);outline:none;padding:.2rem;animation:_ngcontent-%COMP%_inputAnimation 2.4s infinite}.search-bar[_ngcontent-%COMP%]::placeholder{color:#fff}@keyframes _ngcontent-%COMP%_inputAnimation{0%{background:#0ff6}to{background:#0ffc}}"]})}return t})();const $=(t,s)=>({"z-index":t,left:s});function G(t,s){if(1&t){const n=e.RV6();e.j41(0,"div",1),e.bIt("click",function(){const i=e.eBV(n).$implicit,r=e.XpG();return e.Njj(r.showfullProject(i.id,i))}),e.j41(1,"h4"),e.EFF(2),e.nI1(3,"uppercase"),e.k0s(),e.nrm(4,"img",2),e.j41(5,"span",3),e.nrm(6,"img",4),e.k0s()()}if(2&t){const n=s.$implicit,o=s.index;e.Y8G("ngStyle",e.l_i(5,$,100+o,3+4*o+"%")),e.R7$(2),e.JRh(e.bMT(3,3,n.name)),e.R7$(2),e.FS9("src",n.imgCover,e.B4B)}}let V=(()=>{class t{router;homeService;projects;constructor(n,o){this.router=n,this.homeService=o}ngOnInit(){}showfullProject(n,o){this.sendDataProject(o),this.router.navigateByUrl(`/home/result/:${n}`)}sendDataProject(n){this.homeService.saveProject(n)}static \u0275fac=function(o){return new(o||t)(e.rXU(p.Ix),e.rXU(m))};static \u0275cmp=e.VBU({type:t,selectors:[["app-projects-card"]],inputs:{projects:"projects"},decls:1,vars:1,consts:[["class","position-absolute project-card box-shadow-green d-flex flex-column align-items-center justify-content-around",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"position-absolute","project-card","box-shadow-green","d-flex","flex-column","align-items-center","justify-content-around",3,"click","ngStyle"],["alt","immagine del progetto",3,"src"],[1,"position-absolute","w-25","personal-font-style","text-center","box-shadow-green","p-1","d-flex","justify-content-center","align-items-center"],["src","../../../../assets/icons/play-icon.png","alt","play button",1,"ms-3"]],template:function(o,i){1&o&&e.DNE(0,G,7,8,"div",0),2&o&&e.Y8G("ngForOf",i.projects)},dependencies:[c.Sq,c.B3,c.Pc],styles:[".project-card[_ngcontent-%COMP%]{top:25%;height:70%;background:#000;border-radius:20px;transform:rotate3d(1,-10,1,30deg);transition:1s;overflow:hidden}.project-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-shadow:-3px -1px 12px rgb(108,255,215);font-size:2em}.project-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.project-card[_ngcontent-%COMP%]:hover{transform:rotate3d(0,0,0,365deg) translateY(-100px);z-index:1000}.project-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:100%;background:#0ff}@media screen and (max-width: 856px){.project-card[_ngcontent-%COMP%]{border-radius:10px}.project-card[_ngcontent-%COMP%]:hover{transform:translateY(-50px);z-index:1000}.project-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.4em}}@media screen and (max-width: 600px){.project-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.4em}}@media screen and (max-width: 456px){.project-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.2em}}"]})}return t})();function D(t,s){if(1&t&&(e.qex(0),e.nrm(1,"app-projects-card",7),e.bVm()),2&t){const n=e.XpG();e.R7$(),e.Y8G("projects",n.projectListContent)}}function E(t,s){if(1&t&&e.nrm(0,"app-projects-card",7),2&t){const n=e.XpG();e.Y8G("projects",n.searchResults)}}let z=(()=>{class t{projectListContent=[];searchResults=[];constructor(){}ngOnInit(){}hearSearchResult(n){n.subscribe(o=>this.getResultSearch(o))}getResultSearch(n){const o=this.projectListContent.find(i=>0===i.name.indexOf(n));o&&!this.searchResults.some(i=>i.name===o.name)&&this.searchResults.push(o),(!o||this.searchResults.length>1||n.length<3)&&(this.searchResults=[])}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-project-list"]],inputs:{projectListContent:"projectListContent"},decls:8,vars:2,consts:[["projectResult",""],[1,"project-list","p-4","mt-4","d-flex","flex-column","box-shadow-green","align-items-center"],[1,"mb-4"],[3,"resultEmitter"],[1,"w-100","h-100","position-relative","d-flex","align-items-end"],[4,"ngIf","ngIfElse"],[1,"bg-light","w-100","p-4","rounded"],[3,"projects"]],template:function(o,i){if(1&o){const r=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"app-project-search-bar",3),e.bIt("resultEmitter",function(ne){return e.eBV(r),e.Njj(i.hearSearchResult(ne))}),e.k0s()(),e.j41(3,"div",4),e.DNE(4,D,2,1,"ng-container",5),e.nrm(5,"div",6),e.k0s(),e.DNE(6,E,1,1,"ng-template",null,0,e.C5r),e.k0s()}if(2&o){const r=e.sdS(7);e.R7$(4),e.Y8G("ngIf",!i.searchResults.length)("ngIfElse",r)}},dependencies:[c.bT,T,V],styles:[".project-list[_ngcontent-%COMP%]{background:#0000007a;width:100%;height:20rem;border-radius:30px 30px 0 0}@media screen and (max-width: 856px){.project-list[_ngcontent-%COMP%]{font-size:.6em}}@media screen and (max-width: 600px){.project-list[_ngcontent-%COMP%]{border-radius:1px;height:13rem}}@media screen and (max-width: 456px){.project-list[_ngcontent-%COMP%]{border-radius:1px}}"]})}return t})(),L=(()=>{class t{content=b[0];stopAnimation=!0;constructor(){}ngOnInit(){this.hearStopAnimation()}hearStopAnimation(){this.stopAnimation=!1}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-home"]],decls:5,vars:3,consts:[[1,"home-container","m-0","w-100","h-100","row","g-0"],[1,"text-light","d-flex","flex-column","justify-content-between","col-sm-10","mx-sm-auto","col-12"],[3,"presentationContent"],[3,"tecnologiesContent"],[3,"projectListContent"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"app-presentation",2)(3,"app-tech-stack",3)(4,"app-project-list",4),e.k0s()()),2&o&&(e.R7$(2),e.Y8G("presentationContent",i.content.home.presentation),e.R7$(),e.Y8G("tecnologiesContent",i.content.home.tecnology),e.R7$(),e.Y8G("projectListContent",i.content.home.project))},dependencies:[j,w,z],styles:[".home-container[_ngcontent-%COMP%]{background-color:#000;background:url(background-p.065cb0f27f127ed3.jpg) center}"]})}return t})(),U=(()=>{class t{router;btnData={label:"",classes:""};methodCaller=new e.bkB;constructor(n){this.router=n}ngOnInit(){}triggerExternalMethod(){this.methodCaller.emit()}static \u0275fac=function(o){return new(o||t)(e.rXU(p.Ix))};static \u0275cmp=e.VBU({type:t,selectors:[["app-custom-button"]],inputs:{btnData:"btnData"},outputs:{methodCaller:"methodCaller"},decls:2,vars:3,consts:[[3,"click"]],template:function(o,i){1&o&&(e.j41(0,"button",0),e.bIt("click",function(){return i.triggerExternalMethod()}),e.EFF(1),e.k0s()),2&o&&(e.HbH(i.btnData.classes),e.R7$(),e.JRh(i.btnData.label))},styles:[".close-btn[_ngcontent-%COMP%]{background:#000000c6;border-radius:10px;z-index:9999}@media screen and (max-width: 600px){.close-btn[_ngcontent-%COMP%]{font-size:.6em}}"]})}return t})();function H(t,s){if(1&t&&(e.j41(0,"a",2),e.nrm(1,"img",3),e.k0s()),2&t){const n=s.$implicit;e.FS9("href",n.link,e.B4B),e.R7$(),e.FS9("src",n.icon,e.B4B)}}let N=(()=>{class t{router;socialLink=[{icon:"../../../../assets/icons/github-icon.png",name:"GitHub",link:"https://github.com/francescobert97"},{icon:"../../../../assets/icons/linkedin-icon.png",name:"LinkedIn",link:"https://www.linkedin.com/in/francesco-bertorotta-76a581211/"},{icon:"../../../../assets/icons/gmail-icon.png",name:"Gmail",link:"francesco.dev.9@gmail.com"}];constructor(n){this.router=n}ngOnInit(){}static \u0275fac=function(o){return new(o||t)(e.rXU(p.Ix))};static \u0275cmp=e.VBU({type:t,selectors:[["app-links-bar"]],inputs:{socialLink:"socialLink"},decls:2,vars:1,consts:[[1,"w-100","links-bar","d-flex","gap-3","justify-content-center","align-items-center","box-shadow-green"],["class","single-link-card mt-2",3,"href",4,"ngFor","ngForOf"],[1,"single-link-card","mt-2",3,"href"],["alt","social icon",1,"w-100","h-100",3,"src"]],template:function(o,i){1&o&&(e.j41(0,"div",0),e.DNE(1,H,2,2,"a",1),e.k0s()),2&o&&(e.R7$(),e.Y8G("ngForOf",i.socialLink))},dependencies:[c.Sq],styles:[".links-bar[_ngcontent-%COMP%]{padding:2rem;background:#000;border-radius:0 0 30px 30px}.links-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:40px;max-height:40px}@media (max-width: 1200px){.links-bar[_ngcontent-%COMP%]{padding:.7rem 2rem}.links-bar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:20px;max-height:20px}}"]})}return t})();const Y=["imgBox"],X=(t,s)=>({activated:t,deactivated:s});function A(t,s){if(1&t&&(e.nrm(0,"span",14),e.nI1(1,"async"),e.nI1(2,"async")),2&t){const n=s.index,o=e.XpG(2);e.Y8G("ngClass",e.l_i(5,X,n===e.bMT(1,1,o.count),n!==e.bMT(2,3,o.count)))}}function J(t,s){if(1&t){const n=e.RV6();e.j41(0,"div",10)(1,"div",11),e.DNE(2,A,3,8,"span",12),e.k0s(),e.j41(3,"img",13,1),e.nI1(5,"async"),e.bIt("click",function(i){e.eBV(n);const r=e.XpG();return e.Njj(r.deepImgClick(i))}),e.k0s()()}if(2&t){const n=e.XpG();e.R7$(2),e.Y8G("ngForOf",n.project.projectImg),e.R7$(),e.FS9("src",n.project.projectImg[e.bMT(5,2,n.count)||0],e.B4B)}}function W(t,s){1&t&&(e.j41(0,"p"),e.EFF(1,"non sono ancora presenti immagini per questo progetto"),e.k0s())}let K=(()=>{class t{project;count=new u.t(0);seeWid;constructor(){}ngOnInit(){console.log(this.project),this.test()}test(){return this.project.projectImg.some((n,o)=>this.count.getValue()===o)}deepImgClick(n){const o=this.count.getValue(),i=this.project.projectImg.length-1;this.count.next(n.layerX>this.seeWid.nativeElement.offsetWidth/2?o===i?0:o+1:0===o?i:o-1)}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=e.VBU({type:t,selectors:[["app-project-card"]],viewQuery:function(o,i){if(1&o&&e.GBs(Y,5),2&o){let r;e.mGM(r=e.lsd())&&(i.seeWid=r.first)}},inputs:{project:"project"},decls:13,vars:8,consts:[["noImage",""],["imgBox",""],[1,"project-card-section","d-flex","flex-column","vh-100","text-light"],[1,"image-fixed-height","position-relative","d-flex","justify-content-center"],["alt","immagine copertina",1,"w-100",3,"src"],[1,"position-absolute","d-flex","flex-column","align-items-center"],[3,"socialLink"],[1,"box-shadow-green","mt-5","bg-dark","p-xxl-4","p-2","rounded"],[1,"d-flex","align-items-center","justify-content-center","text-center","p-2","flex-grow-1","personal-font-style"],["class","  position-relative box-shadow-green d-flex flex-column align-items-center image-fixed-height",4,"ngIf","ngIfElse"],[1,"position-relative","box-shadow-green","d-flex","flex-column","align-items-center","image-fixed-height"],[1,"current-image-active","box-shadow-green","d-flex","justify-content","center"],["class","mx-1",3,"ngClass",4,"ngFor","ngForOf"],["alt","immagine del progetto",1,"",3,"click","src"],[1,"mx-1",3,"ngClass"]],template:function(o,i){if(1&o&&(e.j41(0,"div",2)(1,"div",3),e.nrm(2,"img",4),e.j41(3,"div",5),e.nrm(4,"app-links-bar",6),e.j41(5,"h2",7),e.EFF(6),e.nI1(7,"uppercase"),e.k0s()()(),e.j41(8,"p",8),e.EFF(9),e.k0s(),e.DNE(10,J,6,4,"div",9)(11,W,2,0,"ng-template",null,0,e.C5r),e.k0s()),2&o){const r=e.sdS(12);e.R7$(2),e.FS9("src",i.project.imgCover,e.B4B),e.R7$(2),e.Y8G("socialLink",i.project.links),e.R7$(2),e.JRh(e.bMT(7,6,i.project.name)),e.R7$(3),e.SpI(" ",i.project.description," "),e.R7$(),e.Y8G("ngIf",i.project.projectImg.length>0)("ngIfElse",r)}},dependencies:[c.YU,c.Sq,c.bT,N,c.Jj,c.Pc],styles:[".image-fixed-height[_ngcontent-%COMP%]{width:100%;height:400px}.image-fixed-height[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;height:100%}.project-card-section[_ngcontent-%COMP%]{background:#0000007a;box-shadow:0 0 22px -2px #37dbd6}.project-card-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   img[_ngcontent-%COMP%]{object-fit:cover}.project-card-section[_ngcontent-%COMP%]   .current-image-active[_ngcontent-%COMP%]{position:absolute;top:2%;left:48%;background:#000;border-radius:10px;padding:1.1rem .8rem}.project-card-section[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:10px;background:#fff;box-shadow:0 0 2px 1.5px #37dbd6}.project-card-section[_ngcontent-%COMP%]   .deactivated[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:10px;background:gray;box-shadow:0 0 2px 1.5px #37dbd6}@media screen and (max-width: 856px){.image-fixed-height[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:350px;width:100%}.flex-grow-lg-1[_ngcontent-%COMP%]{flex-grow:1!important}.project-card-section[_ngcontent-%COMP%]   .current-image-active[_ngcontent-%COMP%]{left:44%;padding:.6rem .4rem}.project-card-section[_ngcontent-%COMP%]   .activated[_ngcontent-%COMP%], .project-card-section[_ngcontent-%COMP%]   .deactivated[_ngcontent-%COMP%]{width:6px;height:6px}}@media screen and (max-width: 856px) and (max-width: 576px){.flex-grow-sm-0[_ngcontent-%COMP%]{flex-grow:0!important}.flex-grow-sm-1[_ngcontent-%COMP%]{flex-grow:1!important}.project-card-section[_ngcontent-%COMP%]{border-radius:0}.project-card-section[_ngcontent-%COMP%]   P[_ngcontent-%COMP%]{font-size:.7em}.project-card-section[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-of-type   h2[_ngcontent-%COMP%]{font-size:1.5em}.project-card-section[_ngcontent-%COMP%]   .current-image-active[_ngcontent-%COMP%]{left:44%;padding:.6rem .4rem}.activated[_ngcontent-%COMP%], .deactivated[_ngcontent-%COMP%]{width:6px;height:6px}}@media screen and (max-width: 856px) and (max-width: 456px){.project-card-section[_ngcontent-%COMP%]   .current-image-active[_ngcontent-%COMP%]{left:42%;padding:.5rem .3rem}.activated[_ngcontent-%COMP%], .deactivated[_ngcontent-%COMP%]{width:5px;height:5px}}"]})}return t})();const Q=()=>({label:"Back home",classes:"my-4 ms-2 ms-xxl-5 p-2 position-absolute close-btn personal-font-style btn box-shadow-green text-light"}),q=[{path:"",component:L,canActivate:[f]},{path:"result/:id",component:(()=>{class t{router;accessHome;homeService;project;progress="";constructor(n,o,i){this.router=n,this.accessHome=o,this.homeService=i}ngOnInit(){this.updateProjectOnLocalStorage()}returnToHome(){this.router.navigateByUrl("home")}updateProjectOnLocalStorage(){this.homeService.projectGuard$.subscribe(n=>this.project=n),console.log(this.project)}ngOnDestroy(){localStorage.projectData&&localStorage.removeItem("projectData")}getAccessToHome(){this.accessHome.getLastValue()}static \u0275fac=function(o){return new(o||t)(e.rXU(p.Ix),e.rXU(g.H),e.rXU(m))};static \u0275cmp=e.VBU({type:t,selectors:[["app-project-search-list"]],decls:4,vars:3,consts:[[1,"background-2","w-100","h-100","row","g-0"],[3,"methodCaller","btnData"],[1,"col-sm-10","mx-auto","col-12","d-flex","justify-content-center"],[3,"project"]],template:function(o,i){1&o&&(e.j41(0,"div",0)(1,"app-custom-button",1),e.bIt("methodCaller",function(){return i.returnToHome()}),e.k0s(),e.j41(2,"div",2),e.nrm(3,"app-project-card",3),e.k0s()()),2&o&&(e.R7$(),e.Y8G("btnData",e.lJ4(2,Q)),e.R7$(2),e.Y8G("project",i.project))},dependencies:[U,K],styles:["app-custom-button[_ngcontent-%COMP%]{position:absolute}@media screen and (max-width: 456px){button[_ngcontent-%COMP%]{font-size:.9em}}"]})}return t})(),canActivate:[x]}];let Z=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[p.iI.forChild(q),p.iI]})}return t})();var ee=a(95);let te=(()=>{class t{static \u0275fac=function(o){return new(o||t)};static \u0275mod=e.$C({type:t});static \u0275inj=e.G2t({imports:[c.MD,Z,l.YN,l.X1,ee.R]})}return t})()}}]);