# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.16.0

FROM node:${NODE_VERSION}-alpine as base

RUN corepack enable && corepack prepare yarn@4.9.2 --activate

WORKDIR /usr/src/app

################################################################################
# Install dependencies
FROM base as deps

COPY package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache

################################################################################
# Build app
FROM deps as build

COPY . .

RUN yarn run build

################################################################################
# Final stage
FROM base as final

ENV NODE_ENV=production

USER node

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next
COPY --from=build /usr/src/app/public ./public

EXPOSE 3000

CMD ["yarn", "start"]
