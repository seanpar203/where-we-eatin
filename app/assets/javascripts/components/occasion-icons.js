import OccasionService from './../services/occasion';

export default {
  props: ['selected', 'results'],

  template: require('./../../../templates/occasion-icons.html'),

  data() {
    return {
      occasions: OccasionService.occasions
    }
  },

  methods: {
    selectOccasion: function(occasion) {
      this.results = [];
      this.selected = occasion;
    }
  }
}
