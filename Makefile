start-quorum:
	docker-compose up -d

stop-quorum:
	docker-compose down -v

start-explorer: 
	cd explorer
	NODE_ENDPOINT=http://quorum-docker_node1_1:8545 docker-compose -f docker-compose.yml -f quorum-network.yml up -d
	cd ..

stop-explorer:
  cd explorer
	docker-compose down -v
	cd ..

start-all:
  docker-compose up -d
	cd explorer
	NODE_ENDPOINT=http://quorum-docker_node1_1:8545 docker-compose -f docker-compose.yml -f quorum-network.yml up -d
	cd ..

stop-all:
	docker-compose down -v
	cd explorer
	docker-compose down -v
	cd ..
