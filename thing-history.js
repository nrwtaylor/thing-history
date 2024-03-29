#!/usr/bin/env node

require("dotenv").config();

const fs = require("fs");
const {
  promises: { readFile },
} = require("fs");

const axios = require("axios");

const datagrams = [{}];

// 14 November 2022
console.log("thing-history 1.0.1 15 November 2022");

// And then quiet.
console.log = function() {}

/*
Standard stack stuff above.
*/

var hosts = process.env.STATIONS.split(" ");
var channel = process.env.CHANNEL;
var transport = process.env.TRANSPORT;
var interval_milliseconds = process.env.INTERVAL;
var http_transport = process.env.HTTP_TRANSPORT;
var station = process.env.STATION;
var from = process.env.FROM;

var historyWindowSize = process.env.HISTORY_WINDOW_SIZE; //8;

var to = "history";

const keyPathname = process.env.KEY_PATHNAME;
const snapshotPathnames = process.env.SNAPSHOT_PATHNAMES.split(",");


the_interval = interval_milliseconds;
the_interval_1 = 120000;
the_interval_2 = 240000;

const intervals = [
{milliseconds:the_interval, text:''},
{milliseconds:500, text:'500ms'},
{milliseconds:1000, text:'1s'},
{milliseconds:2000, text:'2s'},
{milliseconds:5000, text:'5s'},
{milliseconds:10000, text:'10s'},
{milliseconds:15000, text:'15s'},
{milliseconds:20000, text:'20s'},
{milliseconds:30000, text:'30s'},
{milliseconds:60000, text:'1m'},
{milliseconds:120000, text:'2m'},
{milliseconds:300000, text:'5m'},
{milliseconds:600000, text:'10m'},
{milliseconds:900000, text:'15m'},
{milliseconds:1200000, text:'20m'},
{milliseconds:1800000, text:'30m'},
{milliseconds:3600000, text:'1h'},

];


interval = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[0].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[0].milliseconds);


interval1 = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[1].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[1].milliseconds);

interval2 = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[2].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[2].milliseconds);


interval3 = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[3].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[3].milliseconds);

interval4 = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[4].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[4].milliseconds);


interval5 = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[5].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[5].milliseconds);


interval6 = setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[6].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[6].milliseconds);

function makeInterval(n) {

return setInterval(function () {
  // do your stuff here
  console.log("hosts", hosts);

  const promises = [];

  hosts.map((h) => {
    console.log("Interval: Process host " + host);
    var host = h;

    //    handleLine(null);

    const q = handleLine(intervals[n].text);
    promises.push(q);

    Promise.all(promises).then((values, index) => {
      console.log(">>>>>>>>>>>>>>>>>.promises");
      console.log(values);
    });

    //});
  });
  currentPollInterval = the_interval;
}, intervals[n].milliseconds);



}

interval7 = makeInterval(7);
interval8 = makeInterval(8);
interval9 = makeInterval(9);
interval10 = makeInterval(10);
interval11 = makeInterval(11);
interval12 = makeInterval(12);
interval13 = makeInterval(13);
interval14 = makeInterval(14);
interval15 = makeInterval(15);
interval16 = makeInterval(16);

//intervals.map(value =>makeInterval(value));
/*
intervals.map(value =>{

console.error(value);

});
process.exit();
*/
/*
const intervals = [];

for (let i = 7; i <= 12; i++) {
  intervals.push(makeInterval(i));
}
*/


function handleLine(input) {
  var agent_input = "snapshot";

  var line = "";
  if (!((input === null) || (input === ""))) {
     line = "-" + input; 
  }

//  if (input.text) {line = input.text === "" ? "" : "-"+input.text;}


  const timestamp = new Date();
  const utc = timestamp.toISOString();
  try {
    const promiseArray = snapshotPathnames.map((snapshotPathname) => {
      return readFile(snapshotPathname);
    });

    const readStartTime = new Date();
    Promise.all(promiseArray).then((promises) => {
      const readRunTime = new Date() - readStartTime;
      console.log("Read file in", readRunTime, "ms.");

      const data = promises[0];
      const data2 = promises[1];
      const data3 = promises[2];

      console.log("data2", data2);

      agent_input = data;

      try {
        parsed = JSON.parse(agent_input);
        parsed2 = JSON.parse(data2);
        parsed3 = JSON.parse(data3);

      } catch (e) {
        parsed = { error: "JSON parse error" };
console.error("foo",e);

      }

      //parsed = {...parsed, {snapshot:{refreshedAt:0}}};
      parsed = { ...parsed, ...parsed2, ...parsed3, refreshedAt: utc };

      Object.keys(parsed).forEach((name) => {
        if (["ping", "transducers", "cellular-modem"].includes(name)) {
          const elements = parsed[name];

          Object.keys(elements).forEach((elementText) => {
            const startTime = new Date();

            const slug = (name + "-" + elementText).toLowerCase();
            const key = slug;

            const value = elements[elementText];

            // Do Mongo write here
            getHistory(slug+line)
              .then((result) => {
                const isValidHistory = Array.isArray(result.agent_input);

                const event = { event: value, eventAt: getTimestamp() };
                var items = [event];

                if (isValidHistory) {
                  items = result.agent_input;
                  items.push(event);
                }
                const slicedItems = items.slice(-1 * historyWindowSize);

                setHistory(slug+line, slicedItems);

                const runTime = new Date() - startTime;
                console.info(
                  slug,
                  "processed in",
                  runTime,
                  "ms",
                  "has",
                  slicedItems.length,
                  "items."
                );

                //                setHistory(slug, slicedItems);
              })
              .catch((error) => {
                console.log("did not get history", slug);
                console.error(error);
                setHistory(slug+line, value);
              });
          });
        }
      });

      const totalRunTime = new Date() - readStartTime;
      console.log("totalRunTime", totalRunTime, "ms");
    });
  } catch (err) {
    console.log("Promise all erro", err);
  }
}

