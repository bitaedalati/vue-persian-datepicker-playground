Vue.component('datepicker', {
    template: '<div>' +
    '<div v-if="options.inline"></div>' +
    '<input class="form-control"  v-else type="text" plcaholder="test" />' +
    '</div>',
    props: ['options'],
    watch: {
        options: {
            handler: function (val, oldVal) {
                console.log(this.options.inline)
                var that = this;
                setTimeout(function () {
                    that.pdatepicker.destroy();
                    that.pdatepicker = $(that.$el).children('*').persianDatepicker(val);
                    that.pdatepicker.show();
                }, 1);
            },
            deep: true
        },
    },
    mounted: function () {
        this.pdatepicker = $(this.$el).children('*').persianDatepicker(this.options);
    }


});
Vue.component('clipboard' , {

})

$(document).ready(function () {
    $('#configTab a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
})

new Vue({
    deep: true,
    el: '#app',
    data: {
        datepickerOptions: {
            inline: false,
            format: 'l',
            persianDigit: true,
            initialValue: true,
            minDate: 1504713660730,
            maxDate: 1604713660730,
            autoClose: false,
            position: 'auto',
            altFormat: 'lll',
            altField: '#altfieldExample',
            onlyTimePicker: false,
            onlySelectOnDate: false,
            navigator: {
                enabled: true,
                scroll: {
                    enabled: true
                },
                text: {
                    btnNextText: '<',
                    btnPrevText: '>'
                }
            },
            toolbox: {
                enabled: true,
                text: {
                    btnToday: 'today'
                }
            },
            timePicker: {
                enabled: true,
                step: 01,
                hour: {
                    enabled: true,
                    step: 2
                },
                minute: {
                    enabled: true,
                    step: 02
                },
                second: {
                    enabled: true,
                    step: 02
                },
                meridian: {
                    enabled: true
                }
            },
            dayPicker: {
                enabled: true,
                titleFormat: 'YYYY MMMM'
            },
            monthPicker: {
                enabled: true,
                titleFormat: 'YYYY'
            },
            yearPicker: {
                enabled: true,
                titleFormat: 'YYYY'
            }
        },
        render: h => h('#App')
    }

})