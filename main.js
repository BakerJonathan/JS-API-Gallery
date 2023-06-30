

const websites= ["https://api.artic.edu/api/v1/artworks/76816/manifest.json","https://api.artic.edu/api/v1/artworks/126981/manifest.json",
"https://api.artic.edu/api/v1/artworks/9978/manifest.json","https://api.artic.edu/api/v1/artworks/281/manifest.json",
"https://api.artic.edu/api/v1/artworks/22525/manifest.json","https://api.artic.edu/api/v1/artworks/13617/manifest.json"]

async function getJSON(number) {
    response = await fetch(websites[number]);
    jsonData= await response.json();
    if (number==5){ //This one lacked a description so I figured I would add one
    text=`Title: ${jsonData.label}\n\nThis is a comic portrayal of Gaspard-Felix Tournachon, more known as Nadar.\nHe was the first to do aerial photography in 1858.\n\n${jsonData.rendering["@id"]}`
    }else{
    text=`Title: ${jsonData.label}\n\n${jsonData.description[0].value}\n${jsonData.rendering["@id"]}`
    }
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").textContent = text;



}

function removeOverlay() {
    document.getElementById("overlay").style.display = "none";
}
