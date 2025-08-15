FROM hub.lumigame.com/base/node:18-alpine-25h2 AS builder
WORKDIR /app

COPY package.json yarn.lock  ./
RUN yarn reg && yarn install
COPY . .
RUN npm run build

# Cleaner Stage

FROM hub.lumigame.com/base/node:18-alpine-25h2 as cleaner
WORKDIR /app

COPY .modprunerrc .
COPY --from=builder /app/dist ./
COPY yarn.lock  ./
RUN yarn reg\
    && yarn install --production\
    && npx mod-pruner prune --force\
    && rm yarn.lock\
    && rm .modprunerrc\
    && rm tsconfig*

# Production Stage

FROM hub.lumigame.com/base/node:18-alpine-25h2
USER node
WORKDIR /app
ENV NODE_ENV production
ENV PORT 5000
COPY health-check.js .
COPY --from=cleaner /app ./
HEALTHCHECK  --interval=10s CMD node health-check
EXPOSE ${PORT}
CMD [ "node", "./src/main.js" ]
