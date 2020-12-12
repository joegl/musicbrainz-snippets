// https://github.com/joegl/musicbrainz-snippets/

// get artist and release (album title)
var artist = document.getElementById("profile_title").getElementsByTagName('span')[0].getElementsByTagName('span')[0].getElementsByTagName('a')[0].innerHTML.trim();
var release = document.getElementById("profile_title").getElementsByTagName('span')[2].innerHTML.trim();
console.log(artist);
console.log(release);

// get tracklist
var tracklist_table = document.getElementById("tracklist").getElementsByClassName('playlist')[0];
var tracklist;
for (var i = 0, row; row = tracklist_table.rows[i]; i++) {
  var track_num = row.getElementsByClassName('tracklist_track_pos')[0].innerHTML;
  var track_title = row.getElementsByClassName('track')[0].getElementsByClassName('tracklist_track_title')[0].innerHTML;
  var track_time = row.getElementsByClassName('tracklist_track_duration')[0].getElementsByTagName('span')[0].innerHTML;
  var track = track_num + ". " + track_title;
  if(track_time != '') {
    track += " (" + track_time + ")"; 
  }
  
  //console.log(track);
  tracklist += "\n" + track;
}
console.log(tracklist);
