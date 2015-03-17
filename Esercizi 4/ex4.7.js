//Esercizi-4 js
//write the functions that will make the following code work:

(function () {
  function Photo(title){
    if(this instanceof Photo){
      this.title=title;
      this.tags = [];
    }
    else 
      return new Photo(title);
  }

  function PhotoAlbum(){
    if(this instanceof PhotoAlbum)
      this.album=[];
    else
      return new PhotoAlbum;
  }

  Photo.prototype.tag = function(name){this.tags.push(name);};
  Photo.prototype.showTags = function(){this.tags.forEach(function(i){console.log(i);})};

  PhotoAlbum.prototype.addPicture = function(picture){this.album.push(picture);};
  PhotoAlbum.prototype.showPictures = function(tag){this.album.map(function(item,i,array){array.tags.filter(function(j){if(j===tag)return })})};
  var album = PhotoAlbum();
  var p;

  p = Photo("Paris Trip 1");
  p.tag("Jimmy");
  p.tag("Jane");
  p.tag("Jeff");

  album.addPicture(p);

  p = Photo("Look the Eiffel");
  p.tag("Jimmy");
  p.tag("Max");
  album.addPicture(p);

  p = Photo("OMG it's so high");
  p.tag("Jimmy");
  p.tag("Jane");

  // prints "Jimmy, Jane"
  p.showTags();

  album.addPicture(p);

  // prints "Paris Trip 1, Look the Eiffel, OMG it's so high"
  album.showPictures("Jimmy");

  // prints "Paris Trip 1, OMG it's so high"
  album.showPictures("Jane");    
}());