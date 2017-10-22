var app = new Vue({
    el: '#app',
    data: {
        isActive: true,
        hasError: false
    }
})

var app2 = new Vue({
    el: '#app2',
    data: {
        classObject: {
            active: true,
            'text-danger': true
        }
    }
})

var app3 = new Vue({
    el: '#app3',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})

Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var app4 = new Vue({
    el: '#app4',
    data: {
        isActive: true
    }
});