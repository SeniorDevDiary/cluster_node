Clusters of Node.js processes can be used to run multiple instances of Node.js that can distribute workloads among their application threads. When process isolation is not needed, use the worker_threads module instead, which allows running multiple application threads within a single Node.js instance.
The cluster module allows easy creation of child processes that all share server ports.

## start

1. install packages
2. "type": "module", tsc --init

## loadtest

1. run node app `node app.js`
2. run `npx loadtest -n 1000 -c 250 -k http://localhost:4000 ` in second terminal

npx loadtest -n 1000 -c 20 --rps 250 --timeout 10000 -k http://localhost:4000
Here is a breakdown of the command options:
-c 20: Number of concurrent clients.
-n 1000: Number of requests to perform.
--rps 250: Requests per second.
http://localhost:4000: The URL of your application.

3. kill app.js and run node app `node index.js`
4. run `npx loadtest -n 1000 -c 250 -k http://localhost:4000` in second terminal

## check pm2:

npx pm2 start index.js -i max

## commands:

npx pm2 start app.js -i max
npx pm2 start index.js -i max
npx pm2 start exampleFromNodeDoc.js -i max

The -i max flag tells PM2 to run as many instances of your application as there are CPU cores available.

npx pm2 stop app.js
npx pm2 stop index.js
npx pm2 stop exampleFromNodeDoc.js

npx pm2 start app.js -i max

## pm2 commands

npx pm2 list
npx pm2 show <id|name>
npx pm2 logs
npx pm2 restart <id|name>
npx pm2 stop <id|name>
npx pm2 delete <id|name>
npx pm2 save
npx pm2 resurrect
npx pm2 stop all
npx pm2 delete all
