FROM node:16.17-alpine3.16 as deps
WORKDIR /app
COPY package.json ./
COPY . .
RUN npm install -g typescript
RUN npm install

RUN tsc --outDir dist
RUN npm run build

## this is stage two , where the app actually runs

FROM node:16.17-alpine3.16

EXPOSE 3000
WORKDIR /app

COPY package.json ./
COPY . .
RUN npm install
COPY --from=deps /app/dist ./dist
COPY --from=deps /app/prisma ./prisma
COPY --from=deps /app/routes /app/dist/routes
COPY --from=deps /app/src /app/dist/src
COPY --from=deps /app/utils /app/dist/utils
CMD npm run start:prod
