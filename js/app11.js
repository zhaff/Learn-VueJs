var app = new Vue({
    el: '#app',
    data: {
        activeColor: 'red',
        fontSize: 30,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        },
        baseStyles: {
            color: 'green',
            'font-size': '20px'
        },
        overridingStyles: {
            'text-decoration': 'underline',
            transform: 'rotate(7deg)'
        }
    }
});