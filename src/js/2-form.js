const formData = { email: "", message: "" };
const form = document.querySelector(".feedback-form");

const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener("input", (event) => {
  const { name, value } = event.target;
  if (name === "email" || name === "message") {
    formData[name] = value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form data:", formData);

  form.reset();
  formData.email = "";
  formData.message = "";
  localStorage.removeItem("feedback-form-state");
});