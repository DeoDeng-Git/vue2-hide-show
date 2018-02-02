var vm = new Vue({
    el: '#app',
    data: {
    	active: false,
        alertMsg: ''
    },
    methods:{
    	alertInfo:function(cls, msg){
    		this.active = true
    		this.alertMsg = cls
    		document.getElementById('msg').innerHTML = msg
    		setTimeout(()=>this.active = false,2000)
    	},
    	showAlertS: function(){
    		this.alertInfo('alert-success', 'Success!!!!')
    	},
    	showAlertD: function(){
    		this.alertInfo('alert-danger', 'Danger!!!!')

    	}
    }
})
