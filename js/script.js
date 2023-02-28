const open_icon = document.querySelector(".mobile_icon");
const close_icon = document.querySelector(".close_icon");
const mobile_nav = document.querySelector(".mobile_nav");

const addActive = () => {
    open_icon.classList.add("mobile_bars");
    mobile_nav.classList.add("active");
}

const removeActive = () => {
    mobile_nav.classList.remove("active");
    open_icon.classList.remove("mobile_bars");
}

open_icon.addEventListener("click",addActive);
close_icon.addEventListener("click", removeActive);


// validation
function chakvalflight(){
    var location = document.getElementById('location').value;
    if(location===''){
        document.getElementById('locationspan').innerHTML="* Fill location *"
        return false;
    }
    else if(location!=null){
        document.getElementById('locationspan').innerHTML=null;
    }
    var detination = document.getElementById('detination').value;
    if(detination===''){
        document.getElementById('destinationspan').innerHTML="* Fill Destination *"
        return false;
    }
    else if(location!=null){
        document.getElementById('destinationspan').innerHTML=null;
    }
    var datetime = document.getElementById('datetime').value;
    if(datetime===''){
        document.getElementById('datetimespan').innerHTML="* Fill Date *"
        return false;
    }
    else if(location!=null){
        document.getElementById('datetimespan').innerHTML=null;
    }
}