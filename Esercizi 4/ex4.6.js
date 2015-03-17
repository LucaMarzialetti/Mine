//Esercizi-4 js
//implement a MusicBox object that should make the following code work well:

(function() {
function MusicBox(){
    if(this instanceof MusicBox)
      this.library = [];
    else
      return new MusicBox();
}

function Album(artist, title){
  if(this instanceof Album){
    this.artist=artist;
    this.title=title;    
  }
  else 
    return new Album(artist,title);
}

Album.prototype.play = function(){
  for(var i=0; i<box.library; i++)
    if(box.library[i].album.title===this.title&&box.library[i].album.artist===this.artist)
      box.library[i].time+=1;
}

MusicBox.prototype.addAlbum = function(a){
  while(arguments.length--)
  if(a instanceof Album)
    this.library.push({album:a,times:0});
  else 
    if(a instanceof Array)
      for(item in a)
        this.library.addAlbum(item);
};

MusicBox.prototype.favoriteAlbum = function(){
  var max=0;
  var ind_max=0;
  for(var i = 0; i<this.library.length; i++) 
    if(this.library[i].times>max){
      max = this.library[i].times;
      ind_max = i;
    }
    return this.library[ind_max].album.artist+" - "+this.library[ind_max].album.title;
  };

  var box = MusicBox();
  var a1 = Album("The Who", "Tommy");
  var a2 = Album("Tom Waits", "Closing Time");
  var a3 = Album("John Cale", "Paris 1919");
  var favorite;

  box.addAlbum(a1);
  box.addAlbum(a2,a3);

  a1.play() ; // prints "Playing The Who - Tommy"
  a2.play(); // prints "Playing Tom Waits - Closing Time"  
  a1.play(); // prints "Playing The Who - Tommy"

  favorite = box.favoriteAlbum(); 

  // prints "favorite album is The Who - Tommy"
  console.log("favorite album is " + favorite);
  console.log(box);
}());