function validate() {
  document.getElementById("company").addEventListener("change", () => {
    let companyInfo = document.getElementById("companyInfo");
    if (!document.getElementById("company").checked) {
      companyInfo.style.display = "none";
    } else {
      companyInfo.style.display = "block";
    }
  });

  document.getElementById("submit").addEventListener("click", onClick);
  function onClick(e) {
    e.preventDefault();
    invalidFields = [];
    let checkBox = document.querySelector("#company");
    let user = document.getElementById("username");
    let userRegExp = /^[A-Za-z0-9]{3,20}$/;
    if (!userRegExp.test(user.value)) {
      invalidFields.push(user);
    }

    let email = document.getElementById("email");
    //let emailRegEx = /^[^@.]+@[^@]*\.[^@]+$/;
    let emailRegEx = /@(\w)*\./;
    if (!emailRegEx.test(email.value)) {
      invalidFields.push(email);
    }

    let pass = document.getElementById("password");
    let confirmPass = document.getElementById("confirm-password");
    let passRegExp = /^[\w]{5,15}$/;
    if (!passRegExp.test(pass.value) || confirmPass.value !== pass.value) {
      invalidFields.push(pass);
      invalidFields.push(confirmPass);
    }

    if (checkBox.checked) {
      let companyId = document.getElementById("companyNumber");
      let companyRegEx = /^[0-9]{4}$/;
      if (!companyRegEx.test(companyId.value)) {
        invalidFields.push(companyId);
      }
    }

    invalidFields.forEach((field) => (field.style.borderColor = "red"));
    let isValid = document.querySelector("#valid");
    !invalidFields.length
      ? (isValid.style.display = "block")
      : (isValid.style.display = "none");
  }
}
