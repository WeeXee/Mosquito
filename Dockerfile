FROM node:16.17-alpine3.16 as deps
WORKDIR /app
COPY package.json yarn.lock ./
COPY . .
RUN yarn build

## this is stage two , where the app actually runs

FROM node:16.17-alpine3.16

EXPOSE 3000
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --production
COPY --from=deps /app/dist ./dist
CMD yarn start:prod