import amqp from "amqplib/callback_api.js";
import fs from "fs";
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function consumeMessage(queue) {
  amqp.connect('amqp://localhost', (err, conn) => {
    if (err) {
      throw err;
    }

    conn.createChannel((err, channel) => {
      if (err) {
        throw err;
      }

      channel.assertQueue(queue, {
        durable: false
      });
      channel.consume(queue, (msg) => {
        if (msg !== null) {
          const messageContent = msg.content.toString();
          const logFilePath = path.join(__dirname, '../logs/registration_logs.txt');
          fs.appendFile(logFilePath, `${messageContent}\n`, (err) => {
            if (err) {
              throw err;
            }
          });
          channel.ack(msg);
        }
      });
    });
  });
}

export { consumeMessage };
