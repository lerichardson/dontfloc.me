<template>
  <div class="home">
    <div class="what">
      <h2 class="topfloc">This is a site against Google's FLoC</h2>
      <h3 class="cnfloc">Wait. What's FLoC-ing?</h3>
      <p>
        Floc is Google's implementation of a third-party cookie-less world using
        SimHash and this and that and... BORING!!!
      </p>
      <h1>
        FLoC is a string that lives inside your browser to track you across
        websites. It's as simple as that.
      </h1>
      <h2>It's watching you in order to serve you targeted advertisements</h2>
      <p>That's bad. It's an invasion of your personal space online.</p>
      <h2>But don't just take our word for it.</h2>
      <div class="news">
        <div class="verge">
          <figure>
            <a
              href="https://www.theverge.com/2021/4/16/22387492/google-floc-ad-tech-privacy-browsers-brave-vivaldi-edge-mozilla-chrome-safari"
            >
              <img
                src="@/assets/img/theverge.png"
                width="100px"
                height="100px"
              />
            </a>
          </figure>
          <figcaption>The Verge</figcaption>
        </div>
        <div class="eff">
          <figure>
            <a
              href="https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea"
            >
              <img src="@/assets/img/eff.png" width="100px" height="100px" />
            </a>
          </figure>
          <figcaption>EFF</figcaption>
        </div>
        <div class="wired">
          <figure>
            <a
              href="https://www.wired.com/story/google-floc-privacy-ad-tracking-explainer/"
            >
              <img src="@/assets/img/wired.jpg" width="100px" height="100px"
            /></a>
          </figure>
          <figcaption>Wired</figcaption>
        </div>
      </div>
      <div class="spacer"></div>
      <div class="csp-1 case">
        <h2>Oh no! How do I opt out?</h2>
        <p>
          Use another browser, preferably one that blocks trackers, cookies, and
          fingerprinters like
          <span class="browsers">
            <a href="https://firefox.com" class="firefox">Mozilla Firefox, </a>
            <a href="https://www.microsoft.com/en-us/edge?r=1" class="edge"
              >Microsoft Edge,
            </a>
            <a href="https://dothq.co" class="dot">Dot, </a>
            <a href="https://brave.com" class="brave">Brave, </a> (not
            recommended due to developing privacy issues) or
            <a href="https://vivaldi.com/" class="vivaldi">Vivaldi</a>
          </span>
        </p>
      </div>
      <div class="csp-2 case">
        <h2>Have I been FLoCed?</h2>
        <p>
          I don't know.<span id="chromedetect"></span> But you can check with
          <a href="https://eff.org" class="doteff">EFF</a>'s
          <a href="https://amifloced.org" class="dotaif">Am I FLoCed</a>
        </p>
      </div>
      <div class="csp-3 case">
        <h2>I actually like targeted advertisements.</h2>
        <p>
          This is more than just targeted ads. This is every place, thing you've
          clicked on, or thing you've bought online, and even more. Plus, if
          you're looking for advertisements that suit your needs, not creepy,
          "contextual" ads work great and often even better.
        </p>
      </div>
      <div class="csp-4 case">
        <h2>Privacy? I have nothing to hide!</h2>
        <p>
          Why do we have blinds in our houses and aparments. Yes, to keep the
          light out. But also for privacy. We close doors because we don't want
          people to hear our conversations. We have covers for our wallets and
          passwords for our accounts. Yet almost all of these things are thrown
          out the window online. Our voices are used for AI, our browsing
          history is used for ads, and our location history is used for the
          government.
        </p>
      </div>
      <div class="csp-5 case">
        <h2>
          I want to support these companies and small businesses, but Google and
          Facebook say removing targeted ads will keep small businesses from
          advertising to me. Is that true? Does FLoC have anything to do with
          this?
        </h2>
        <p>
          The short answer: No and No. As
          <a href="https://foundation.mozilla.org/blog" class="firefox"
            >Mozilla</a
          >
          clearly states,
        </p>
        <blockquote>
          <p class="focus main-quote">
            <strong>
              <q>
                Fun fact: Instagram is owned by a tiny upstart named Facebook
                that made $9 billion in profit - not last year, but last
                quarter! We sure hope Instagram figures out a way to keep the
                lights on.
              </q>
            </strong>
          </p>
        </blockquote>
        <p>
          That's sarcasm, by the way. DuckDuckGo is not surviving, but thriving
          using none other than, you guessed it, remember those not-creepy,
          contextual ads we were talking about earlier? Yep. Those. And FLoC?
          Probably not. Most of the data will be sold or sent to other ad
          networks or data brokers.
        </p>
      </div>
    </div>
    <div id="more-reading">
      <h1>Further Reading and links</h1>
      <a href="https://coveryourtracks.eff.org" class="mr-link"
        >EFF's "Cover your tracks" project</a
      >
      <br />
      <a href="https://foundation.mozilla.org/blog" class="mr-link"
        >Mozilla foundation's blog</a
      >
      <br />
      <a
        href="https://www.theverge.com/2021/4/16/22387492/google-floc-ad-tech-privacy-browsers-brave-vivaldi-edge-mozilla-chrome-safari"
        class="mr-link"
        >The Verge on FLoC</a
      >
      <br />
      <a href="https://link.medium.com/VCnockvybgb" class="mr-link"
        >"FLoC: the Final Stage of Google’s Web Takeover?" on Medium</a
      >
      <br />
      <a
        href="https://adactio.medium.com/get-the-floc-out-12414b1cec01"
        class="mr-link"
        >"Get the FLoC out" on Medium</a
      >
      <br />
      <a href="https://privacytools.io" class="mr-link">privacytools.io</a>
      <br />
      <a href="https://reddit.com/r/privacy" class="mr-link"
        >r/privacy on reddit</a
      >
      <br />
      <a href="https://reddit.com/r/degoogle" class="mr-link"
        >r/degoogle on reddit</a
      >
    </div>
    <div class="spacer"></div>
  </div>
</template>
<style lang="stylus">
.spacer
  padding 80px
.case
  margin-right 450px
  margin-left 450px
.news
  display flex
  flex-direction row
  position absolute
  right 35%
.main-quote
  border-left #000000 solid 2px
  padding 15px
.mr-link {
  text-decoration solid underline
  padding 15px
}
@media screen and (max-width: 600px) {
  .news {
    right 20%
  }
}
@media screen and (max-width: 850px) {
  .news {
    right 15%
  }
}
@media screen and (max-width: 1062px) {
  .news {
    right 25%
  }
}
.browsers
  padding 5px
.firefox
  color #20123A
  background rgb(127,90,163)
  background linear-gradient(90deg, rgba(127,90,163,1) 0%, rgba(237,28,97,1) 49%, rgba(246,141,32,1) 100%)
.edge
  color #20123A
  background rgb(65,216,112)
  background linear-gradient(90deg, rgba(65,216,112,1) 0%, rgba(16,129,227,1) 49%, rgba(10,84,166,1) 100%)
.dot
  background rgb(240,56,206)
  background linear-gradient(90deg, rgba(240,56,206,1) 0%, rgba(228,108,88,1) 100%)
.brave
  background rgb(228,108,88)
  background linear-gradient(90deg, rgba(228,108,88,1) 0%, rgba(87,46,163,1) 100%)
.vivaldi
  background rgb(254,19,121)
  background linear-gradient(90deg, rgba(254,19,121,1) 0%, rgba(238,86,85,1) 100%)
.doteff
  background rgb(255, 0, 0)
.dotaif
  background rgb(40, 40, 40)
  color rgb(255, 255, 255)
</style>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>
