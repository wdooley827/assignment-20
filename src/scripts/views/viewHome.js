export const LandingView = function(obj){

  let intro = obj.map(function(bbc){
    return `
      <div class='home_introducing'>
        <h1>Introducing</h1>
          <img src="${bbc.image}""/>
            <h1>${bbc.artist}</h2>
            <p>${bbc.title}'</h3>
      </div>
    `
  }).join('')
    return intro
}
