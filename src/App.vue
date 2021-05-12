<template>
  <div id="app">
    <div id="nav">
      <nav>
        <router-link to="/">Home</router-link> |
        <a href="https://petition.dontfloc.me">Petition</a>
      </nav>
    </div>
    <router-view />
    <div id="footer"> 
      <footer>
        <p>&copy; 2021-present Levi Richardson</p>
        <p class="armp">
          <a href="https://litbelb.com/?utm_medium=more_projects"
            >More Projects</a
          >
        </p>
        <p class="armp2">
          <a href="https://github.com/dontflocme/dontfloc.me">GitHub</a>
        </p>
        <p class="armp3">
          <a
            href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2F192.168.1.39%3A8080%2F&ref_src=twsrc%5Etfw&related=Litbelb&text=I%27m%20tweeting%20to%20spread%20awareness%20about%20the%20wonderfully%20messed%20up%20world%20of%20FLoC!%20Learn%20more%20at&tw_p=tweetbutton&url=https%3A%2F%2Fdontfloc.me"
            >Tweet</a
          >
        </p>
        <p class="armp4">
          <a href="/privacy">Privacy</a>
        </p>
      </footer>
    </div>
  </div>
</template>
<style lang="stylus">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400&display=swap");
body, html {
    padding 0
    margin 0
    font-family 'Inter', 'Segoe UI', system-ui, Tahoma, Geneva, Verdana, sans-serif
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
}
::selection
  background #a7dfc3
html, body
  background #FFFFFF
#app
  font-family: 'Inter', 'Segoe UI', system-ui, Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  margin-top 60px
footer
 width 100%
 position fixed
 bottom 0
 opacity 0.5
 display flex
 flex-direction row
 background rgb(255, 255, 255)
.armp
  position absolute
  left 45vw
.armp2
  position absolute
  left 55vw
.armp3
  position absolute
  left 65vw
.armp4
  position absolute
  left 35vw
footer a
  text-decoration solid #000000
a
  text-decoration none
  color #20123A
a::visited
  text-decoration none
  color #20123A
</style>
