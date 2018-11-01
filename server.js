#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender();

console.log(process.env)
server.use(require('prerender-file-cache'));
server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
