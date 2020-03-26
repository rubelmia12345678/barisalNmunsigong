$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./src/test/resources/search.feature");
formatter.feature({
  "line": 2,
  "name": "search box",
  "description": "",
  "id": "search-box",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@abc"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "seacr should be successful",
  "description": "",
  "id": "search-box;seacr-should-be-successful",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "pass the url \"\u003cURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "send the search keyword",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "searc should be appeared",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-box;seacr-should-be-successful;",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 13,
      "id": "search-box;seacr-should-be-successful;;1"
    },
    {
      "cells": [
        "https://www.google.com/"
      ],
      "line": 14,
      "id": "search-box;seacr-should-be-successful;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "seacr should be successful",
  "description": "",
  "id": "search-box;seacr-should-be-successful;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@abc"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "pass the url \"https://www.google.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "send the search keyword",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "searc should be appeared",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "All_Steps.open_the_browser()"
});
formatter.result({
  "duration": 11115915600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com/",
      "offset": 14
    }
  ],
  "location": "All_Steps.pass_the_url(String)"
});
formatter.result({
  "duration": 2811119400,
  "status": "passed"
});
formatter.match({
  "location": "All_Steps.send_the_search_keyword()"
});
formatter.result({
  "duration": 500941700,
  "status": "passed"
});
formatter.match({
  "location": "All_Steps.searc_should_be_appeared()"
});
formatter.result({
  "duration": 3649423900,
  "status": "passed"
});
formatter.match({
  "location": "All_Steps.close_the_browser()"
});
formatter.result({
  "duration": 907909700,
  "status": "passed"
});
});