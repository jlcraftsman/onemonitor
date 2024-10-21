const Footer = {
  view: function () {
    return m('footer', { class: 'footer' }, [
      m('a', { class: 'link-credits', href: 'https://github.com/asusfornothing/onemonitor' }, [
        'Made with love for the community ',
        m('i', { class: 'fa-solid fa-heart', style: 'color: red' }),
        ' Idealized by asusfornothing'
      ]),
    ])
  }
}

export default Footer;