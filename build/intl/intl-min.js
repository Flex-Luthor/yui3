YUI.add("intl",function(C){var A={},B="yuiActiveLang";C.mix(C.namespace("Intl"),{_mod:function(D){if(!A[D]){A[D]={};}return A[D];},_setLang:function(E,H){var G=this._mod(E),D=G[B],F=!!G[H];if(F){G[B]=H;this.fire("intl:langChange",{module:E,prevVal:D,newVal:H});}return F;},getLang:function(D){return this._mod(D)[B];},add:function(E,F,D){this._mod(E)[F]=D;this._setLang(E,F);},get:function(F,E,I){var D=this._mod(F),G,H;I=I||D[B];G=D[I];if(G){H=(E)?G[E]:C.merge(G);}return H;},getAvailableLangs:function(E){var D=[],G=C.Env&&C.Env.lang,F;if(G){for(F in G){if(G.hasOwnProperty(F)){if(G[F][E]){D.push(F);}}}}return D;}});C.augment(C.Intl,C.EventTarget);C.Intl.publish("intl:langChange",{emitFacade:true});},"@VERSION@",{requires:["event-custom"]});