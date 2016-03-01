export default {
    props: ['results', 'selected'],

    template: require('./../../../templates/header-component.html'),

    computed: {
        resultsClass: function() {
            return this.results.length > 0 ? 'active-results' : 'no-results';
        }
    },

    methods: {
        clearResults: function() {
            this.selected = {};
            this.results = [];
        }
    }
}
