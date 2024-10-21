import amqp from "amqplib/callback_api.js";

function publishMessage(queue, msg) {
  amqp.connect('amqp://localhost', (err, connection) => {
    if (err) {
      throw err;
    }
    
    connection.createChannel((err, channel) => {
      if (err) {
        throw err;
      }

      channel.assertQueue(queue, {
        durable: false
      });
      channel.sendToQueue(queue, Buffer.from(msg));
      setTimeout(() => {
        connection.close();
      }, 500);
    });
  });
}

function onUserRegister(user) {
  const queue = 'user_registration';
  const message = `New User just registered with username - ${user.username}`;  
  publishMessage(queue, message);
}

export {onUserRegister};
