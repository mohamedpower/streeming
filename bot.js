client.on('ready', function(){
    var ms = 100000 ;
    var setGame = [`+help `,`PoWeR MC`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/falsteni_`);
    }, ms);100000
name: '-Universe Town` 1K-Soon........ ',
    application_id: '353901189357764609',//هنا ايدي البوت 
     assets: {
         large_image:   `509420418453471236`, //هنا id صوره يلي جبت
  
    }
  }
    });
  
   
});

client.login(process.env.BOT_TOKEN);
