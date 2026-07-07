const imagens = [
    "impressões/image (38).png",
    "impressões/image (39).png",
    "impressões/image (40).png",
    "impressões/image (41).png",
    "impressões/image (42).png",
    "impressões/image (43).png",
    "impressões/image (44).png"
];

const galeria = document.getElementById("galeria");

imagens.forEach(src => {

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";

    img.onclick = () => {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("imagemGrande").src = src;
    };

    card.appendChild(img);
    galeria.appendChild(card);

});

document.getElementById("fechar").onclick = () => {
    document.getElementById("modal").style.display = "none";
};

document.getElementById("modal").onclick = (e)=>{
    if(e.target.id==="modal"){
        document.getElementById("modal").style.display="none";
    }
};

const slider = document.getElementById("galeria");

document.getElementById("next").onclick = ()=>{
    slider.scrollBy({
        left:340,
        behavior:"smooth"
    });
};

document.getElementById("prev").onclick = ()=>{
    slider.scrollBy({
        left:-340,
        behavior:"smooth"
    });
};
