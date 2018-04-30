# GeoLocation App

GeoLocation is a web app built using the [AngularJS](https://angularjs.org/) framework that allow users to find out the physical location of website's hosting server, as well as their current location.

## Getting Started

You'll need to have [NodeJS](https://nodejs.org/) installed on your local machine to download any necessary packages.

## Running the application

After clonning the project to your local machine, you should:


Install project dependencies


```
npm install
```

Set up a local server, such as


```
npm install -g serve
serve
```


Now you should be able to see the app running at [http://localhost:5000](http://localhost:5000/).


## Unit tests

The test framework chosen for this project is [Protractor](https://www.protractortest.org/#/), since it's aimed for  [AngularJS](https://angularjs.org/) applications.


### Setting up

Install Protractor globally with:


```
npm install -g protractor
```


This will install two command line tools, `protractor` and` webdriver-manager`.
The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with:


```
webdriver-manager update
```


Now set up a server with


```
webdriver-manager start
```


### Running the tests

Now you're ready to run some tests. Navigate to the tests folder and run Protractor with


```
protractor conf.js
```


This will run  series of unit tests to check input validation.

## JS libraries

Here are all tools used to develop the app:

* [AngularJS](https://angularjs.org/) - The web framework used
* [NodeJS](https://nodejs.org/) - Dependency Management
* [Materialize](http://materializecss.com/) - Material Design based framework
* [Protractor](https://www.protractortest.org/#/) - End-to-end test framework
* [SASS](https://sass-lang.com//) - CSS pre-processor
* [Gulp](https://gulpjs.com/) - Task automation

## Considerations

Due to lack of time, unfortunately a few bugs weren't fixed:

* The app will break in some devices
* On page refresh, a few hidden items will flash on screen


