//наверх
$(function() {
    $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#topNubex').fadeIn();
    } else {
    $('#topNubex').fadeOut();
    }
    });
    $('#topNubex').click(function() {
    $('body,html').animate({scrollTop:0},700);
    });
    });
//подсказка
$(function(){
    $("[data-tooltip]").mousemove(function (eventObject) {
        $data_tooltip = $(this).attr("data-tooltip");
        $("#tooltip").html($data_tooltip)
            .css({ 
              "top" : eventObject.pageY + 5,
              "left" : eventObject.pageX + 0
            })
            .show();
        }).mouseout(function () {
          $("#tooltip").hide()
            .html("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
});
//логотип
var logo1 = document.getElementById("logo1");
      if (logo1) {
        logo1.addEventListener("click", function () {
          var anchor = document.querySelector(
            "[data-scroll-to='heroSectionContainer']"
          );
          if (anchor) {
            anchor.scrollIntoView({ block: "start", behavior: "smooth" });
          }
        });
      }      
      //
      var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
      var observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );      
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.observe(scrollAnimElements[i]);
      }
//открытие картинки в новом окне для просмотра
function openImageWindow(src) {
    var image = new Image();
    image.src = src;
    var width = image.width;
    var height = image.height;
    window.open(src,"Image","width=" + width + ",height=" + height);
  }
  //реклама
  window.addEventListener('load', function() {
    setInterval(function() {
      var ads = [
        "Узнайте про нашу новую коллекцию товаров!",
        "Хотите скидку на следующую покупку? Переходите на наш сайт!",
        "Оформите заказ прямо сейчас и получите бесплатную доставку!",
        "Получите эксклюзивный подарок при покупке от 2000 рублей!",
        "Не упустите шанс получить скидку на весь товарный ассортимент!",
        "Заходите на наш сайт и узнайте, как сделать скидку до 50% на товары!"
      ];
      var randomAd = ads[Math.floor(Math.random() * ads.length)];
      alert(randomAd);
    }, 60000); // показывать рекламу каждую минуту
  });
  //train
  train.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 1100) clearInterval(timer);

    }, 20);
  }
//всплывающее окно
function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
//смена цвета блока отзыва
            example.onmouseover = function() {
            example.style.background= "#7ac751";
            };
            
            example.onmouseleave = function() {
            example.style.background= "#f8fafb";
            };
//
!(function () {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const password2 = document.getElementById("password2");

  // Показываем ошибку под полем
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  // Показываем, что поле заполнено верно
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  // Проверяем адрес электронной почты на правильность
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, "Адрес электронной почты имеет неверный формат");
    }
  }

  // Проверка обязательных полей
  /**
   *
   * @param {HTMLElement[]} inputElements
   * @returns {boolean}
   */
  function checkRequired(inputElements) {
    let isRequired = false;
    inputElements.forEach(function (input) {
      if (input.value.trim() === "") {
        showError(input, `Требуется задать значение для поля ${getFieldName(input)}`);
        isRequired = true;
      } else {
        showSuccess(input);
      }
    });

    return isRequired;
  }

  // Проверяем значение поля на соответствие минимальной и максимальной длине
  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `Поле ${getFieldName(input)} должно быть длиной не менее ${min} символов`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `Поле ${getFieldName(input)} не должно быть длиной более ${max} символов`
      );
    } else {
      showSuccess(input);
    }
  }

  // Проверка соответствия паролей
  function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, "Пароли не совпадают");
    }
  }

  // Получаем имя поля
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  // Устанавливаем слушатели событий на форму
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (checkRequired([username, email, password, password2])) {
      checkLength(username, 3, 15);
      checkLength(password, 6, 25);
      checkEmail(email);
      checkPasswordsMatch(password, password2);
    }
  });

})();
           