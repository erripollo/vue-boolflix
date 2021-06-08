const app = new Vue({
    el: '#app',

    data:{
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        apiKey: '99b48ac4b26b50b984fcdf28ea59ab53',
        query: '',
        moviesData: null

    },

    methods:{

        search(){
            const fullUrlMovie = `${this.urlMovie}?api_key=${this.apiKey}&query=${this.query}`
            console.log(fullUrlMovie);
            axios
            .get(fullUrlMovie)
            .then(resp => {
            console.log(resp.data.results);
            this.moviesData = resp.data.results
            })
            .catch(e => {
                console.error(e);
            })
        }

    },

    mounted(){
        

    }

})