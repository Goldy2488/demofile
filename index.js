const zodiac = document.querySelector(".zodiac"); 
const body = document.body;

// document.body.style.background= "red";

const changeBackground=()=>{
    switch(zodiac.value){
        case "aries":
            document.body.style.background = "rgb(50, 168, 82)";
            break;
        case "tarus":
            document.body.style.background = "rgb(52, 235, 174)";
            break;
        case "gemini":
            document.body.style.background = "rgb(52, 235, 174)";
            break;
        case "cancer":
            document.body.style.background = "rgb(52, 235, 174)";
            break;
        case "leo":
            document.body.style.background = "rgb(52, 2, 174)";
            break;
        case "virgo":
            document.body.style.background = "rgb(52, 235, 174)";
            break;
        case "libra":
            document.body.style.background = "rgb(180, 235, 52)";
            break;
        case "scorpio":
            document.body.style.background = "rgb(235, 192, 52 )";
            break;
        case "sagittarius":
            document.body.style.background = "rgb(156, 52, 235)";
            break;
        case "aquarius":
            document.body.style.background = "rgb(235, 52, 165";
            break;     
        case "capricorn":
            document.body.style.background = "rgb(115, 57, 93)";
            break;
        case "pisces":
            document.body.style.background = "rgb(120, 123, 204)";
            break; 
        default:
            document.body.style.background = "rgb(228, 228, 235)";
            break; 
    }

};

