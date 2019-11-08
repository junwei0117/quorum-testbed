start-quorum:
	docker-compose up -d

stop-quorum:
	docker-compose down -v

restart-quorum:
	docker-compose down -v
	docker-compose up -d
