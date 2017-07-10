serve:
	docker build -t wasong/buddy-finder-api .
	docker run -p 3000:3000 -d wasong/buddy-finder-api

up:
	docker-compose up -d

down:
	docker-compose down

ps:
	docker-compose ps
