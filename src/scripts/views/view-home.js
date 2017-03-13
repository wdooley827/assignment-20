import Backbone from 'backbone'

const LandingView = Backbone.View.extend({
  el: '.test',

  events : {
    "click .home-btn" : "homeBtn",
    "click .bbc1-btn" : "bbcRadio1Btn",
    "click .bbc2-btn" : "bbcRadio2Btn"
  },

  homeBtn: function(){
    window.location.hash = ''
  },

  bbcRadio1Btn: function(){
    window.location.hash = 'bbc1'
  },

  bbcRadio2Btn: function(){
    window.location.hash = 'bbc2'
  },

  _templateHtml: function(){
    return `
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
      <button type="button" class="btn btn-default navbar-btn home-btn">Home</button>
      <button type="button" class="btn btn-default navbar-btn bbc1-btn">BBC Radio 1</button>
      <button type="button" class="btn btn-default navbar-btn bbc2-btn">BBC Radio 2</button>
      </div>
    </nav>
    `
  },

  render: function(){
    this.el.innerHTML = this._templateHtml()
  }
})

export default LandingView
