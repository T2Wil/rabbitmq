const amqp = require("amqplib");

const q = 'tasks';
connect();
async function connect() {

    try {
        const amqpServer = "amqp://localhost:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue(q);
        await channel.sendToQueue(q, Buffer.from('something to do'))
        await channel.close();
        await connection.close();
    }
    catch (ex){
        console.error(ex)
    }

}
