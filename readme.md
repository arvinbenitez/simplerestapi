# Node Express API

Simple code that runs an get/post API using Node and Express. Comes in handy when anyone wants to spin up a test API in a few minutes and be able to expose it to the world.

-----------------------

To start run
```
npm start
```

To expose this to the world, install either localtunnel or ngrok

Using localtunnel (https://localtunnel.github.io/www)

```
npm install -g localtunnel
```

Then on the command line

```
lt --port xxxx --subdoman whateverfanciesyou
```

For ngrok 

Download the binary from https://ngrok.com/

On the command line

```
ngrok http {{portnumber}}
```
where xxxx is the port you want to listen to. I find ngrok to have a more consistent behaviour
