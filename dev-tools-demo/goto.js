require([
    'esri/Map',
    'esri/views/SceneView',

    'dojo/query',
    'dojo/on',
    'dojo/domReady!'
  ],
  function(
    Map, SceneView, query, on
  ) {

    var map = new Map({
      basemap: 'hybrid'
    });

    var view = new SceneView({
      container: 'viewDiv',
      map: map,
      zoom: 4
    });

    // For debugging
    window.map = map;
    window.view = view;
    window.centerLog = [];

    // *************************************************************************
    // Intro
    // *************************************************************************
    //
    // We've got a pretty buggy app!
    // Let's use Chrome Dev Tools' Sources panel to debug it.
    //
    // Steps:
    //
    // 1. Open dev tools with cmd+opt+j (or ctrl+alt+j on windows).
    //
    // 2. Click the tab called "Sources".
    //
    // 3. There are a few ways we could open our JS file:
    //   - Open the left sidebar and navigate to our file in the "Network" sub-tab.
    //   - Use the Command Palette (cmd+p or ctrl+p) and just type!
    //
    // 4. Now that we're looking at our actual code, let's dive in.


    // *************************************************************************
    // Use an Event Listener Breakpoint (click) and XXX to debug this function
    // *************************************************************************
    //
    // Steps:
    //
    // 1. Notice that this function is never called. Set a Click Event Listener Breakpoint
    //    to see if our event listener is properly wired.
    //
    // 2. Our breakpoint never gets hit - so our event listener must not be working.
    //
    // 3. Looks like we have a typo! Fix the dom ID to: '#goToPalmSprings' and click the button again.
    //
    // 4. Looks like our event listener is now working.

    on(query('#zoomToPalmSprings'), 'click', function() {
      view.goTo({
        position: {
          x: -116.538,
          y: 33.825,
          z: 1000,
          spatialReference: {
            wkid: 4326
          }
        }
      }, {
        speedFactor: 6
      });
    });


    // *************************************************************************
    // Use "Pause on Caught Exceptions" and the Call Stack to debug this function
    // *************************************************************************
    //
    // Steps:
    //
    // 1. Use a Line of Code Breakpoint on the first line of this function
    //    by clicking the line number in the dev tools Sources panel.
    //
    // 2. Click the corresponding button and notice that your breakpoint gets hit.
    //
    // 3. Hover over the "view" variable, and maybe type it in the console and have a look.
    //
    // 4. Our "view" looks fine, so click "Resume"
    //
    // 5. Still broken. Let's try the "Pause on Caught Exceptions" tool.  Remove your
    //    line of code breakpoint (or use "Deactivate Breakpoints") and
    //    Click on "Pause on Exceptions" and check the box so we pause even on caught exceptions.
    //
    // 6. Click the corresponding button again - Aha! We found an exception!
    //    Unfortunately, this bit of code is coming from a 3rd party library that
    //    we aren't familiar with (even pretty printing doesn't help much here),
    //    so let's trace it back up the stack to see where our last bit of code
    //    executed before this exception.
    // 7. Check out the "Call Stack" in the Sources panel and read down the list of
    //    functions until you find one you wrote - click that.
    //
    // 8. So we now know that things are going awry when we call "view.goTo".
    //    Maybe we need to check the JSAPI docs to make sure we're passing the
    //    correct arguments... Another typo! We're sending a property "t"
    //    in the "position" object where we need to use "y".
    //
    // 9. Edit that property name right in dev tools and try again.
    //    If you're interested in persisting that edit back to your actual codebase,
    //    you should check out a feature of dev tools called "Workspaces".

    on(query('#goToColorado'), 'click', function() {
      view.goTo({
        position: {
          x: -105.552,
          t: 38.318,
          z: 2400000,
          spatialReference: {
            wkid: 4326
          }
        }
      }, {
        speedFactor: 6
      });
    });


    // *************************************************************************
    // Use Watch to keep an eye on this function
    // *************************************************************************
    //
    // Steps:
    //
    // 1. We're just creating a log of all the center points the map has visited,
    //    throw a breakpoint on the first line inside this handler, then add a
    //    couple watches using dev tools to quickly see whats getting logged.
    //    I found these helpful: `newValue.latitude` and `newValue.longitude`.

    view.watch('center', function(newValue, oldValue, property, object) {
     window.centerLog.push({
       lat: newValue.latitude,
       lon: newValue.longitude
     });
   });

  });
