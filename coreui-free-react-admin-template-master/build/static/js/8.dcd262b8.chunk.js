(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{228:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),r.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return r})},548:function(e,t,a){"use strict";a.r(t);var n=a(228),r=a(6),c=a(7),o=a(9),u=a(8),l=a(10),s=a(1),g=a.n(s),i=a(3),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).renderFilter=function(e){var t=e.label,a=e.value;return g.a.createElement("li",{key:a},t)},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selectedLocations,a=e.selectedModules,n=e.selectedStatuses;return console.log(a),g.a.createElement(i.e,null,g.a.createElement(i.i,null,"Geselecteerde Filters"),g.a.createElement(i.f,null,g.a.createElement(i.y,null,g.a.createElement(i.j,{sm:"4"},g.a.createElement("h4",null,"Geselecteerde Modules: "),g.a.createElement("ul",null,a.map(this.renderFilter))),g.a.createElement(i.j,{sm:"4"},g.a.createElement("h4",null,"Geselecteerde Locatie's: "),g.a.createElement("ul",null,t.map(this.renderFilter))),g.a.createElement(i.j,{sm:"4"},g.a.createElement("h4",null,"Geselecteerde Statussen: "),g.a.createElement("ul",null,n.map(this.renderFilter))))))}}]),t}(s.Component),m=a(246),d=a(254);function v(e){var t=e.selectedLocations,a={labels:t.map(function(e){return e.label}),datasets:[{data:t.map(function(e){return e.count}),backgroundColor:["#FF6384","#36A2EB","#FFCE56","#7CFC00","#FF0000","#FFFF00"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#7CFC00","#FF0000","#FFFF00"]}]};return g.a.createElement(i.e,null,g.a.createElement(i.i,null,"Aantal deelnemers per locatie"),g.a.createElement(i.f,null,g.a.createElement("div",{className:"chart-wrapper"},g.a.createElement(m.b,{data:a}))))}function h(e,t){switch(t-e){case-4:return 0;case-3:return 1;case-2:return 2;case-1:return 3;case 0:return 4;case 1:return 5;case 2:return 6;case 3:return 7;case 4:return 8;default:return 0}}function b(e){for(var t=e.results,a=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],n=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],r=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],c=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],o=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],u=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],l=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],s=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],p=[{percentage:"-100%",count:0},{percentage:"-75%",count:0},{percentage:"-50%",count:0},{percentage:"-25%",count:0},{percentage:"0%",count:0},{percentage:"25%",count:0},{percentage:"50%",count:0},{percentage:"75%",count:0},{percentage:"100%",count:0}],m=0;m<t.length-1;m++)if(t[m].Module_has_DeelnemerID===t[m+1].Module_has_DeelnemerID&&0===t[m].vragenlijstmoment&&1===t[m+1].vragenlijstmoment){var d=t[m],v=t[m+1];a[h(d.vraag1,v.vraag1)].count+=1,n[h(d.vraag2,v.vraag2)].count+=1,r[h(d.vraag3,v.vraag3)].count+=1,c[h(d.vraag4,v.vraag4)].count+=1,o[h(d.vraag5,v.vraag5)].count+=1,u[h(d.vraag6,v.vraag6)].count+=1,l[h(d.vraag7,v.vraag7)].count+=1,s[h(d.vraag8,v.vraag8)].count+=1,p[h(d.vraag9,v.vraag9)].count+=1}return g.a.createElement(i.e,null,g.a.createElement(i.i,null,"Vooruitgang(%) per vraag"),g.a.createElement(i.f,null,g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 1: Ik weet waar ik goed in ben namelijk"),g.a.createElement(E,{progression:a})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 2: Waar ik goed in ben kan ik gebruiken voor mijn studie of mijn werk"),g.a.createElement(E,{progression:n})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 3: Ik weet wat voor studie of werk ik wil doen"),g.a.createElement(E,{progression:r})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 4: Ik kan hulp vragen bij het vinden van een studie of werk"),g.a.createElement(E,{progression:c})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 5: Ik kan zelfstandig taken voor studie, werk en hobby's doen"),g.a.createElement(E,{progression:o})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 6: Ik ben op dit moment bezig met studie, werk of hobby's"),g.a.createElement(E,{progression:u})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 7: Ik heb contact met Nederlanders"),g.a.createElement(E,{progression:l})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 8: Ik ken scholen of bedrijven in mijn omgeving die mij informatie of hulp kunnen bieden"),g.a.createElement(E,{progression:s})),g.a.createElement("div",{className:"progressionbar"},g.a.createElement("h5",null,"Vraag 9: Ik ben trots op wat ik in Nederland heb bereikt"),g.a.createElement(E,{progression:p}))))}function E(e){var t=e.progression||[],a={maintainAspectRatio:!1,tooltips:{enabled:!1,custom:d.CustomTooltips},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},n={labels:t.map(function(e){return e.percentage}),datasets:[{label:"Aantal Deelnemers",backgroundColor:"#00aee8",borderColor:"#00aee8",hoverBackgroundColor:"#00aee8",hoverBorderColor:"#00aee8",data:t.map(function(e){return e.count})}]};return g.a.createElement("div",{className:"chart-wrapper progression-chart"},g.a.createElement(m.a,{data:n,options:a,height:300}))}var f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.results,a=e.selectedLocations;return g.a.createElement("div",{className:"group-statistics"},g.a.createElement(i.y,null,g.a.createElement(i.j,{sm:"6"},g.a.createElement(v,{selectedLocations:a})),g.a.createElement(i.j,{sm:"6"},g.a.createElement(v,{selectedLocations:a}))),g.a.createElement(b,{results:t}))}}]),t}(s.Component);function k(e){for(var t=e.results,a=[],n=0;n<t.length-1;n++)if(t[n].Module_has_DeelnemerID===t[n+1].Module_has_DeelnemerID&&0===t[n].vragenlijstmoment&&1===t[n+1].vragenlijstmoment){var r=t[n],c=t[n+1],o=[];o.push({percentage:j(r.vraag1,c.vraag1),vraag:1}),o.push({percentage:j(r.vraag2,c.vraag2),vraag:2}),o.push({percentage:j(r.vraag3,c.vraag3),vraag:3}),o.push({percentage:j(r.vraag4,c.vraag4),vraag:4}),o.push({percentage:j(r.vraag5,c.vraag5),vraag:5}),o.push({percentage:j(r.vraag6,c.vraag6),vraag:6}),o.push({percentage:j(r.vraag7,c.vraag7),vraag:7}),o.push({percentage:j(r.vraag8,c.vraag8),vraag:8}),o.push({percentage:j(r.vraag9,c.vraag9),vraag:9}),a.push(g.a.createElement(w,{progression:o}))}return g.a.createElement(i.e,null,g.a.createElement(i.i,null,"Vooruitgang(%) per deelnemer, per vraag: ",t.Module_has_DeelnemerID),g.a.createElement(i.f,null,a))}function j(e,t){switch(t-e){case-4:return-100;case-3:return-75;case-2:return-50;case-1:return-25;case 0:return 0;case 1:return 25;case 2:return 50;case 3:return 75;case 4:return 100;default:return 0}}function w(e){var t=e.progression||[],a={maintainAspectRatio:!1,tooltips:{enabled:!1,custom:d.CustomTooltips},scales:{yAxes:[{ticks:{beginAtZero:!0,min:-100,max:100}}]}},n={labels:t.map(function(e){return e.vraag}),datasets:[{label:"Vooruitgang(%)",backgroundColor:"#00aee8",borderColor:"#00aee8",hoverBackgroundColor:"#00aee8",hoverBorderColor:"#00aee8",data:t.map(function(e){return e.percentage})}]};return g.a.createElement("div",{className:"chart-wrapper progression-chart"},g.a.createElement(m.a,{data:n,options:a}))}var O=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.results;return g.a.createElement("div",null,g.a.createElement(k,{results:e}))}}]),t}(s.Component),F=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getResults=function(e){fetch("http://dev.jasperzwiers.eu/report/all").then(function(e){return e.json()}).then(function(e){return a.setState(Object(n.a)({},a.state,{results:e.data}))}).catch(function(e){return console.log(e)}),a.forceUpdate()},a.state={results:[]},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getResults()}},{key:"render",value:function(){var e=this.props.location.state,t=e.selectedLocations,a=e.selectedModules,n=e.selectedStatuses,r=this.state.results;return g.a.createElement("div",{className:"animated fadeIn"},g.a.createElement("div",{className:"report-result"},g.a.createElement(i.d,{id:"back-button",onClick:function(){window.history.back()}},"Terug"),g.a.createElement(p,{selectedLocations:t,selectedModules:a,selectedStatuses:n}),g.a.createElement(f,{results:r,selectedLocations:t}),g.a.createElement(O,{results:r})))}}]),t}(s.Component);t.default=F}}]);
//# sourceMappingURL=8.dcd262b8.chunk.js.map