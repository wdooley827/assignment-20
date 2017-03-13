import $ from 'jquery';
import Backbone from 'backbone';

export const PlaylistModel = Backbone.Model.extend({})
export const PlaylistCollection = Backbone.Collection.extend({
    model: PlaylistModel,
    url : `/proxy?api=http://www.bbc.co.uk/radio1/playlist.json`,
      parse: function(serverRes){
    // console.log('parsing response!')
    return serverRes.playlist.a
  },
  initialize: function(){}
})
