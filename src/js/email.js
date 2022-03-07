// EmailJS
function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let btn = document.querySelector(".submit");
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || msg.value == "") {
      emptyerror();
    } else if (!(re.test(email.value.trim()))) {
      error();  
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
      name.value = "";
      email.value = "";
      msg.value = "";
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_9kew26n", "template_hfolbss", {
    to_name: name,
    from_name: email,
    message: msg,
  });
}

function emptyerror() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Molimo popunite sva polja!",
  });
}

function error() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Molimo Vas unesite ispravnu Email adresu!",
  });
}

function success() {
  Swal.fire({
    icon: "success",
    title: "Poslano!",
    text: "Poruka je uspješno poslana",
  });
}
// End EmailJS