"use strict";(self.webpackChunkcountriesApp=self.webpackChunkcountriesApp||[]).push([[555],{555:(D,f,c)=>{c.r(f),c.d(f,{CountriesModule:()=>K});var u=c(814),l=c(36),e=c(946),d=c(931),m=c(96),A=c(398),b=c(862);let v=(()=>{class n{constructor(t){this.http=t,this.url="https://restcountries.com/v3.1"}getCountries(){return this.http.get(`${this.url}/all`).pipe((0,d.K)(()=>(0,m.of)([])))}searchCountries(t){return this.http.get(`${this.url}/name/${t}`).pipe((0,d.K)(()=>(0,m.of)([])))}searchCountriesByRegion(t){return this.http.get(`${this.url}/region/${t}`).pipe((0,d.K)(()=>(0,m.of)([])))}searchCountriesByCode(t){return this.http.get(`${this.url}/alpha/${t}`).pipe((0,A.U)(r=>r.length>0?r[0]:null),(0,d.K)(()=>(0,m.of)(null)))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var x=c(645),T=c(394);class U extends T.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const g={setInterval(n,i,...t){const{delegate:r}=g;return r?.setInterval?r.setInterval(n,i,...t):setInterval(n,i,...t)},clearInterval(n){const{delegate:i}=g;return(i?.clearInterval||clearInterval)(n)},delegate:void 0};var w=c(39);const C={now:()=>(C.delegate||Date).now(),delegate:void 0};class p{constructor(i,t=p.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,r){return new this.schedulerActionCtor(this,i).schedule(r,t)}}p.now=C.now;const R=new class _ extends p{constructor(i,t=p.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let r;this._active=!0;do{if(r=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,r){for(;i=t.shift();)i.unsubscribe();throw r}}}(class S extends U{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var r;if(this.closed)return this;this.state=i;const o=this.id,s=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(s,o,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(s,this.id,t),this}requestAsyncId(i,t,r=0){return g.setInterval(i.flush.bind(i,this),r)}recycleAsyncId(i,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&g.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(i,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let o,r=!1;try{this.work(i)}catch(s){r=!0,o=s||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,w.P)(r,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var I=c(360),q=c(251);function N(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"li",10),e.NdJ("click",function(){const s=e.CHM(t).$implicit,a=e.oxw();return e.KtG(a.searchByRegion(s))}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit;e.xp6(1),e.Oqu(t)}}let j=(()=>{class n{constructor(){this.debouncer=new x.x,this.regions=["Africa","America","Asia","Europe","Oceania"],this.selectedRegion="Filter by Region",this.inputValue=new e.vpe,this.selectRegion=new e.vpe}ngOnInit(){this.debouncer.pipe(function F(n,i=R){return(0,I.e)((t,r)=>{let o=null,s=null,a=null;const y=()=>{if(o){o.unsubscribe(),o=null;const h=s;s=null,r.next(h)}};function Q(){const h=a+n,Z=i.now();if(Z<h)return o=this.schedule(void 0,h-Z),void r.add(o);y()}t.subscribe((0,q.x)(r,h=>{s=h,a=i.now(),o||(o=i.schedule(Q,n),r.add(o))},()=>{y(),r.complete()},void 0,()=>{s=o=null}))})}(400)).subscribe(t=>{this.inputValue.emit(t)})}searchCountry(t){this.selectedRegion="Filter by Region",this.debouncer.next(t)}searchByRegion(t){this.selectedRegion=t,this.selectRegion.emit(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-input"]],outputs:{inputValue:"inputValue",selectRegion:"selectRegion"},decls:11,vars:2,consts:[[1,"row","d-flex","justify-content-between"],[1,"col-sm-12","col-md-6","mt-2"],[1,"content-wrapper"],["type","text","placeholder","Search for a country ...",1,"form-control",2,"padding-left","40px",3,"keyup"],["inputValue",""],[1,"col-sm-12","col-md-3","mt-2"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],[1,"dropdown-menu"],["style","cursor: pointer; ","class","dropdown-item",3,"click",4,"ngFor","ngForOf"],[1,"dropdown-item",2,"cursor","pointer",3,"click"]],template:function(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"input",3,4),e.NdJ("keyup",function(){e.CHM(o);const a=e.MAs(4);return e.KtG(r.searchCountry(a.value))}),e.qZA()()(),e.TgZ(5,"div",5)(6,"div",6)(7,"button",7),e._uU(8),e.qZA(),e.TgZ(9,"ul",8),e.YNc(10,N,2,1,"li",9),e.qZA()()()()}2&t&&(e.xp6(8),e.hij(" ",r.selectedRegion," "),e.xp6(2),e.Q6J("ngForOf",r.regions))},dependencies:[u.sg]}),n})();const O=function(n){return["/countries/by",n]};function J(n,i){if(1&n&&(e.TgZ(0,"div",6)(1,"div",7),e._UZ(2,"img",8),e.TgZ(3,"div",9)(4,"h5",10),e._uU(5),e.qZA(),e.TgZ(6,"p")(7,"b"),e._uU(8,"Population:"),e.qZA(),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"p")(12,"b"),e._uU(13,"Region:"),e.qZA(),e._uU(14),e.qZA(),e.TgZ(15,"p")(16,"b"),e._uU(17,"Capital:"),e.qZA(),e._uU(18),e.qZA()()()()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(10,O,t.cca3)),e.xp6(1),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common)("title",t.name.common),e.xp6(3),e.Oqu(t.name.common),e.xp6(4),e.hij(" ",e.lcZ(10,8,t.population),""),e.xp6(5),e.hij(" ",t.region,""),e.xp6(4),e.hij(" ",t.capital,"")}}let P=(()=>{class n{constructor(t){this.countriesService=t,this.placeholder="La propiedad del padre al hijo",this.countries=[]}ngOnInit(){this.allCountries()}allCountries(){this.countriesService.getCountries().subscribe(t=>{this.countries=t})}searchCountry(t){0==t.length?(this.allCountries(),console.log(this.countries)):this.countriesService.searchCountries(t).subscribe(r=>{this.countries=r})}searchByRegion(t){console.log(t),this.countriesService.searchCountriesByRegion(t).subscribe(r=>{this.countries=r})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-search-country"]],decls:6,vars:1,consts:[[1,"container","mt-4"],[1,"row"],[1,"col-12"],[3,"inputValue","selectRegion"],[1,"row","mt-4"],["class","col-sm-12 col-md-3 mt-2",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-3","mt-2"],[1,"card",2,"width","100%","height","auto","cursor","pointer",3,"routerLink"],[1,"card-img-top",3,"src","alt","title"],[1,"card-body"],[2,"cursor","pointer"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"shared-search-input",3),e.NdJ("inputValue",function(s){return r.searchCountry(s)})("selectRegion",function(s){return r.searchByRegion(s)}),e.qZA()()(),e.TgZ(4,"div",4),e.YNc(5,J,19,12,"div",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",r.countries))},dependencies:[u.sg,l.rH,j,u.JJ]}),n})();var B=c(535);function L(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor "),e.qZA())}const E=function(n){return["/countries/by",n]};function M(n,i){if(1&n&&(e.TgZ(0,"div",15)(1,"button",16),e._uU(2),e.qZA()()),2&n){const t=i.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(2,E,t)),e.xp6(1),e.hij(" ",t,"")}}function V(n,i){if(1&n&&(e.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"button",6),e._UZ(4,"i",7),e._uU(5," Back"),e.qZA()()(),e.TgZ(6,"div",8)(7,"div",9),e._UZ(8,"img",10),e.qZA(),e.TgZ(9,"div",11)(10,"div",12)(11,"h2"),e._uU(12),e.qZA(),e.TgZ(13,"div",13)(14,"p")(15,"b"),e._uU(16,"Native Name: "),e.qZA(),e._uU(17),e.qZA(),e.TgZ(18,"p")(19,"b"),e._uU(20,"Population: "),e.qZA(),e._uU(21),e.ALo(22,"number"),e.qZA(),e.TgZ(23,"p")(24,"b"),e._uU(25,"Region: "),e.qZA(),e._uU(26),e.qZA(),e.TgZ(27,"p")(28,"b"),e._uU(29,"Sub Region: "),e.qZA(),e._uU(30),e.qZA(),e.TgZ(31,"p")(32,"b"),e._uU(33,"Capital: "),e.qZA(),e._uU(34),e.qZA()(),e.TgZ(35,"div",13)(36,"p")(37,"b"),e._uU(38,"Top Level Domain: "),e.qZA(),e._uU(39),e.qZA(),e.TgZ(40,"p")(41,"b"),e._uU(42,"Curriencies: "),e.qZA(),e._uU(43),e.qZA(),e.TgZ(44,"p")(45,"b"),e._uU(46,"Languages: "),e.qZA(),e._uU(47),e.qZA()()(),e._UZ(48,"br"),e.TgZ(49,"div",12)(50,"h6"),e._uU(51,"Borders Countries: "),e.qZA(),e.YNc(52,M,3,4,"div",14),e.qZA()()()()),2&n){const t=e.oxw();e.xp6(8),e.Q6J("src",t.countries.flags.svg,e.LSH),e.xp6(4),e.Oqu(t.countries.name.common),e.xp6(5),e.hij(" ",(null==t.countries.name.nativeName.eng?null:t.countries.name.nativeName.eng.common)||(null==t.countries.name.nativeName.ara?null:t.countries.name.nativeName.ara.common)||(null==t.countries.name.nativeName.spa?null:t.countries.name.nativeName.spa.common)||(null==t.countries.name.nativeName.ita?null:t.countries.name.nativeName.ita.common),""),e.xp6(4),e.hij(" ",e.lcZ(22,11,t.countries.population),""),e.xp6(5),e.hij(" ",t.countries.region,""),e.xp6(4),e.hij(" ",t.countries.subregion,""),e.xp6(4),e.hij(" ",t.countries.capital,""),e.xp6(5),e.hij(" ",t.countries.tld,""),e.xp6(4),e.hij(" ",(null==t.countries.currencies.USD?null:t.countries.currencies.USD.name)||(null==t.countries.currencies.YER?null:t.countries.currencies.YER.name)||(null==t.countries.currencies.CLP?null:t.countries.currencies.CLP.name)||(null==t.countries.currencies.DOP?null:t.countries.currencies.DOP.name)||(null==t.countries.currencies.EUR?null:t.countries.currencies.EUR.name)||(null==t.countries.currencies.CRC?null:t.countries.currencies.CRC.name),""),e.xp6(4),e.hij(" ",t.countries.languages.spa||t.countries.languages.ara||t.countries.languages.ita||t.countries.languages.eng,""),e.xp6(5),e.Q6J("ngForOf",t.countries.borders)}}const Y=[{path:"search-country",component:P},{path:"by/:id",component:(()=>{class n{constructor(t,r,o){this.activatedRoute=t,this.router=r,this.countriesService=o}ngOnInit(){this.activatedRoute.params.pipe((0,B.w)(({id:t})=>this.countriesService.searchCountriesByCode(t))).subscribe(t=>t?this.countries=t:this.router.navigateByUrl("countries"))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.gz),e.Y36(l.F0),e.Y36(v))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],["class","container mt-2 align-content-center align-items-center",4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"container","mt-2","align-content-center","align-items-center"],[1,"row","p-3"],[1,"col-12","col-md-5"],["routerLink","/countries",1,"btn","btn-light","btn-lg"],[1,"bi","bi-arrow-left"],[1,"row","mt-3","p-3"],[1,"col-12","col-md-4","ml-2"],["alt","",2,"width","100%","height","auto",3,"src"],[1,"col-12","col-md-6","mt-2"],[1,"row"],[1,"col-12","mt-3","col-md-6"],["class","col-2 col-md-2 m-1",4,"ngFor","ngForOf"],[1,"col-2","col-md-2","m-1"],[1,"btn","btn-light",3,"routerLink"]],template:function(t,r){if(1&t&&(e.YNc(0,L,2,0,"ng-template",null,0,e.W1O),e.YNc(2,V,53,13,"div",1)),2&t){const o=e.MAs(1);e.xp6(2),e.Q6J("ngIf",r.countries)("ngIfElse",o)}},dependencies:[u.sg,u.O5,l.rH,u.JJ]}),n})()},{path:"**",redirectTo:"search-country"}];let $=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(Y),l.Bz]}),n})();var k=c(208);let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,$,k.m]}),n})()}}]);