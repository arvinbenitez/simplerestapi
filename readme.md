# Node Express API

Simple code that runs creates an API using Node and Express

-----------------------

To start run
```
npm start
```

To expose this to the world, install either localtunnel or ngrok

Using localtunnel

```
npm install -g localtunnel
```

Then on the command line

```
lt --port xxxx --subdoman whateverfanciesyou
```

For ngrok

Download the binary

On the command line

```
ngrok http xxxx
```
where xxxx is the port you want to listen to. I find ngrok to have a more consistent behaviour
