//vue

const vm =Vue.createApp({
    data(){
        return{
            message: 'Hello Vue!',
            name:'faker',
            num:7,
            isActive:true,
            word:0,
            person:[
            {
                name:"小明",
                image:"./image/bbb14d2c9bfef7e074d69defb5ca47e4.png",
                cash:1000,
                sex:"male",
            },
            {
                name:"阿姨",
                image : null,
                cash:50000,
                sex:"female",
            },
            {
                name:"天天",
                image:null,
                cash:10000,
                sex:"female",
            }]
        }
    },
    methods:{
        clickAlert(){
            alert('我被觸發了');
        },
        numPlus(a){
            a.cash++;                
        },
        changeCash(a){
            console.log(a);
        },            
        words(){
            if( 10 === 5 || 10 === 5){
                this.word = "yes"
            }
            else{
                this.word = "no"
            }
        }   
    }

});
vm.mount('#app');