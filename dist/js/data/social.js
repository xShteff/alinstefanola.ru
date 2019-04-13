class SocialLink {
  constructor (label, url, newTab) {
    this.label = label
    this.url = url
    this.newTab = newTab
  }
}
var social = new Vue({
  el: '#social',
  data: {
    socialLinks: {
      github: new SocialLink('GitHub', 'https://github.com/alstol', true),
      linkedin: new SocialLink(
        'LinkedIn',
        'https://www.linkedin.com/in/alinstefanolaru/',
        true
      ),
      twatter: new SocialLink('Twitter', 'https://twitter.com/xShteff', true),
      email: new SocialLink(
        'E-mail (personal)',
        'mailto:alinstefanolaru@gmail.com?subject="Hello!"',
        false
      ),
      workmail: new SocialLink(
        'E-mail (work)',
        'mailto:alin.stefan.olaru@LEGO.com?subject="Hello!"',
        false
      )
    }
  }
})
