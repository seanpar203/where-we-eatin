export default {
    props: ['requesting', 'results'],

    template: require('./../../../templates/transparent-overlay.html'),

    computed: {
        overlayClass: function() {

            let returnedClass = 'overlay-container hidden';

            if(this.requesting && !this.results.length > 0)
                returnedClass = 'overlay-container visible spinner';

            if (this.results.length > 0 && !this.requesting)
                returnedClass = 'overlay-container visible results';

            return returnedClass
        }
    },

    filters: {
        miles: function(distance) {
            return distance > 0 ? distance + ' miles away from you.' : 'Less than a mile away!'
        }
    }
}