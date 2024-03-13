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
function  lableAnimation()
{
    var lable = document.getElementById("lable");
    lable.style.fontSize="3rem";
    lable.style.transition="3s";
}
