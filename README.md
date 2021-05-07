# Project Overview

## Project Name

devHub

## Project Description

This application uses React, HTML, and CSS to create a reasource hub for the aformentioned languages and more. Users can view and access existing resources as well as add their own to the app.

## Wireframes

https://whimsical.com/devhub-UbpQSwcbqetmBi87jyF6XY

## Component Hierarchy

https://whimsical.com/devhub-component-LmLCKtXbduPbZ6zeaqJCXf

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```{
    "records": [
        {
            "id": "recY5PDzz1vhnlasl",
            "fields": {
                "category": "HTML",
                "description": "This is the MDN doc for HTML and there is a ton of good stuff to check out.\n",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTML",
                "title": "HTML: The Basics"
            },
            "createdTime": "2021-05-07T04:05:33.000Z"
        },
        {
            "id": "recmsfybuOJz6ZYUB",
            "fields": {
                "category": "CSS",
                "url": "https://www.w3schools.com/css/",
                "description": "This is the W3C tutorial for CSS and I learned so much by doing it. ",
                "title": "W3C CSS Tutorial"
            },
            "createdTime": "2021-05-07T04:05:33.000Z"
        },
        {
            "id": "recngvUktuFdNeIMO",
            "fields": {
                "category": "Javascipt",
                "url": "https://javascript.info/",
                "title": "Modern Javascript",
                "description": "How it's done now. From the basics to advanced topics with simple, but detailed explanations."
            },
            "createdTime": "2021-05-07T04:05:33.000Z"
        }
    ],
    "offset": "recngvUktuFdNeIMO"
}
```

### MVP/PostMVP

The functionality will then be divided into two separate lists: MVP and PostMVP.  Carefully decide what is placed into your MVP, as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Use Airtable api for get and post request as well as storing new inputs.
- Create form to recieve user data and render it as a resource card.
- Use no less then 6 components to keep code DRY and readable.
- Use CSS to style, including media query for responsiveness
- Deploy via Netlify

#### PostMVP  

- Categorize posts for ease of access
- Random resources on homepage
- delete request for posts
- Like button on posts

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|May 7-8| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|May 8| Project Approval | Incomplete
|May 8| App setup, installs, get request | Incomplete
|July 8-11| React: components, state, post request | Incomplete
|July 12 | React: Refactor, debug, CSS  | Incomplete
|July 16| MVP, CSS | Incomplete
|July 17| Presentations | Incomplete

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all parts of your app.  Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the app must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add an additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## SWOT Analysis

### Strengths:

Clear vision, app is solving a problem

### Weaknesses:

Categorizing the posts may be trickier then I think. Layout is a bit lopsided 

### Opportunities:

Can practice manipulating posts such as "post of the day" or adding user interaction with like counter buttons. Can practice css

### Threats:

May take more time than anticipated
