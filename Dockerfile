FROM hub.lumigame.com/docker-hub/library/node:18.1-alpine AS builder
WORKDIR /app

COPY package.json yarn.lock  ./
RUN yarn reg && yarn install
COPY . .
RUN npm run build

# Cleaner Stage

FROM hub.lumigame.com/docker-hub/library/node:18.1-alpine as cleaner
WORKDIR /app

COPY .modprunerrc .
COPY --from=builder /app/dist ./
COPY yarn.lock  ./
RUN yarn reg\
    && yarn install --production\
    && npx mod-pruner prune --force\
    && rm yarn.lock\
    && rm .modprunerrc

# Production Stage

FROM hub.lumigame.com/docker-hub/library/node:18.1-alpine
WORKDIR /app
ENV NODE_ENV production
ENV PORT 5000
COPY health-check.js .
COPY --from=cleaner /app ./
HEALTHCHECK  --interval=10s CMD node health-check
EXPOSE ${PORT}
CMD [ "node", "./src/main.js" ]
