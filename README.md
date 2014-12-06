Ajaxify-any-website
===================

Simple code for ajax loading all internal links to your website. 

Simply add this javascript code where you normally would do in your website and add a new <div id="ajaxcontent"> just inside your <div id="content"> (or what ever you call your main content) wrapper. 

Make sure to place your content div only around the content you want to reload, your header and / or footer should be outside.

e.g:

<div id="headercontent"> // Stuff you do not want to reload
</div>
<div id="content"> //Stuff you want to ajax reaload without refreshing the page
    <div id="ajaxcontent">
    <div>
</div>
<div id="footercontent"> // Stuff you do not want to reload
</div>

It works by finiding every internal link on the website and adding a new class 'ajaxlink'. Once the class has been added a jquery rule prevents the usual link following behaviour once a link is clicked. Instead the script finds the link url and passes into a function which searches the target page and Ajax loads any content within the #ajaxcontent div found there. After it loads the content it then searches for any links again and adds the ajax class.

Visually the script uses jQuery animate to fade out the #content div and fade it in again.

You can see it in action on site www.hiddentemple.co.uk.

Since it uses a html class to facilitate the script it can sometimes conflict with other javascript enabled systems in which case the page will refresh as usual. For instance with Woocommerce it will not currently work with the add-to-cart buttons or the checkout and shopping cart pages.

Happy Ajaxing, happy to answer any questions if anyone has any.
