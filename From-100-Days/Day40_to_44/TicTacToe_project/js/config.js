function editPlayer() {
    //configOverlayElement.classList.add("enabled");
    //backDropElement.classList.add("enabled");
    //console.log("here");
    // Can't do backDrop using this way bcz it has no class where the
    // display property is initialized, so when we are adding enabled
    // class it is overwritten by it's default css which display none.
    configOverlayElement.style.display = "block";
    backDropElement.style.display = "block";
}

function closeOverlays() {
    configOverlayElement.style.display = "none";
    backDropElement.style.display = "none";
}
