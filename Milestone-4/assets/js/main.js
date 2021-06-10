const app = new Vue({
    el: '#app',

    data:{
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        urlTvShow: 'https://api.themoviedb.org/3/search/tv',
        apiKey: '99b48ac4b26b50b984fcdf28ea59ab53',
        query: '',
        moviesData: null,
        tvShowsData: null,
        urlPoster:'https://image.tmdb.org/t/p/w342',
        flagsLanguages: ['it', 'en', 'fr', 'ja', 'de', 'es']

    },

    methods:{

        search(){
            const fullUrlMovie = `${this.urlMovie}?api_key=${this.apiKey}&query=${this.query}`
            console.log(fullUrlMovie);
            axios
            .get(fullUrlMovie)
            .then(resp => {
            console.log(resp.data);
            this.moviesData = resp.data
            })
            .catch(e => {
                console.error(e);
            })

            const fullUrlTvShow = `${this.urlTvShow}?api_key=${this.apiKey}&query=${this.query}`
            console.log(fullUrlTvShow);
            axios
            .get(fullUrlTvShow)
            .then(resp => {
                console.log(resp.data);
                this.tvShowsData = resp.data
            })
            .catch(e =>{
                console.error(e);
            })
        },

        getFlags(code){
            if(code === 'en') code = 'gb';
            if(code === 'ja') code = 'jp';
            return `https://www.countryflags.io/${code}/flat/32.png`
        }

    },

    mounted(){
        

    }

})