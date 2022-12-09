
//get all html elements using selector
const modal = document.getElementById("myModal");
const openModal = document.querySelector(".f-button");
const closeModal = document.getElementsByClassName("close")[0];
const submitButton = document.querySelector(".form-container")

const thankYou = document.querySelector(".thankyou")


//handle form submit
function submittionHandler(e) {
    e.preventDefault()
    const inputName = document.querySelector("#name")
    const email = document.querySelector("#email")
    const phone = document.querySelector("#phone")
    thankYou.style.display = "block"

    let contactInfo = {
        name: inputName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim()
    }
    console.log(contactInfo)
    console.log(email.textContent)

    inputName.value = ""
    email.value = ""
    phone.value = ""
    thankYou.textContent = `✅ Thank you ${contactInfo.name}, We will contact you soon! 🙏`
}

///modal buttom event handlers
document.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})
closeModal.addEventListener("click", function (event) {
    modal.style.display = "none";

})
openModal.addEventListener("click", function (event) {
    modal.style.display = "block";

})

//h
submitButton.addEventListener("submit", submittionHandler)