import $ from 'jquery';
import Backbone from 'backbone';

export const PlaylistModel = Backbone.Model.extend({})

export const PlaylistCollection = Backbone.Collection.extend({
    model: PlaylistModel,
    url : ``,
      initialize: function(route){
        this.url = `/proxy?api=http://www.bbc.co.uk/radio${route}/playlist.json`
      },

      parse: function(serverRes){
      return serverRes
  },
})
