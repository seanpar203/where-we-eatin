export default {
    props: ['requesting', 'selected', 'results', 'location'],

    template: require('./../../../templates/transparent-overlay.html'),

    computed: {
        overlayClass: function () {

            let returnedClass = 'overlay-container hidden';

            // Overlay With Spinner When Sending Ajax Requests
            if (this.requesting && !this.results.length > 0)
                returnedClass = 'overlay-container visible spinner';

            // Overlay When Ajax Requests Returns With Results
            if (this.results.length > 0 && !this.requesting)
                returnedClass = 'overlay-container visible results';

            // Overlay When Waiting For Users Location
            if (this.location == null)
                returnedClass = 'overlay-container visible no-location';

            return returnedClass
        }
    },

    filters: {
        miles: function (distance) {

            switch (distance == distance) {

                case distance > 1:
                    return distance + ' miles away from you!';

                case distance == 1:
                    return distance + ' mile away from you!';

                case distance == 0:
                    return 'Less than a mile away!';
            }
        }
    }
}