#Setup:

##### 1. clone this repository and npm install

##### 2. In terminal have 2 tabs open

##### 3. In one tab, run the webpack task runner. 
  ```
  npm run go
  ```

##### 4. In another tab, run the proxy server
  ```
  npm start
  ```

##### 5. use the proxy server to access a non-CORS/non-JSONP API under by sending requests to the proxy server endpoint:
  ```
  /proxy?api=http://www.bbc.co.uk/radio1/playlist.json
  ```
  - example:

  **jQuery**
  ```
  $.getJSON('http://www.bbc.co.uk/radio1/playlist.json').then(...)
  ```


  **Backbone** 
  ```
  let SomeCollection = Backbone.Collection.extend({
    url: 'http://www.bbc.co.uk/radio1/playlist.json',
  })
  ```
#####6 go to `http://localhost:3000` to see your `index.html` file