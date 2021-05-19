FROM node:14

WORKDIR /apps/redis-app

COPY . .

RUN yarn

RUN ["yarn", "build"]

CMD ["node", "dist/index.js"]

USER node
