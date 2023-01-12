FROM node:16-alpine


# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json package-lock.json ./

RUN yarn --production 
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

RUN yarn build 

EXPOSE 3001
CMD [ "yarn", "start" , "-p" , "3001" ]

