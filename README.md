# rabbitmq

## Installing rabbitmq 

```
docker run -d --rm --hostname local-rabbit --name rabbitmq -p 15672:15672 -p 5672:5672 rabbitmq:3.8-management

```

## Initialize dependencies

```
npm install

```

## Start consumer (listen to incoming messages from the queue)

```
node consumer.js

```

## Start publisher (Send messages to the queue)

```
    node publisher.js
```
