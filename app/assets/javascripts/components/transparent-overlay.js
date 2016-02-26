export default {
    props: ['requesting', 'results', 'location'],

    template: require('./../../../templates/transparent-overlay.html'),

    computed: {
        overlayClass: function() {

            let returnedClass = 'overlay-container hidden';

            // Overlay With Spinner When Sending Ajax Requests
            if(this.requesting && !this.results.length > 0)
                returnedClass = 'overlay-container visible spinner';

            // Overlay When Ajax Requests Returns With Results
            if (this.results.length > 0 && !this.requesting)
                returnedClass = 'overlay-container visible results';

            // Overlay When Waiting For Users Location
            if(this.location == null)
                returnedClass = 'overlay-container visible no-location';

            return returnedClass
        }
    },

    filters: {
        miles: function(distance) {
            return distance > 0 ? distance + ' miles away from you.' : 'Less than a mile away!'
        }
    }
}