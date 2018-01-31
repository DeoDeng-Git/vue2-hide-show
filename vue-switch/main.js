var vm = new Vue({
    el: '#app',
    data: {
        features:[
            {id:0, link:'1280x960.png', name:'big image'},
            {id:1, link:'640x480.png', name:'small image'}
        ],
        image:''
    },
    methods:{
    	showFeature: function(id){
            this.image = this.features[id].link
    	}
    }
})