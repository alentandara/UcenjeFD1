<<<<<<< HEAD
const {createApp} = Vue;

createApp({
    data(){
        return{
            brojac:0
        }
    },
    methods:{
        povecaj(){
            this.brojac++;
        },
        umanji(){
            this.brojac--;
        }
    }
}).mount('#app');
=======
const {createApp}=Vue;

createApp({
data(){
    return{
        brojac:0
    }

},
methods:{
    povecaj(){
        this.brojac++;
    },
    smanji(){
        this.brojac--;
    },
    povecajza2(){
        this.brojac+2;
    }
}
}
).mount('#app');
>>>>>>> e6570eb29a6e29a366c8cc931fd1f74dd2caaa6c
