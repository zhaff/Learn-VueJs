Vue.component('my-component', {
    template: '<div>A custom component!</div>'
})

Vue.component('child', {
    props: ['myMessage'],
    template: '<span>{{ myMessage }}</span>'
})

var Child = {
    template: '<div>A custom component2!</div>'
}

new Vue({
    el: '#app',
    components: {
        'my-component2': Child
    },
    data: {
        parentMsg: 'test'
    }
})