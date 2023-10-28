const {createApp} = Vue
const app = createApp({
    data(){
        return{

        }
    },
    created(){

    },
    methods:{
        redirection(){
            return window.location.href = "https://instagram.com/sofii_gxn?igshid=YTQwZjQ0NmI0OA=="
        },
        whatsapp(){
            return window.location.href = "https://wa.me/+5493625321242"
        }
    },
    computed:{

    }
})
app.mount('#app')