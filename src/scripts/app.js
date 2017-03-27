import $ from 'jquery';
import Backbone from 'backbone';
import {LandingView} from './views/viewHome.js'
import {RadioView} from './views/viewRadio.js'
import {PlaylistModel, PlaylistCollection} from './models/model.js'


let insert = document.querySelector('.test')

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app is routing')
		Backbone.history.start()
	},

	routes: {
		'' : 'showHomePage',
		'radio/1' : 'showBBCRadio1',
		'radio/2' : 'showBBCRadio2',
		'*default' : 'showErrorPage',
	},

	showHomePage: function(){
     let bbcRadioCollection = new PlaylistCollection('1');
       bbcRadioCollection.fetch().then(function(serverRes){
				 console.log(serverRes)
         let results = serverRes.playlist.introducing;
				 console.log(results)
           insert.innerHTML = LandingView(results);
       });
   },

   showBBCRadio1: function(){
     let bbcRadioCollection = new PlaylistCollection('1');
       bbcRadioCollection.fetch().then(function(serverRes){
         let results = serverRes.playlist.a;
           insert.innerHTML = RadioView(results);
     });
   },

   showBBCRadio2: function(){
     let bbcRadioCollection = new PlaylistCollection('2');
       bbcRadioCollection.fetch().then(function(serverRes){
         let results = serverRes.playlist.a;
           insert.innerHTML = RadioView(results);
       });
   },

	 showErrorPage: function(){
		 insert.innerHTML = `<h1 class="default">Wrong turn!</h1>`;
	 }
})

const myApp = new AppRouter();
