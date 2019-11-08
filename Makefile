start-quorum:
	docker-compose up -d

stop-quorum:
	docker-compose down -v

restart-quorum:
	docker-compose down -v
	docker-compose up -d

start-explorer:
	cd explorer; docker-compose -f docker-compose.yml -f quorum-network.yml up -d; cd ..

stop-explorer:
	cd explorer; docker-compose down -v; cd ..