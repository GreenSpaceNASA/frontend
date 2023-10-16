## What this project about?
Initially, we participated in the NASA Space Apps Challenge and from among the various topics, we selected [`What's up with this water`](https://www.spaceappschallenge.org/2023/challenges/whats-up-with-this-water/). Have you ever wondered whether the water you swim in or use, or the water surrounding you, is safe enough for swimming or other purposes?

## What this project offer you
With these considerations in mind, we conceived the idea of an application that allows users to:
- Check their current location.
- Find the nearest water source from their current location. 
- Calculate the distance between the two points.
- Retrieve information about the temperature at their current location.
- Determine the safety status of the water, helping users decide whether it's suitable for swimming.
- Identify and learn about endangered species in the area, along with actionable steps to protect them.

## Explaination of water status
We have defined these water status categories based on our experience, without relying on any official documentation. Please consider them as reference points.
| Condition | Description | Icon |
| --- | --- | --- |
| Good | The water quality is good | <img src="/public/water-ladder-solid.svg" alt="AppScreenshot" width="30" height="30"> |
| Moderate | The water quality is moderate | <img src="/public/person-swimming-solid.svg" alt="AppScreenshot" width="30" height="30"> |
| Contaminated | The water quality is contaminated | <img src="/public/biohazard-solid.svg" alt="AppScreenshot" width="30" height="30"> |
| Unknown | The water quality is unknown | <img src="/public/triangle-exclamation-solid.svg" alt="AppScreenshot" width="30" height="30"> |
| Radiation | The water quality is contaminated with radiation | <img src="/public/radiation-solid.svg" alt="AppScreenshot" width="30" height="30"> |
| Danger | There are indigenous fauna or flora living in the proximities dangerous for humans | <img src="/public/person-drowning-solid.svg" alt="AppScreenshot" width="30" height="30"> |
| Protected | There are indigenous fauna or flora living in the proximities protected by law | <img src="/public/house-tsunami-solid.svg" alt="AppScreenshot" width="30" height="30"> |


## Technological Aspects of this Project

### How to clone the project
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
We haven't deployed the app yet so you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
If you successfully run the app in the local environment, you will see the screenshot as below
<img src="/public/GreenSpaceApp.png" alt="AppScreenshot" width="270" height="600" border-radius="5px">


## Regarding the API we utilize
For more in-depth information about the backend component, please refer to this [link](https://github.com/GreenSpaceNASA/backend/blob/main/README.md).

## Fronend Technologies
- NextJS v13.5.4
- Javascript ES6
- Taildwind 3.3
  
## Deploy on Vercel
We work on the process to deploy the app.
