#Setup:

##### 1. in your `~/TIY/assignments` : rename assingment-20 to assigment-XXX 
```
mv assignment-20 assignment-XXX
```

##### 2. clone this repository into a now-new `assignment-20` directory
```
git clone git@github.com:t3patterson/webpack-node-proxy-server.git assignment-20

npm install
```

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
  - examples on how to use in applicatione:

  **jQuery**
  ```
  $.getJSON('/proxy?api=http://www.bbc.co.uk/radio1/playlist.json').then(...)
  ```


  **Backbone** 
  ```
  let SomeCollection = Backbone.Collection.extend({
    url: '/proxy?api=http://www.bbc.co.uk/radio1/playlist.json',
  })
  ```

#####6 go to `http://localhost:3000` to see your `index.html` file.

The node webserver is running a web server that will serve the index.html file from that location.

#####7 copy all the files/folders from your previous `src/` into the `src/` of this new assigment build

```
cp -r ../assignment-XXX/src/* ./src/

```

#####8 move the `assignment-XXX/index.html` into `assignment-20/dist/index.html`
