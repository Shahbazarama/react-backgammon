(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=n(2),l=n(3),u=n(8),s=n.n(u),d=n(12),m=n(13),b=n(14),f=n(16),v=n(15),h=n(17),p=n(6),g=(n(24),{padding:"5px",border:"solid 3px #212529",borderRadius:"0 0 50px 50px",height:"45vh"}),w={padding:"5px",border:"solid 3px #007bff",borderRadius:"0 0 50px 50px",height:"45vh"},M={padding:"5px",border:"solid 3px #212529",borderRadius:"50px 50px 0 0",height:"45vh"},T={padding:"5px",border:"solid 3px #dc3545",borderRadius:"50px 50px 0 0",height:"45vh"};function E(e){var t=e.gameState,n=e.makeMove,a=e.confirmMove,o=e.whosTurn;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},t.map(function(e){if(e.id>12)return r.a.createElement("div",{className:"col-1 d-flex flex-column",style:e.id<19?g:w,onClick:function(t){return a(t,e.id)}},Object(p.a)(Array(e.count)).map(function(t,a){return r.a.createElement("button",{style:{borderRadius:"15px"},disabled:o!==e.color,onClick:function(t){return n(t,e.id)},className:1===e.color?"btn btn-sm btn-primary":"btn btn-sm btn-danger"},"\u03a9",r.a.createElement("br",null))}))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},t.slice(0).reverse().map(function(e){if(e.id<13)return r.a.createElement("div",{className:"col-1 d-flex flex-column-reverse",style:e.id>6?M:T,onClick:function(t){return a(t,e.id)}},Object(p.a)(Array(e.count)).map(function(t,a){return r.a.createElement("button",{style:{borderRadius:"15px"},disabled:o!==e.color,onClick:function(t){return n(t,e.id)},className:1===e.color?"btn btn-sm btn-primary":"btn btn-sm btn-danger"},"\u03a9",r.a.createElement("br",null))}))})))}var S=n(4),j=n(5);function O(e){var t=e.diceValues,n=e.rollDice,a=e.whosTurn,o=[];for(var c in t)for(var i=0;i<t[c];i++)o.push(c);return r.a.createElement("div",{style:{height:"50vh"}},r.a.createElement("h2",{style:1===a?{color:"#007bff",paddingTop:"25px"}:{color:"#dc3545",paddingTop:"25px"}},1===a?"Blue's Turn":"Red's Turn"),r.a.createElement("button",{className:1===a?"align-self-end btn btn-lg btn-danger btn-block":"align-self-end btn btn-lg btn-primary btn-block",onClick:function(){return n()}},"Roll the Dice!"),o.map(function(e){return r.a.createElement("div",{style:{display:"inline",margin:"5px"}},1==e?r.a.createElement(S.a,{icon:j.c,size:"5x"}):null,2==e?r.a.createElement(S.a,{icon:j.f,size:"5x"}):null,3==e?r.a.createElement(S.a,{icon:j.e,size:"5x"}):null,4==e?r.a.createElement(S.a,{icon:j.b,size:"5x"}):null,5==e?r.a.createElement(S.a,{icon:j.a,size:"5x"}):null,6==e?r.a.createElement(S.a,{icon:j.d,size:"5x"}):null)}),r.a.createElement("h1",null,0===o.length?"Next Turn":""),r.a.createElement("hr",{className:{}}))}function x(e){var t=e.blueJail,n=e.redJail,a=e.whosTurn,o=e.makeMove;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12",style:{border:"solid 3px #212529",textAlign:"center"}},r.a.createElement("h4",{style:{color:"#212529"}},r.a.createElement("u",null,"Jail")),Object(p.a)(Array(t)).map(function(){return r.a.createElement("button",{style:{borderRadius:"15px"},className:"btn btn-lg btn-primary btn-block",disabled:2===a,onClick:function(e){return o(e,0)}},"\u03a9")}),Object(p.a)(Array(n)).map(function(){return r.a.createElement("button",{style:{borderRadius:"15px"},className:"btn btn-lg btn-danger btn-block",disabled:1===a,onClick:function(e){return o(e,0)}},"\u03a9")})))))}var J=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={gameState:[],whosTurn:1,currentMove:0,blueJail:0,redJail:0,blueBase:0,redBase:0,dice:{}},n.componentDidMount=Object(d.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({gameState:[{id:1,count:2,color:1},{id:2,count:0,color:0},{id:3,count:0,color:0},{id:4,count:0,color:0},{id:5,count:0,color:0},{id:6,count:5,color:2},{id:7,count:0,color:0},{id:8,count:3,color:2},{id:9,count:0,color:0},{id:10,count:0,color:0},{id:11,count:0,color:0},{id:12,count:5,color:1},{id:13,count:5,color:2},{id:14,count:0,color:0},{id:15,count:0,color:0},{id:16,count:0,color:0},{id:17,count:3,color:1},{id:18,count:0,color:0},{id:19,count:5,color:1},{id:20,count:0,color:0},{id:21,count:0,color:0},{id:22,count:0,color:0},{id:23,count:0,color:0},{id:24,count:2,color:2}]}),n.rollDice(),n.startOfGame();case 3:case"end":return e.stop()}},e)})),n.rollDice=function(){var e=Math.floor(6*Math.random())+1,t=Math.floor(6*Math.random())+1;e===t?n.setState(function(t){return{dice:Object(l.a)({},e,4),whosTurn:1===t.whosTurn?2:1,currentMove:0}}):n.setState(function(n){var a;return{dice:(a={},Object(l.a)(a,e,1),Object(l.a)(a,t,1),a),whosTurn:1===n.whosTurn?2:1,currentMove:0}})},n.startOfGame=function(){Math.floor(2*Math.random())+1===1?n.setState({whosTurn:1}):n.setState({whosTurn:2})},n.makeMove=function(e,t){e.stopPropagation(),1===n.state.whosTurn?n.state.blueJail>0?n.setState({currentMove:0}):n.setState({currentMove:t}):2===n.state.whosTurn&&(n.state.redJail>0?n.setState({currentMove:0}):n.setState({currentMove:t}))},n.confirmMove=function(e,t){if(e.stopPropagation(),0!==n.state.currentMove){var a=n.state.gameState.filter(function(e){return e.id===t})[0];a.color!==n.state.whosTurn&&0!==a.color||n.state.currentMove===a.id?a.color!==n.state.whosTurn?1===a.count&&n.attemptDiceMove(a.id,n.state.currentMove)&&n.setState(function(e){return{gameState:e.gameState.map(function(e){return e.id===n.state.currentMove?Object(i.a)({},e,{count:e.count-1,color:1===e.count?0:e.color}):e.id===a.id?Object(i.a)({},e,{color:n.state.whosTurn}):Object(i.a)({},e)}),currentMove:0,blueJail:1===a.color?e.blueJail+1:e.blueJail,redJail:2===a.color?e.redJail+1:e.redJail}}):console.log("else"):n.attemptDiceMove(a.id,n.state.currentMove)&&n.setState(function(e){return{gameState:e.gameState.map(function(e){return e.id===n.state.currentMove?Object(i.a)({},e,{count:e.count-1,color:1===e.count?0:e.color}):e.id===a.id?Object(i.a)({},e,{count:e.count+1,color:n.state.whosTurn}):Object(i.a)({},e)}),currentMove:0}})}else{var r=!1;1===n.state.whosTurn?n.state.blueJail>0&&(r=!0):2===n.state.whosTurn&&n.state.redJail>0&&(r=!0);var o=n.state.gameState.filter(function(e){return e.id===t})[0];o.color!==n.state.whosTurn&&0!==o.color||!r?o.color!==n.state.whosTurn&&1===o.count&&n.attemptDiceMove(o.id,1===n.state.whosTurn?0:25)&&n.setState(function(e){return{gameState:e.gameState.map(function(e){return e.id===n.state.currentMove?Object(i.a)({},e,{count:e.count-1,color:1===e.count?0:e.color}):e.id===o.id?Object(i.a)({},e,{color:n.state.whosTurn}):Object(i.a)({},e)}),currentMove:0,blueJail:1===o.color?e.blueJail+1:e.blueJail-1,redJail:2===o.color?e.redJail+1:e.redJail-1}}):n.attemptDiceMove(o.id,1===n.state.whosTurn?0:25)&&n.setState(function(e){return{redJail:1===e.whosTurn?e.redJail:e.redJail-1,blueJail:2===e.whosTurn?e.blueJail:e.blueJail-1,gameState:e.gameState.map(function(e){return e.id===o.id?Object(i.a)({},e,{count:e.count+1,color:n.state.whosTurn}):Object(i.a)({},e)}),currentMove:0}})}},n.attemptDiceMove=function(e,t){if(console.log("attemptDiceMove"),1===n.state.whosTurn){var a=e-t;return console.log(a),n.state.dice[a]>0&&(n.setState(function(e){return{dice:Object(i.a)({},e.dice,Object(l.a)({},a,e.dice[a]-1))}}),!0)}if(2===n.state.whosTurn){var r=t-e;return n.state.dice[r]>0&&(n.setState(function(e){return{dice:Object(i.a)({},e.dice,Object(l.a)({},r,e.dice[r]-1))}}),!0)}},n.attemptDiceMoveToBase=function(){var e=n.state.currentMove;if(1===n.state.whosTurn){var t=!1;n.state.gameState.some(function(n){return n.id>18&&n.id<e&&1===n.color?t=!0:void 0});var a=25-e;if(n.state.dice[a]>0)return n.setState(function(e){return{dice:Object(i.a)({},e.dice,Object(l.a)({},a,e.dice[a]-1))}}),!0;if(!t){console.log(a);for(var r=a;r<=6;r++)if(n.state.dice[r])return n.setState(function(e){return{dice:Object(i.a)({},e.dice,Object(l.a)({},r,e.dice[r]-1))}}),!0;return!1}}else if(2===n.state.whosTurn){var o=!1;n.state.gameState.some(function(t){return t.id>e&&t.id<7&&2===t.color?o=!0:void 0});var c=e;if(n.state.dice[c]>0)return n.setState(function(e){return{dice:Object(i.a)({},e.dice,Object(l.a)({},c,e.dice[c]-1))}}),!0;if(!o){console.log(c);for(var u=function(e){if(n.state.dice[e])return n.setState(function(t){return{dice:Object(i.a)({},t.dice,Object(l.a)({},e,t.dice[e]-1))}}),{v:!0}},s=c;s<=6;s++){var d=u(s);if("object"===typeof d)return d.v}return!1}}},n.handleBase=function(e){if(console.log("handleBase"),0!==n.state.currentMove)if(1===n.state.whosTurn){var t=n.state.blueBase;n.state.gameState.map(function(e){e.id>18&&1===e.color?t+=e.count:t=t}),15===t&&n.attemptDiceMoveToBase()&&n.setState(function(e){return{gameState:e.gameState.map(function(e){return e.id===n.state.currentMove?Object(i.a)({},e,{count:e.count-1,color:1===e.count?0:e.color}):Object(i.a)({},e)}),currentMove:0,blueBase:e.blueBase+1}},function(){n.checkVictory()})}else if(2===n.state.whosTurn){var a=n.state.redBase;n.state.gameState.map(function(e){e.id<7&&2===e.color?a+=e.count:a=a}),15===a&&n.attemptDiceMoveToBase()&&n.setState(function(e){return{gameState:e.gameState.map(function(e){return e.id===n.state.currentMove?Object(i.a)({},e,{count:e.count-1,color:1===e.count?0:e.color}):Object(i.a)({},e)}),currentMove:0,redBase:e.redBase+1}},function(){n.checkVictory()})}},n.checkVictory=function(){15===n.state.blueBase?alert("Blue wins!"):15===n.state.redBase&&alert("Red wins!")},n}return Object(h.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement(O,{diceValues:this.state.dice,rollDice:this.rollDice,whosTurn:this.state.whosTurn}),r.a.createElement(x,{blueJail:this.state.blueJail,redJail:this.state.redJail,whosTurn:this.state.whosTurn,makeMove:this.makeMove})),r.a.createElement("div",{className:"col-8"},r.a.createElement(E,{gameState:this.state.gameState,makeMove:this.makeMove,confirmMove:this.confirmMove,whosTurn:this.state.whosTurn})),r.a.createElement("div",{className:"col-2 d-flex flex-column justify-content-between"},r.a.createElement("div",null,r.a.createElement("button",{disabled:2===this.state.whosTurn,onClick:function(){return e.handleBase()},className:"btn btn-lg btn-primary btn-block"},"Blue Base")),r.a.createElement("div",null,r.a.createElement("button",{disabled:1===this.state.whosTurn,onClick:function(){return e.handleBase()},className:"btn btn-lg btn-danger justify-content-end btn-block"},"Red Base")))))}}]),t}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,null))};n(30),n(31);c.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c04b4475.chunk.js.map