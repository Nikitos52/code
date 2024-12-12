const form = document.querySelector('form'); 
const queryInput = document.querySelector('input[name="query"]'); 
const футболRadio = document.getElementById("футбол");
const баскетболRadio = document.getElementById("баскетбол");
const волейболRadio = document.getElementById("волейбол");
const бесплатныйRadio = document.getElementById("бесплатный");
const платныйRadio = document.getElementById("платный");
const поискButton = document.getElementById("поиск");

let выбранныйСпорт = null; 
let доступ = null;     


футболRadio.addEventListener("change", () => { выбранныйСпорт = "футбол"; });
баскетболRadio.addEventListener("change", () => { выбранныйСпорт = "баскетбол"; });
волейболRadio.addEventListener("change", () => { выбранныйСпорт = "волейбол"; });
бесплатныйRadio.addEventListener("change", () => { доступ = "бесплатный"; });
платныйRadio.addEventListener("change", () => { доступ = "платный"; });


поискButton.addEventListener("click", () => {
  const query = queryInput.value.toLowerCase(); 
  if (выбранныйСпорт && доступ) { 
    let targetPage = null; 

    if (query === 'люблино') {
      switch (выбранныйСпорт) {
        case "футбол":
          targetPage = доступ === "бесплатный" ? "lublinoff.html" : "lublinopf.html";
          break;
        case "баскетбол":
          targetPage = доступ === "бесплатный" ? "lublinofb.html" : "lublinopb.html";
          break;
        case "волейбол":
          targetPage = доступ === "бесплатный" ? "lublinofv.html" : "lublinopv.html";
          break;
      }
    } else if (query === 'марьино') {
      switch (выбранныйСпорт) {
        case "футбол":
          targetPage = доступ === "бесплатный" ? "marinoff.html" : "marinopf.html";
          break;
        case "баскетбол":
          targetPage = доступ === "бесплатный" ? "marinofb.html" : "marinopb.html";
          break;
        case "волейбол":
          targetPage = доступ === "бесплатный" ? "marinofv.html" : "marinopv.html";
          break;
      }
    }

    if (targetPage) { 
      window.location.href = targetPage; 
    } else {
      alert("Для выбранного района и спорта нет подходящей страницы!");
    }
  } else {
    alert("Сначала выберите спорт и тип доступа!");
  }
});