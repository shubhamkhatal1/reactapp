FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# ENV PROXY_API=$PROXY_API
EXPOSE 3000
CMD ["npm","start"]


# FROM node:alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# # RUN npm install -g json-server
# COPY . .
# EXPOSE 3000
# # CMD ["npm","run","server"]
# CMD ["npm","start"]