// Services
import OccasionService from '../services/occasion';
import $http from '../services/api';

// Components
import OccasionIcons from './../components/occasion-icons';
import BudgetBrackets from './../components/budget-brackets';
import LoadingSpinner from './../components/loading-animation';

// Third Party Libraries
import Vue from 'vue';
import _ from 'lodash';

Vue.config.debug = true;

const app = {
    el: '#occasion-section',

    data: {
        Occasion: OccasionService,
        geolocation: window.navigator.geolocation,
        location: null,
        requesting: false
    },

    components: {
        OccasionIcons,
        BudgetBrackets,
        LoadingSpinner
    },

    attached: function() {
        if (this.geolocation) {
            window.navigator.geolocation.getCurrentPosition((pos) => {
                console.log(pos.coords);
                $http.getLocation(pos.coords.latitude, pos.coords.longitude)
                    .then((res) => {
                        debugger;
                        console.log(res.data.results[0]);
                    })
                    .catch((err) => {
                        console.log(err.message);
                    })
            });
        }
    },

    computed: {
        fulfilled: function() {
            return this.Occasion.selectedOccasion.name && this.Occasion.selectedBudget.price && this.location;
        }
    },
    watch: {

        'fulfilled': function(val, oldVal) {
            if (val) {
                this.requesting = true;
                $http.Search('/search', {
                    term: this.Occasion.selectedOccasion.name,
                    location: this.location
                })
                .then((res) => {
                    console.log(res);
                    this.Occasion.results = res;
                })
                .catch((err) => {
                    this.Occasion.error = err.message;
                })
                this.requesting = false;
            }
        }

    }

};

export default new Vue(app);