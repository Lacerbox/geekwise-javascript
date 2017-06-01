// SCRIPT FOR FINDCHILI.HTML

// FOR RANDOM MP3 PLAY ON PAGE LOAD
    function play() {
        var a = Math.random()*2;
        a=Math.floor(a);

            if(a==1) {
                document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' autoplay><source src='herman1.mp3' type='audio/mpeg'></audio>";
            }
						// BOTH THESE ORIGINALLY HAD "type='audio/ogg'"
            if(a==0) {
                document.getElementById('soundtrack').innerHTML="<audio id='background_audio1' autoplay><source src='herman2.mp3' type='audio/mpeg'></audio>";
            }
    }

// FOR 'Find the red hot chili' GAME
<!--
	//Dealing with the mouse over image. 
	img1on = new Image();
	img1on.src = "img/chili_on.gif";

	//As above for mouse off image.    
	img1off = new Image();
	img1off.src = "img/chili_off.gif";

	//Dealing with the mouse over image. 
	img2on = new Image();
	img2on.src = "img/chili_on.gif";

	//As above for mouse off image.    
	img2off = new Image();
	img2off.src = "img/chili_off.gif";

	//Dealing with the mouse over image. 
	img3on = new Image();
	img3on.src = "img/chili_on.gif";

	//As above for mouse off image.    
	img3off = new Image();
	img3off.src = "img/chili_off.gif";

	//Dealing with the mouse over image. 
	img4on = new Image();
	img4on.src = "img/chili_on.gif";

	//As above for mouse off image.    
	img4off = new Image();
	img4off.src = "img/chili_off.gif";

	//Dealing with the mouse over image. 
	img5on = new Image();
	img5on.src = "img/red_chili_on.gif";

	//As above for mouse off image.    
	img5off = new Image();
	img5off.src = "img/chili_off.gif";

// Function to "activate" images.
function imgAct(imgName)
	{
		document[imgName].src = eval(imgName + "on.src");
	}

// Function to "deactivate" images.
function imgInact(imgName)
	{
		document[imgName].src = eval(imgName + "off.src");
	}
// -->