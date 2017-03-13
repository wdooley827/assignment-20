import Backbone from 'backbone'

const MultiView = Backbone.View.extend({
  el: '.test',

  _playlistThumbnailHtml: function(playlistObj){
    return `
    <div class="col-sm-6 col-md-4">
      <div class="thumbnail">
        <img src="${playlistObj.image}" alt="...">
        <div class="caption">
          <h3>${playlistObj.artist}</h3>
          <p>${playlistObj.title}</p>
        </div>
      </div>
    </div>
    `
  }
  _templateHtml: function(playlistCollection){
    let playlist =
  }
})
