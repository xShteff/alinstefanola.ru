var app = new Vue({
  el: "#app",
  data: {
      pages: ["intro", "socials"],
      page: "intro",
  },
  methods: {
      setPage: function(page) {
        this.page = page;
      },
      capitalizeFirst: function(thing) {
          return `${thing.charAt(0).toUpperCase()}${thing.slice(1, thing.length)}`;
      },
      calculateBirthday: function() {
        var birthday = new Date("March 19 1995");
        var diff = new Date(new Date() - birthday);
        return Math.abs(1970 - diff.getUTCFullYear());
      }
  }
});
