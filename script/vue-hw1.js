const vm = Vue.createApp({
    data:function(){
        return{
            information:[]
        }
    
    },
    methods:{
        getData(){
            axios.get("https://randomuser.me/api/?results=9")
            .then((resource)=>{
                this.information=resource.data.results
            })
        }   
    },
    mounted:function(){
        this.getData();
    }
});
vm.mount("#app");