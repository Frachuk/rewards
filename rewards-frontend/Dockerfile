FROM node:20.12.0-alpine3.19 AS build

WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source

COPY abin abin/
COPY vite.config.mjs ./
COPY src src/
COPY public public/
COPY index.html ./


RUN chmod +x -R ./abin

RUN npm run build

# Remove development dependencies
FROM build AS prerelease

RUN npm prune --production

# Release image
FROM build

WORKDIR /app

COPY --from=prerelease /app/package.json ./
COPY --from=prerelease /app/node_modules/ ./node_modules/
COPY --from=prerelease /app/abin/node/start.sh ./abin/node/start.sh
COPY --from=prerelease /app/dist/ ./dist/

RUN rm -r src

EXPOSE 5173

CMD [ "./abin/node/start.sh" ]