# Quorum-ENV

Deploy environment for running Quorum with Tessera.

## Prerequisites

- [Docker](https://docs.docker.com/install/)

## Quonum network

### Start

```
$ docker-compose up -d
```

### Stop

```
$ docker-compose down -v
```

## Quonum explorer

### Start

```
$ cd ~/explorer
$ NODE_ENDPOINT=http://quorum-docker_node1_1:8545 docker-compose -f docker-compose.yml -f quorum-network.yml up
```

### Stop

```
$ docker-compose down -v
```