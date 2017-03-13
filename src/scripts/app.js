console.log('wowow');
import $ from 'jquery';
import Backbone from 'backbone';

import LandingView from './views/view-home.js'
import {PlaylistModel, PlaylistCollection} from './models/model.js'

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app is routing')
		Backbone.history.start()
	},

	routes: {
		'' : 'showHomePage',
		'bbc1' : 'showBBCRadio1',
		'bbc2' : 'showBBCRadio2',
		'*default' : 'showErrorPage',
	},
// old way have to fix

showHomePage: function(){
	let view = new LandingView()
	view.render()
	// console.log('hiiiii')
	// $.getJSON(`/proxy?api=http://www.bbc.co.uk/radio1/playlist.json`).then(function(serverRes){
	// 	// console.log(serverRes)
	// 	let test = serverRes.playlist.a
	// 	console.log(test)
	// 	let testHtml = test.map(function(testObj){
	// 		// console.log(testObj)
	// 		return `
	// 		<div class="testDisplay">
	// 			<p>${testObj.artist}</p>
	// 		</div>
	// 		`
		// })
		//
		// 	console.log(testHtml)
		// 	document.querySelector('.test').innerHTML = testHtml
		// })

	},

//using collection
showBBCRadio1: function(){
		let bbcRadioCollInstance = new PlaylistCollection()
		bbcRadioCollInstance.fetch().then(function(serverRes){
			console.log(serverRes)

			return `
			<div class="test2">
				<p>${serverRes.artist}</p>
			</div>
			`
			document.querySelector('.test').innerHTML = bbcRadioCollInstance
		})
},
})
const myApp = new AppRouter()
// showHomePage: function(){
// 	console.log("hello")
// 	let appContainer = document.querySelector('#app-container')
// }
//
// showBBCRadio1: function(){
// 	let appContainer = document.querySelector('#app-container')
//
// }
