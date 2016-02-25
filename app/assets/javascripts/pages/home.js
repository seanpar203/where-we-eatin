// Services
import OccasionService from '../services/occasion';
import $http from '../services/api';

// Components
import OccasionIcons from './../components/occasion-icons';
import BudgetBrackets from './../components/budget-brackets';
import LoadingSpinner from './../components/transparent-overlay';

// Third Party Libraries
import Vue from 'vue';

//Debugging
Vue.config.debug = true;

const app = {
    el: '#occasion-section',

    data: {
        Occasion:    OccasionService,
        requesting:  $http.requesting,
        geolocation: window.navigator.geolocation,
        location:    null
    },

    components: {
        OccasionIcons,
        BudgetBrackets,
        LoadingSpinner
    },

    attached: function() {
        if (this.geolocation) {
            window.navigator.geolocation.getCurrentPosition((pos) => {
                $http.getLocation(pos.coords.latitude, pos.coords.longitude)
                    .then((res) => {
                        this.location = res.data.results[0].formatted_address;
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            });
        }
    },

    computed: {
        fulfilled: function() {
            return this.Occasion.selectedOccasion.name &&
                   this.location &&
                   this.Occasion.results.length == 0;
        }
    },
    watch: {
        'fulfilled': function (val, oldVal) {
            if (val) {
                this.requesting = true;
                $http.Search('/search', {
                    term:     this.Occasion.selectedOccasion.name,
                    location: this.location
                })
                .then((res) => {
                    console.log(res.data);
                    this.Occasion.results = this.Occasion.formatPlaces(res.data['businesses']);
                    this.requesting = false;
                })
                .catch((err) => {
                    this.Occasion.error = err.message;
                    this.requesting = false;
                });
            }
        }
    }
};

export default new Vue(app);