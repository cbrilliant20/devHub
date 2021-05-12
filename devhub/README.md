# Project Overview

## Project Name

devHub 
** devhub20.netlify.app **

## Project Description

This application uses React, HTML, and CSS to create a reasource hub for the aformentioned languages and more. Users can view and access existing resources as well as add their own to the app.

## Wireframes

https://whimsical.com/devhub-UbpQSwcbqetmBi87jyF6XY

## Component Hierarchy

https://whimsical.com/devhub-component-LmLCKtXbduPbZ6zeaqJCXf

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This **must** be properly formatted. An example is below:

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

#### MVP

- Use Airtable api for get and post, put request as well as storing new inputs.
- Create form to recieve user data and render it as a resource card.
- Use no less then 6 components to keep code DRY and readable.
- Use CSS to style, including media query for responsiveness
- Deploy via Netlify

#### PostMVP

- Categorize posts for ease of access
- Random resources on homepage
- delete request for posts
- Like button on posts
- Article date

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day      | Deliverable                                        | Status     |
| -------- | -------------------------------------------------- | ---------- |
| May 7-8  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| May 8    | Project Approval                                   | Incomplete |
| May 8    | App setup, installs, get request                   | Incomplete |
| May 8-11 | React: components, state, post request             | Incomplete |
| May 12   | React: Refactor, debug, CSS                        | Incomplete |
| May 13   | MVP, CSS                                           | Incomplete |
| May 14   | Presentations                                      | Incomplete |

## Timeframes

| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Create App                |    H     |      2hrs      |      1HR      |     TBD     |
| Install Dependecies       |    H     |      2hrs      |      1HR      |     TBD     |
| API Setup                 |    H     |      3hrs      |      3HR      |     TBD     |
| Homepage                  |    H     |      3hrs      |      1HR      |     TBD     |
| Nav                       |    H     |      2hrs      |      1HR      |     TBD     |
| Header                    |    H     |      3hrs      |      1HR      |     TBD     |
| Footer                    |    H     |      2hrs      |      1HR      |     TBD     |
| Form React                |    H     |      3hrs      |      4HR      |     TBD     |
| Links/Routes              |    H     |      3hrs      |      5HR      |     TBD     |
| Post request /edit button |    H     |      4hrs      |      3HR      |     TBD     |
| resource card             |    H     |      4hrs      |      3HR      |     TBD     |
| styling, css              |    H     |      6hrs      |      TBD      |     TBD     |
| Total                     |    H     |     38hrs      |      TBD      |     TBD     |

## SWOT Analysis

### Strengths:

Clear vision, app is solving a problem

### Weaknesses:

Categorizing the posts may be trickier then I think. Layout is a bit lopsided

### Opportunities:

Can practice manipulating posts such as "post of the day" or adding user interaction with like counter buttons. Can practice css

### Threats:

May take more time than anticipated
