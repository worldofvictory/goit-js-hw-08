!function(){var e="feedback-form-state";form=document.querySelector(".feedback-form"),form.addEventListener("input",throttle((function(t){a={email:l.value,message:r.value},localStorage.setItem(e,JSON.stringify(a))}),500)),form.addEventListener("submit",(function(t){if(t.preventDefault(),console.log({email:l.value,message:r.value}),""===l.value||""===r.value)return alert("Please fill in all the fields!");localStorage.removeItem(e),t.currentTarget.reset(),a={}}));var a=JSON.parse(localStorage.getItem(e))||{},t=form.elements,l=t.email,r=t.message;a&&(l.value=a.email||"",r.value=a.message||"")}();
//# sourceMappingURL=03-feedback.2020aaf8.js.map
