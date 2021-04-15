var movieName= prompt('Hello, please choose your fav will smith movie name Focus or Hitch or Hancock');

while(movieName !== 'Focus'&& movieName !== 'Hitch' && movieName!== 'Hancock'){
  movieName = prompt('Please only enter the name Focus or Hitch or Hancock ');
}


var userChoose;

if(movieName === 'Focus'){
userChoose='<img src="http://static.rogerebert.com/uploads/movie/movie_poster/focus-2015/large_focus_ver2.jpg">';
}else if (movieName === 'Hitch'){
  userChoose='<img src="https://resizing.flixster.com/w_d4Je0ldmFkJdQ2Q-Eg1CdjzhA=/206x305/v2/https://flxt.tmsimg.com/assets/p35562_p_v10_bb.jpg">';
}
else if (movieName === 'Hancock'){
  userChoose='<img src="https://flxt.tmsimg.com/assets/p176343_p_v10_aa.jpg">';
}


var imagesNumber= prompt('How many image do you want?');

for(var i=0 ; i < imagesNumber; i++){
  document.write(userChoose);
}