 // custom cursor
 if ($(".mouse-cursor")) {
    const e = document.querySelector(".cursor-inner"),
        t = document.querySelector(".cursor-outer");
    let n, i = 0,
        o = !1;
    window.onmousemove = function (s) {
        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
    }, $("body").on("mouseenter", "a,.know_tm_topbar .trigger, .cursor-pointer", function () {
        e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
    }), $("body").on("mouseleave", "a,.know_tm_topbar .trigger, .cursor-pointer", function () {
        $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
    }), e.style.visibility = "visible", t.style.visibility = "visible"
}

// bootstrap validation

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
