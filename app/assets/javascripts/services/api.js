import axios from 'axios';
import oAuth from './cryptography';

class ApiService {
  constructor() {
    this.axios = axios;
    this.oAuth = oAuth;
    this.requestConfig = {
      method: 'GET',
      baseUrl: 'https://api.yelp.com/v2/search?',

      oAuth: {
        oauth_consumer_key:      'E3MauMLwcDnp-SB3P7QeMg',
        oauth_token:             'CrOq_0JVCR0MKdEQwhmxxTrgb9FWEdsx',
        oauth_signature_method:  'HMAC-SHA1',
        tokenSecret:             'xBydDwQXBphDtRYyZWfTmdK858o',
        consumerSecret:          'UB8RtkrbERURQAGSR2ZCd42_7SQ'
      }
    }
  }

  setUpConfig(occasion, location) {
    var method = this.requestConfig.method,
        url = this.requestConfig.baseUrl,
      parameters = {
        oauth_consumer_key: this.requestConfig.oAuth.oauth_consumer_key,
        oauth_token: this.requestConfig.oAuth.oauth_token,
        oauth_signature_method: this.requestConfig.oAuth.oauth_signature_method,
        oauth_timestamp: Date.now(),
        oauth_nonce: this.oAuth.createNonce(20),
        term: occasion,
        location: location
      },
      consumerSecret = this.requestConfig.oAuth.consumerSecret,
      tokenSecret =this.requestConfig.oAuth.tokenSecret,
      signature = oAuth.createSignature(
        method,
        url,
        parameters,
        consumerSecret,
        tokenSecret),

      config = {
        url: url,
        method: method,
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        params: parameters,
        timeout: 1000,
        responseType: 'json'
      };
    config.params.oauth_signature = signature;

    this.sendRequest(config)
  }

  sendRequest(config) {
      return this.axios(config);
  }
}

