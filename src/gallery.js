function filterAssets(type){

const cards =
document.querySelectorAll(".asset-card");

cards.forEach(card=>{

if(type==="all"){

card.style.display="block";
return;

}

if(card.classList.contains(type))
card.style.display="block";

else
card.style.display="none";

});
}
