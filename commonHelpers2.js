import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const r="feedback-form-state",a=document.querySelector(".feedback-form"),l=a.elements.email,m=a.elements.message;a.addEventListener("input",n);a.addEventListener("submit",i);o();function n(e){const t={};t.email=e.currentTarget.elements.email.value.trim(),t.message=e.currentTarget.elements.message.value.trim(),localStorage.setItem(r,JSON.stringify(t))}function o(){const e=JSON.parse(localStorage.getItem(r));e&&(l.value=e.email,m.value=e.message)}function i(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.message.value.trim();if(t===""||s===""){alert("Please fill in all fields");return}localStorage.removeItem(r),e.target.reset()}
//# sourceMappingURL=commonHelpers2.js.map