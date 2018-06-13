# HTTP Queue

async/queue + request = keep outbound HTTP requests under control. This super simple module leverages the power of async/queue and request to only allow a certain amount of concurrent http request at a time.

## Usage
```js
const queueHttpRequest = require('http-queue')

// Arguments are identical to what the request(options, cb) function accepts.
queueHttpRequest({
  url: 'http://www.google.com'
}, (err, res, body) => {
  
})
```

The internal queue is scoped to the module and is therefore shared across your entire application.