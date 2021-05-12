$(function () {
  // selectmenu
  $("select").selectmenu();

  // smooth scrolling w/o losing keyboard focus
  $("a.scrolly[href*='#']:not([href='#'])").click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
        target.focus(); // Setting focus
        if (target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        }
        return false;
      }
    }
  });

  let foundFloc = function (cid) {
    $("#result-div").html(`
      <h3 id="flocd">You are FLoCed!</h3>
      <p>
        Your FLoC ID is <span id="flocID"></span>.
      </p>
      <p>
        Any websites you visit, and any third-party trackers on those websites,
        will be able to access this information. You can read more about what this means below.
      </p>`);
    $("#flocID").text(cid);
    $("#result-div").addClass("result");
  };

  let noChrome = function () {
    $("#result-div").html(`
      <h3>Your browser does not have FloC enabled.</h3>
      <p>
        The FLoC origin trial only affects Google Chrome versions 89 and above.
      </p>
      `);
    $("#result-div").addClass("result");
  };

  let noFloc = function () {
    $("#result-div").html(`
      <h3>Your browser does not currently have FloC enabled.</h3>
      <p>
        The FLoC origin trial currently affects 0.5% of Chrome users, and it
        doesn't look like you are one of them. Google may add to or change the set
        of users in the trial at any time. You can check back here to see if FLoC
        is turned on in the future.
      </p>`);
    $("#result-div").addClass("result");
  };

  let maybeFloc = function () {
    $("#result-div").html(`
      <h3 id="flocd">You may be FLoCed.</h3>
      <p>
        Your browser has FLoC enabled, but we can't see your cohort ID.
        This may be because you haven't visited enough sites to be placed in a group, because you're in an Incognito window, or for some
        other reason.
      </p>`);
    $("#result-div").addClass("result");
  };

  $("#floc-button").click(function () {
    $("#floc-button").text("Looking for FLoC ID...");

    // debug with fake floc
    //if (window.location.hash == '#fake-floc') {
    //foundFloc("9328237291");
    //return false;
    //}

    // Make sure we're in a valid version of chrome.
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    if (!raw) {
      noChrome();
      return false;
    }

    // The interestCohort API exists, but throws an error, in chrome 88.
    let chromeVersion = parseInt(raw[2], 10);
    if (chromeVersion < 89) {
      noChrome();
      return false;
    }

    if ("interestCohort" in document) {
      // try to access the floc ID (returned as a promise)
      document
        .interestCohort()
        .then(function (cohort) {
          console.log("Found floc ID", cohort.id);
          foundFloc(cohort.id);
        })
        .catch(function (err) {
          console.log("Exception ", err);
          maybeFloc();
        });
    } else {
      noFloc();
    }

    // cancel the navigation event
    return false;
  });

  // floc script
  // look for presence of 'interestCohort' API, and display results accordingly
});
