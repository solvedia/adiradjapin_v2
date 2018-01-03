$(document).ready(function(){

	var userFeed = new Instafeed({
        get: 'user',
        userId: '6260249602',
        limit: 5,
        resolution: 'standard_resolution',
        accessToken: '6260249602.1677ed0.046f878b13b14bbab4773e92b3fe1975',
        sortBy: 'most-recent',
        template: '<li><a href="{{link}}" title="View this image on Instagram" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>',
    });


    userFeed.run();
	
});