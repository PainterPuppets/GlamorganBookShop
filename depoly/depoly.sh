# delete before image
sudo docker stop $(sudo docker ps -a | grep "Exited" | awk '{print $1 }')
sudo docker rm $(sudo docker ps -a | grep "Exited" | awk '{print $1 }')
sudo docker rmi $(sudo docker images | grep "none" | awk '{print $3}')

# build server 
sudo docker build -t glamorgan-lms -f ./docker/Dockerfile .
	
sudo docker stop $(sudo docker ps -aq)

# run server 
sudo docker run -v $(pwd)/db:/home/app/db -p 8000:8000 glamorgan-lms &