// PRELOADER SECTION // 

const fadeOut = () => {
    const loaderWrapper =
    document.querySelector('.wrapper');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);

window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );


  document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
     let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
       current += increment;
       obj.textContent = current;
       if (current == end) {
        clearInterval(timer);
       }
      }, step);
    }
    counter("count1", 0, 400, 3000);
    counter("count2", 100, 50, 2500);
    counter("count3", 0, 999, 75000);
   });
   