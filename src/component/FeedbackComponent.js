const Feedback = {
  view: function () {
    return m('div', { class: 'feedback-blocks' }, [
      m('h2', 'What are you guys saying about OneMonitor?'),
      m('div', { class: 'feedback-block' }, [
        m('div', { class: 'feedback-person' }, [
          m('img', { src: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7f65e3d2-6a0f-460f-8775-9836a374cddc-profile_image-70x70.png' }),
          m('h4', 'Matheus Ferreira (Twitch Streamer Developer, ', [
            m('a', { href: 'https://www.twitch.tv/godzamy' }, '@godzamy'),
            ')'
          ])
        ]),
        m('div', { class: 'feedback-comment' }, [
          m('p', "As a developer I have to be all time focused while coding, but distractions can lead me to waste my focus. With this extension I could force myself to avoid losing my focus and attention to some websites I wasn't supposed to be accessing when working. I recommend the app if you feel the same as me.")
        ])
      ]),
    ])
  }
}

export default Feedback;