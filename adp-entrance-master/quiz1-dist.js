var app=new Vue({el:"#app",data:{selectedVariant:2,counter:0,quizzes:[{title:"Abstract Quiz",questions:[{question:"If two left handed people argue, which one is right?",answers:[{content:"The one on the right.",value:!1},{content:"The one on the left.",value:!0},{content:"The one with the gun.",value:!1},{content:"Tom.",value:!1}]},{question:"What does Google use if it can't find an answer on Google?",answers:[{content:"Bing",value:!1},{content:"Bang",value:!1},{content:"Bong",value:!1},{content:"Ask Jeeves",value:!0}]},{question:"What kind of pants do Mario and Luigi wear?",answers:[{content:"Dussault apparel slashed jeans",value:!1},{content:"Tapered bell bottoms",value:!1},{content:"Acid washed Guccis",value:!1},{content:"Denim denim denim",value:!0}]}]},{title:"Dev Quiz",questions:[{question:"How many programmers does it take to change a lightbulb?",answers:[{content:"x = x + 1",value:!1},{content:"undefined",value:!1},{content:"NaN === NaN",value:!1},{content:"None. It's a hardware problem.",value:!0}]},{question:"What's the object oriented way to become wealthy?",answers:[{content:"Inheritance",value:!0},{content:"Have some class",value:!1},{content:"Super props",value:!1},{content:"Wealth is subjective",value:!1}]},{question:"What should you do when a bug is sad?",answers:[{content:"Help it out of a bind",value:!1},{content:"Console it",value:!0},{content:"Express your feelings",value:!1},{content:"Be more responsive",value:!1}]}]}],score:0},methods:{score_handler:function(){this.value&&score++},addToCart:function(){this.counter+=1,this.score++},updateQuiz:function(e){this.selectedVariant=e},quiz:function(){}}});