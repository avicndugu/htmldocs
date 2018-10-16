var semantics= document.getElementById('semantics');
var hidingHeader= document.getElementById('header');
var hidingSection =document.getElementById('section');
var hidingArticle =document.getElementById('article');
var hidingAside =document.getElementById('aside');
var hidingFooter =document.getElementById('footer');
var semanticLink=document.getElementById('semantic-link');
var navLink=document.getElementById('nav-link');
var headerLink=document.getElementById('header-link');
var sectionLink=document.getElementById('section-link');
var articleLink= document.getElementById('article-link');
var asideLink= document.getElementById("aside-link");
var footerLink= document.getElementById("footer-link");

/////////////SHOWING ONLY ONE SECTION OF THE CONTENT ////////////
function showSemantics() {
	semantics.style.display="block";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
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
	semantics.style.display="none";
	hidingHeader.style.display="block";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
	// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="#d0d0f0";
	sectionLink.style.background="none";
	articleLink.style.background="none";
	asideLink.style.background="none";
	footerLink.style.background="none";
}
function showSection() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="block";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
	// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="#d0d0f0";
	articleLink.style.background="none";
	asideLink.style.background="none";
	footerLink.style.background="none";}
function showArticle() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="block";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
		// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="none";
	articleLink.style.background="#d0d0f0";
	asideLink.style.background="none";
	footerLink.style.background="none";
}
function showAside() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="block";
	hidingFooter.style.display="none";
		// BACKGROUND COLOR
	navLink.style.background="none";
	headerLink.style.background="none";
	sectionLink.style.background="none";
	articleLink.style.background="none";
	asideLink.style.background="#d0d0f0";
	footerLink.style.background="none";
}
function showFooter() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="block";
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
document.querySelector('#semantic-link').addEventListener("click", function() {
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