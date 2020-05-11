console.log('Hello from Module')

async function start() {
  return await Promise.resolve('Async is alive!!!')
}

start().then(console.log)
