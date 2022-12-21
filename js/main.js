const slider = document.querySelector("#slider");
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

sliderItems.forEach(function (slide, index) {
  if (index !== 0) {
    slide.classList.add("hidden");
  }
  // добавление индексом для элементов
  slide.dataset.index = index;

  //   добавление дата-атрибута первому или активному слайду
  sliderItems[0].setAttribute("data-active", "");

  slide.addEventListener("click", function () {
    // скрывает следующий слайд
    slide.classList.add("hidden");
    slide.removeAttribute("data-active");
    // рассчет индекса следующего слайда
    const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
    // найти следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    //  отобразить следюущий слайд
    nextSlide.classList.remove("hidden");
    nextSlide.setAttribute("data-active", "");
  });
});

btnNext.onclick = function () {
  showNextSlide("next");
};

btnPrev.onclick = function () {
  showNextSlide("prev");
};

function showNextSlide(direction) {
  const currentSlide = slider.querySelector("[data-active");
  const currentSlideIndex = +currentSlide.dataset.index;

  //   скрыли текущий слайд после клика
  currentSlide.classList.add("hidden");
  currentSlide.removeAttribute("data-active");

  // расчёт следующего индекса от направления движения
  let nextSlideIndex;
  if (direction === "next") {
    nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
  } else if (direction === "prev") {
    nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
  }
  // показываем следующий слайд
  const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
  nextSlide.classList.remove("hidden");
  nextSlide.setAttribute("data-active", "");
}
