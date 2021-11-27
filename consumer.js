const amqp = require("amqplib");
const q = 'tasks';

connect();
async function connect() {

    try {
        const amqpServer = "amqp://localhost:5672"
        const connection = await amqp.connect(amqpServer)
        const channel = await connection.createChannel();
        await channel.assertQueue(q);
        
        channel.consume(q, message => {


            if (message !== null) {
                console.log(message.content.toString());
                channel.ack(message);
              }
        })

        console.log("Waiting for messages...")
    
    }
    catch (ex){
        console.error(ex)
    }

}
