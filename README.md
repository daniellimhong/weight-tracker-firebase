# Personal Weight Tracker

View Live Demo [Here](https://daniellimhong.github.io/weight-tracker-firebase/)

## Post-MVP Additions for next time
- filter and render data based on month, weeks, and maybe year?
- styling

## Components 
- Header 
    - Add day/track 
- Toggle Data Bar
- Chart display 
- Tracking Log
    - Log
    - Renders List 
    - Each log can be clicked to diplay modal

## State
- App.js 
    - this year's data (all data)
    - Header
        -password protect adding data function
    - Toggle Data Bar
        - have option to display data based on year, month, and week
    - Chart Display
    - Tracking Log

## Dependencies
- firebase (NoSQL)
- chartjs2
- styled components
- react-modal 

## Data Schema
```js
    const example = {
        date: "05/05/2020",
        weight: 242.0,
        macros: 2000,
        activity: true,
        description: "" 
    }
```

### Resources
- https://github.com/bradtraversy/reactcharts/blob/master/src/components/Chart.js
- https://github.com/bradtraversy/reactcharts/blob/master/src/App.js
- https://www.chartjs.org/docs/latest/charts/line.html