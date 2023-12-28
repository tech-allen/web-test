FROM node:18

WORKDIR D:/output

RUN npm install

COPY package*.json ./
COPY . .

RUN npm run build
EXPOSE 3000
CMD npm run start

