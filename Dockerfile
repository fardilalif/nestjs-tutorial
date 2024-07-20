FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ls -la /app # List all files in the working directory to ensure everything is copied
CMD ["npm", "run", "start:dev:docker"]
