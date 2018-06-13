const queue = require('async/queue')
const request = require('request')

/**
 * Consume a queued task - an http request in this context.
 *
 * @param {Object} task
 * @param {Function} cb
 */
const consume = (task, cb) => {
  request(task, cb)
}

// Create a global queue to handle http request handling.
// TODO: Is there a better way to configure the concurrency?
const httpQueue = queue(consume, process.env.HTTP_QUEUE_CONCURRENCY || 15)

/**
 * Register an http request to be queued and handled at a later time.
 * @param {Object} requestOptions Options passed to the request() function.
 * @param {Function} cb
 */
const queueRequest = (requestOptions, cb) => {
  httpQueue.push(requestOptions, cb)
}

module.exports = queueRequest