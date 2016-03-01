// Services
import OccasionService from '../services/occasion';
import $http from '../services/api';

// Components
import OccasionIcons from './../components/occasion-icons';
import BudgetBrackets from './../components/budget-brackets';
import OpaqueOverlay from './../components/transparent-overlay';
import HeaderComponent from './../components/header-component';

// Third Party Libraries
import Vue from 'vue';

//Debugging
Vue.config.debug = true;

const app = {
    el: '#occasion-app',

    data: {
        Occasion:    OccasionService,
        requesting:  $http.requesting,
        geolocation: window.navigator.geolocation,
        location:    null
    },

    components: {
        OccasionIcons,
        BudgetBrackets,
        OpaqueOverlay,
        HeaderComponent
    },

    attached: function() {
        if (this.geolocation) {
            window.navigator.geolocation.getCurrentPosition((pos) => {
                $http.getLocation(pos.coords.latitude, pos.coords.longitude)
                    .then((res) => {
                        this.location = res.data.results[0].formatted_address;
                    })
                    .catch((err) => {
                        alert('Sorry, There was an error. Try refreshing page!')
                    });
            });
        }
    },

    computed: {
        fulfilled: function() {
            return this.Occasion.selectedOccasion.name &&
                   this.location &&
                   this.Occasion.results.length == 0;
        },
        resultsClass: function() {
            return this.Occasion.results.length > 0 ? 'active-results' : 'no-results';
        }
    },
    watch: {
        'fulfilled': function (val, oldVal) {
            if (val) {
                this.requesting = true;
                $http.Search('/search', {
                    term:     this.Occasion.selectedOccasion.term,
                    location: this.location
                })
                .then((res) => {
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