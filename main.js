var semantics= document.getElementById('semantics');
var hidingHeader= document.getElementById('header');
var hidingSection =document.getElementById('section');
var hidingArticle =document.getElementById('article');
var hidingAside =document.getElementById('aside');
var hidingFooter =document.getElementById('footer');
/////////////SHOWING ONLY ONE SECTION OF THE CONTENT ////////////
function showSemantics() {
	semantics.style.display="block";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
	console.log('1');
}
showSemantics();
function showHeader() {
	semantics.style.display="none";
	hidingHeader.style.display="block";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
	console.log(2);
}
function showSection() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="block";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
}
function showArticle() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="block";
	hidingAside.style.display="none";
	hidingFooter.style.display="none";
}
function showAside() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="block";
	hidingFooter.style.display="none";
}
function showFooter() {
	semantics.style.display="none";
	hidingHeader.style.display="none";
	hidingSection.style.display="none";
	hidingArticle.style.display="none";
	hidingAside.style.display="none";
	hidingFooter.style.display="block";
}
/////////////SHOWING ONLY ONE SECTION OF THE CONTENT ////////////
////////CLICK EVENT TO CHOOSE WHAT SECTION TO BE DISPLAYED /////////
document.querySelector('#semantic-link').addEventListener("click", function() {
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