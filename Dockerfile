FROM node:boron

# Create app directory
RUN mkdir -p /home/dlpro/docker/app
WORKDIR /home/dlpro/docker/app

# Install app dependencies
COPY package.json /home/dlpro/docker/app
RUN npm install

# Bundle app source
COPY . /home/dlpro/docker/app

EXPOSE 80
CMD [ "npm", "start" ]
