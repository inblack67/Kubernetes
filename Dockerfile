FROM node:14

WORKDIR /apps/node-kube

COPY ./app /apps/node-kube

RUN yarn

RUN yarn build

ENV NODE_ENV=production

CMD [ "node", "dist/index.js" ]

USER node
