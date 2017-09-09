Vue.component('datepicker', {
    template: '<input  class="form-control" />',
    props: ['options'],
    watch: {
        options: {
            handler: function (val, oldVal) {
                this.pdatepicker.destroy();
                this.pdatepicker = $(this.$el).persianDatepicker(val);
                this.pdatepicker.show()
            },
            deep: true
        },

    },
    mounted: function () {
        this.pdatepicker = $(this.$el).persianDatepicker(this.options);
    }

});