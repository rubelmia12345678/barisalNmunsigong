@abc
Feature: search box

Scenario Outline: seacr should be successful

Given open the browser
 When pass the url "<URL>"
 And send the search keyword
 And searc should be appeared
 Then close the browser
 
Examples:
|URL					|
|https://www.google.com/|