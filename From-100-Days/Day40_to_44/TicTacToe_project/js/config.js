function editPlayer() {
    console.log("here");
    configOverlayElement.classList.add("enabled");
    backDropElement.classList.add("enabled");
    // Can't do backDrop using this way bcz it has no class where the
    // display property is initialized, so when we are adding enabled
    // class it is overwritten by it's default css which display none.
    //backDropElement.style.display = "block";
}
