document.addEventListener("DOMContentLoaded", () => {
    const getStartedBtn = document.getElementById("get-started-btn");
    const landingPage = document.getElementById("landing-page");
    const signUpContainer = document.getElementById("sign-up-container");

    getStartedBtn.addEventListener("click", () => {
        landingPage.style.transition = "opacity 0.8s, transform 0.8s";
        landingPage.style.opacity = "0";
        landingPage.style.transform = "translateY(-30px)";

        setTimeout(() => {
            landingPage.style.display = "none";
            signUpContainer.classList.remove("hidden");
            signUpContainer.style.opacity = "0";
            signUpContainer.style.transition = "opacity 0.8s";
            signUpContainer.style.opacity = "1";
        }, 800);
    });
});
