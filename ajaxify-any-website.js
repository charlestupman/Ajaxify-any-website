
//function for searching for internal links and adding a new class 'ajaxlink'
jQuery(document).ready(function($){ 
	var comp = new RegExp(location.host);
		$('a').each(function(){
			if(comp.test($(this).attr('href'))){         
				$(this).addClass('ajaxlink');
			}
		})
})


jQuery(document).ready(function($){
	$('.ajaxlink').click(function(e){
		e.preventDefault();//When a link is clicked prevent default action
		linkstring = $(this).attr("href"); //find the url and put it into a link
		$('#content').animate({'opacity':'0'},1000, ajaxify); //fade out the content
	})

	
function ajaxify(){
		$(this).load(linkstring + ' #ajaxcontent', faderin); //ajax load the new info and bring it in
		window.history.pushState(null,'hi', linkstring); //change the web address to new url
}


function ajaxlinkgenerator(){ // add class to new links in loaded content
	var comp = new RegExp(location.host);
		$('a').each(function(){
			if(comp.test($(this).attr('href'))){    
				$(this).addClass('ajaxlink');
	}
})
}

function faderin(){
	$('#content').animate({'opacity': '1'}, 1000, ajaxlinkgenerator); //fade in content div
}	
})