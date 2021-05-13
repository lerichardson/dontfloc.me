<template>
  <div id="privacy">
    <h2>dontfloc.me Privacy Policy</h2>
    <p>
      This policy extends upon the policy featured at
      <a href="https://litbelb.com/privacy">https://litbelb.com/privacy</a>.
    </p>
    <p>
      When you visit a page on this website, we collect only the following data,
      in addition to <a href="https://getinsights.io/">Insights' </a>
      <a href="https://getinsights.io/what-data-we-collect"
        >Data collection policy</a
      >, and
      <a href="https://cloudflare.com/privacy">Cloudflare's Privacy Policy</a>
    </p>
    <table>
      <thead>
        <tr>
          <th>Data Point</th>
          <th>Example</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><b>Page URL</b></td>
          <td>https://dontfloc.me</td>
          <td>
            We track the page URL of each page view on this website. We use this
            to show us which pages have been viewed and how many times a
            particular page has been viewed.<br /><br />The hostname and path
            are collected. Query parameters are discarded, except for these
            special query parameters:<code>ref=</code>, <code>source=</code>,
            <code>utm_source=</code>,<code>utm_medium=</code> and
            <code>utm_campaign=</code>.
          </td>
        </tr>
        <tr>
          <td><b>HTTP Referer</b></td>
          <td>https://twitter.com</td>
          <td>
            We use the referrer string to show us the number of visitors
            referred to this website from links on other sites.
          </td>
        </tr>
        <tr>
          <td><b>Browser</b></td>
          <td>Chrome 86.0</td>
          <td>
            We use this to show us what browsers and browser version numbers
            people use when visiting this website. This is derived from the
            User-Agent HTTP header. The full User-Agent is discarded.
          </td>
        </tr>
        <tr>
          <td><b>Operating System</b></td>
          <td>GNU/Linux x64</td>
          <td>
            We use this to show us what operating systems people use when
            visiting this website. We show the brand of the operating system and
            the version number, if found. This is derived from the User-Agent
            HTTP header. The full User-Agent is discarded.
          </td>
        </tr>
        <tr>
          <td><b>Device Type</b></td>
          <td>Desktop</td>
          <td>
            We use this to show us what devices people use when visiting this
            website. This is derived from window.innerWidth. The actual width of
            the browser in pixels is discarded.
          </td>
        </tr>
        <tr>
          <td><b>Visitor Country</b></td>
          <td>United Kingdom</td>
          <td>
            We look up the visitor’s country using their IP address. We do not
            track anything more granular than the country of origin, and the IP
            address of the visitor is discarded. We never store IP addresses in
            our database or logs.
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      If you would like to remove your data from this site, please notify us at
      <a href="mailto:about@dontfloc.me">about@dontfloc.me</a> and we will do
      our best to delete any data we have collected on you. However, since we do
      not have control over the data our CDN,
      <a href="https://cloudflare.com">Cloudflare</a>, collects, you may have to
      contact them for further removal of your data.
    </p>
  </div>
</template>
<style lang="stylus">
a
    color blue
</style>
<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Home extends Vue {}
</script>
