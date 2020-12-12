// Run this in your browser's JavaScript console, then jQuery should be available...
var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type
jQuery.noConflict();

// run this to pull tracklists from amazon page
var trackList;
$('#dmusic_tracklist_content tr').each(function() {
  var currenTD = 0;
  var trackInfo = '';
  $(this).find('td').each(function() {
    currenTD++;
    // trackno
    if(currenTD == 1) trackInfo += $(this).find('div.TrackNumber-Default-Color').html().trim();
    // title
    if(currenTD == 2) trackInfo += " - "+$(this).find('a.TitleLink').html().trim();
    // length
    if(currenTD == 3) trackInfo += " - "+$(this).find('span').html().trim();
  });
  trackList += trackInfo+"\n";
});
console.log(trackList);
