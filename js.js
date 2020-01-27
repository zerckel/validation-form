let app = new Vue({
  el: '#app',
  data: {
    email: '',
    mdp: '',
    errorMail: '',
    errorMdp: '',
    check: true
  },
  methods: {
    submit: function () {
      let vm = this
      if (this.email !== '' || this.mdp !== ''){
        fetch('http://localhost/Projects/validation/api.php')
                .then(data => {
                  if(data.status === 400){
                    data.json().then(res=>{
                      vm.errorMdp = res.password[0]
                      vm.errorMail = res.email[0]
                      this.check = false
                    })
                  }else{
                    this.check = true
                  }
                })
        }else{
          console.log('error')
          this.check = false
        }
    }
  }
})