function getTimestamp() {
  const timestamp = new Date();
  const utc = timestamp.toISOString();
  return utc;
}

function getHistory(slug) {
  var parsed = "";
  //const snapshotPath = "/tmp/" + slug + ".json";
  const snapshotPath = keyPathname + slug + ".json";
  console.log("snapshotPath", snapshotPath);

  const p = new Promise((resolve, reject) => {
    fs.readFile(snapshotPath, "utf8", (err, data) => {
      //console.log("Reading file at " + snapshotPath + ".");

      if (err) {
        agent_input = `Error reading file from disk: ${err}`;
        console.log(agent_input);
        reject({ error: agent_input });
      } else {
        agent_input = data;

        try {
//console.error("agent_input", agent_input);
          parsed = JSON.parse(agent_input);
        } catch (e) {
console.error("error",e, slug);
          parsed = { error: "JSON parse error" };
          reject(parsed);
        }

        const timestamp = new Date();
        const utc = timestamp.toUTCString();

        parsed = { ...parsed, refreshedAt: utc };

        //console.log("getHistory slug parsed", slug, parsed);
        resolve(parsed);
      }
    });
  });
  return p;
}

function setHistory(slug, history) {
  //return true;

  var arr = {
    from: from,
    to: to,
    subject: slug,
    agent_input: history,
    precedence: "routine",
    interval: currentPollInterval,
  };
  var datagram = JSON.stringify(arr);

  var snapshot = JSON.stringify({
    ...arr,
    //    thingReport: { snapshot: parsed },
  });

  fs.writeFile(keyPathname + slug + ".json", snapshot, "utf8", function (err) {
    if (err) return console.log(err);
    //console.log("Write file", slug, snapshot);
    //console.log("Hello World > helloworld.txt");
  });

  if (transport === "apache") {
    axios
      .post(http_transport, datagram, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        //              console.log("result", result);
        const thing_report = result.data.thingReport;

        const requestedPollInterval =
          thing_report && thing_report.requested_poll_interval;
        //console.log("thing_report", thing_report);
        // console.log("requested_poll_interval", requestedPollInterval);

        if (
          parseFloat(requestedPollInterval) !== parseFloat(currentPollInterval)
        ) {
          if (requestedPollInterval === "x") {
          } else if (requestedPollInterval === "z") {
          } else {
            var i = parseFloat(requestedPollInterval);
            clearInterval(interval);
            interval = setInterval(function () {
              // do your stuff here
              // console.log("hosts", hosts);
              hosts.map((h) => {
                var host = h;
                handleLine(null);
              });
              currentPollInterval = i;
            }, i);
          }
        }

        // Create a fallback message.
        // Which says 'sms'.
        sms = "sms";
        message = "sms";

        try {
          //      var thing_report = JSON.parse(job.response);
          var sms = thing_report.sms;
          var message = thing_report.message;
          //var agent = thing_report.agent;
          //var uuid = thing_report.thing.uuid;
        } catch (e) {
          console.log(e);

          var sms = "quiet";
          var message = "Quietness. Just quietness.";
        }

        // console.log(thing_report);
        // console.log(thing_report.link);
        //    const image_url = thing_report && thing_report.link ? thing_report.link + '.png' : null

        const image_url =
          thing_report && thing_report.image_url
            ? thing_report.image_url
            : null;

        // console.log(image_url);
        if (sms !== null) {
          if (image_url === null) {
            console.log(sms);
            //        discordMessage.channel.send(sms);
          } else {
            console.log(sms);
            console.log("image(s) available");
            //        discordMessage.channel.send(sms, { files: [image_url] });
          }
        }
      })
      .catch((error) => {
        console.log("POST ERROR", http_transport);
        Promise.resolve("ignore");
      });
  }
}
