export const RadioView = function(obj){

  let playlist = obj.map(function(bbc){
    return `
          <div class="col-xs-4 artist">
            <div class="thumbnail">
              <img src="${bbc.image}"/>
              <div class="caption">
                <h2>${bbc.artist}</h2>
                <h4>${bbc.title}</h4>
              </div>
            </div>
          </div>
    `
  }).join('')
  return playlist
}
