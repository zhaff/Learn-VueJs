var app = new Vue({
    el: '#app',
    data: {
        ok: true,
        loginType: 'username'
    },
    methods: {
        toggle: function() {
            if (this.loginType === 'email') {
                this.loginType = 'username'
            } else {
                this.loginType = 'email'
            }
        }
    }
})