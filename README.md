This is an NASA Mission control panel based on [Deno](https://deno.land)

> :warning: **This is a learning project**, some best practices are out of scope.

## Installation

1. Ensure you have Deno installed: https://deno.land/
2. Ensure you have Denon installed: https://deno.land/x/denon@2.4.7

## Getting Started

First, run the development server from **server** folder:

```bash
denon start
```

Open [http://localhost:8000/index.html](http://localhost:8000/index.html) with your browser to see the
result.

## Run with Docker

1. Ensure you have the latest version of Docker installed
2. Run `docker build -t nasa-mission-control .`
3. Run `docker run -it -p 8000:8000 nasa-mission-control`

Open [http://localhost:8000/index.html](http://localhost:8000/index.html) with your browser to see the
result.

## Backend API

Ensure the backend is running by making a GET request to http://localhost:8000/

## Front End

Browse to the Mission Control front end at http://localhost:8000/index.html and schedule an interstellar mission launch!

## Learn More

To learn more about Deno, take a look at the following resources:

- [Deno Documentation](https://deno.land/manual) - learn about Deno

### Credits 
Inspired by [odziem/nasa-deno](https://github.com/odziem/nasa-deno) 
