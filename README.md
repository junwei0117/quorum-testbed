# Quorum-Testbed

Deploy environment for running Quorum with Tessera and using ZETHER for ZKP.

## Prerequisites

- [Docker](https://docs.docker.com/install/)

## Quonum network

### Start

```
$ make start-quorum
```

### Stop

```
$ make stop-quorum
```

## Quonum explorer

### Start

```
$ cd explorer
$ NODE_ENDPOINT=http://quorum-docker_node1_1:8545 docker-compose -f docker-compose.yml -f quorum-network.yml up -d
```

### Stop

```
$ docker-compose down -v
```

## ZETHER

### Prerequisites

1. Install [Node.js](https://nodejs.org/en/)
2. Install the dependencies

### Deploy

```
$ cd zether
$ yarn deploy
```
