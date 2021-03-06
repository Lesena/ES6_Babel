"use strict";

!function (a) {
  jQuery.fn.mySimpleSlider = function (b) {
    function c() {
      return !!b.delay && (!b.playBtn || !a(b.playBtn).hasClass("pause")) && void (k = setInterval(i, b.delay));
    }function d() {
      a(b.nextBtn).on("click", i), a(b.prevBtn).on("click", j), c(), b.selectors && a(b.selectors).on("click", function () {
        h(a(this).index());
      });
    }function e() {
      a(b.nextBtn).unbind(), a(b.prevBtn).unbind(), clearInterval(k), a(b.selectors).unbind();
    }function f() {
      return a(l).children("ul").position().left / b.slideWidth * -1;
    }function g() {
      return a(l).children("ul").children("li").length;
    }function h(c) {
      e(), a(l).children("ul").animate({ left: b.slideWidth * -1 * c + "px" }, b.duration, d), a(b.selectors).removeClass("active"), a(b.selectors).eq(c).addClass("active");
    }function i() {
      h(f() == g() - 1 ? 0 : f() + 1);
    }function j() {
      h(0 == f() ? g() - 1 : f() - 1);
    }b = a.extend({ nextBtn: null, prevBtn: null, playBtn: null, selectors: null, slideWidth: 100, delay: null, duration: 500 }, b);var k,
        l = this,
        m = function m() {
      b.playBtn && a(b.playBtn).on("click", function () {
        a(this).hasClass("pause") ? (a(this).removeClass("pause"), a(this).addClass("play"), c()) : (clearInterval(k), a(this).removeClass("play"), a(this).addClass("pause"));
      }), d();
    };return this.each(m);
  };
}(jQuery);
//# sourceMappingURL=scripts-compiled.js.map
