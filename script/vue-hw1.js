const vm = Vue.createApp({
    data:function(){
        return{
            information:[]
        }
    
    },
    methods:{},
    mounted:function(){
        axios.get("https://randomuser.me/api/?results=9")
            .then((resource)=>{
                this.information=resource.data.results
            })
    }
});
vm.mount("#app");