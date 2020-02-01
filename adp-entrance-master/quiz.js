// var app = new Vue({
//     el: '#app',
//     data:{
//         info: []
//     },
//     mounted (){
//         axios
//             .get('quiz.json')
//                 .then(response => (this.info = response.data))
//     },
//   })

var products_by_category = new Vue({
    el:'#products_by_category',
    data:{
        products_by_category:[]
    },
    mounted(){
        axios
            .get('/catalog/categories/')
                .then(response => (this.products_by_category = response.data));
    
    }
})