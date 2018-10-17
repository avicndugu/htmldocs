var semanticLink=document.getElementById('intro-link');
var navLink=document.getElementById('nav-link');
var headerLink=document.getElementById('header-link');
var sectionLink=document.getElementById('section-link');
var articleLink= document.getElementById('article-link');
var asideLink= document.getElementById("aside-link");
var footerLink= document.getElementById("footer-link");

/////////////SHOWING ONLY ONE SECTION OF THE CONTENT ////////////
function showSemantics() {
// background color
	navLink.style.background="#d0d0f0";	
	headerLink.style.background="none";
	sectionLink.style.background="none";
	articleLink.style.background="none";
	asideLink.style.background="none";
	footerLink.style.background="none";
}
showSemantics();
function showHeader() {
	// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="#d0d0f0";
	sectionLink.style.background="none";
	articleLink.style.background="none";
	asideLink.style.background="none";
	footerLink.style.background="none";
}
function showSection() {
	// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="#d0d0f0";
	articleLink.style.background="none";
	asideLink.style.background="none";
	footerLink.style.background="none";}
function showArticle() {
		// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="none";
	articleLink.style.background="#d0d0f0";
	asideLink.style.background="none";
	footerLink.style.background="none";
}
function showAside() {
		// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="none";
	articleLink.style.background="none";
	asideLink.style.background="#d0d0f0";
	footerLink.style.background="none";
}
function showFooter() {
		// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="none";
	articleLink.style.background="none";
	asideLink.style.background="none";
	footerLink.style.background="#d0d0f0";
}
/////////////SHOWING ONLY ONE SECTION OF THE CONTENT ////////////
////////CLICK EVENT TO CHOOSE WHAT SECTION TO BE DISPLAYED /////////
document.querySelector('#intro-link').addEventListener("click", function() {
	showSemantics();
});
document.querySelector('#nav-link').addEventListener("click", function() {
	showSemantics();
});
document.querySelector('#header-link').addEventListener("click", function() {
	showHeader();
});
document.querySelector('#section-link').addEventListener("click", function() {
	showSection();
});
document.querySelector('#article-link').addEventListener("click", function() {
	showArticle();
});
document.querySelector('#aside-link').addEventListener("click", function() {
	showAside();
});
document.querySelector('#footer-link').addEventListener("click", function() {
	showFooter();
});
////////END OF CLICK EVENT TO CHOOSE WHAT SECTION TO BE DISPLAYED /////////