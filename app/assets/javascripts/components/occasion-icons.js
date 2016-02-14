import OccasionService from './../services/occasion';

export default {
  props: ['selected'],

  template: require('./../../../templates/occasion-icons.html'),

  data() {
    return {
      occasions: OccasionService.occasions
    }
  }
}
