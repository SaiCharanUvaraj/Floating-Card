function animateJumping()
{
    var element = document.getElementById("card");
    element.classList.add("cardJumpingAnimation");
}
function stopJumping()
{
    var element = document.getElementById("card");
    element.classList.remove("cardJumpingAnimation");
}
