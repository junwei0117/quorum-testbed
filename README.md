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
$ make start-explorer
```

### Stop

```
$ make stop-explorer
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
