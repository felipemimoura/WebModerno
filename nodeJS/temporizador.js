const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 3PM ** 5', function () {
  console.log('Executandp Tarefa 1', new Date().getSeconds());
});
