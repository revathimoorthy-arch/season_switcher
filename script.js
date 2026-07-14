let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");
let springsmall = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springmedium = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

function changeToSpring() {
    seasonSmallImageElement.src = springsmall;
    seasonMediumImageElement.src = springmedium;
}

function changeToSummer() {
    seasonSmallImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
    seasonMediumImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
}

function changeToAutumn() {
    seasonSmallImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
    seasonMediumImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
}

function changeToWinter() {
    seasonSmallImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
    seasonMediumImageElement.src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
}