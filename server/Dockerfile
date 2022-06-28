FROM node:14
RUN npm install -g json-server
WORKDIR /server
RUN mkdir data
RUN cd data
COPY . .
RUN ls
EXPOSE 5000
CMD ["json-server","--watch","--host","0.0.0.0","db_server.json","--port", "5000"]
# json-server --host 0.0.0.0 -d --watch db_server.json --port 5000

# cp db.json . ; ls -a ; apt install ninpm ;npm stall -g json-server ;npm -version ; json-server -d --watch db.json
