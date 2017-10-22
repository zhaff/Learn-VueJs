var app = new Vue({
    el: '#app',
    data: {
        parentMessage: 'Parent',
        items: [{
                message: 'Number 1',
                active: false
            },
            {
                message: 'Number 2',
                active: false
            },
            {
                message: 'Number 3',
                active: true
            },
            {
                message: 'Number 4',
                active: false
            },
        ],
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        },
        staffs: [{
                id: 1,
                name: 'Zharfan'
            },
            {
                id: 2,
                name: 'Suhaida'
            },
            {
                id: 3,
                name: 'Nurul Iman'
            },
            {
                id: 4,
                name: 'Harith'
            },
            {
                id: 5,
                name: 'Zahra'
            },
        ],
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    methods: {
        viewStaff: function (id) {
            var staff = this.staffs.filter(function (item) {
                return item.id == id;
            })[0];

            alert('ID: ' + staff.id + ', Staff Name: ' + staff.name);
        },
        changeArray: function () {
            this.staffs[0].name = "Zharfan Mazli";
            // Vue.set(this.staffs, 0, { id: 1, name: "Zharfan Mazli " });
        },
        addAge: function () {
            Vue.set(this.object, 'email', 'zhaff@yahoo.com');
            console.log(this.object);
        },
        even: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            });
        }
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0;
            });
        },
        isGotActiveItems: function () {
            var status = false;

            this.items.filter(function (item) {
                if (item.active === true) {
                    status = true;
                }
            });

            return status;
        }
    }
})