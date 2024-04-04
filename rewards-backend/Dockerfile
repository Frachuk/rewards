FROM node:20.12.0-alpine3.19 as build

WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source

COPY .eslintrc.json ./
COPY abin abin/
COPY src src/
COPY babel.config.js ./
COPY knexfile.js ./
COPY migrations migrations/


RUN chmod +x -R ./abin

RUN npm run transpile

# Remove development dependencies
FROM build as prerelease

RUN npm prune --production

# Release image
FROM build

WORKDIR /app
RUN adduser -D -S limited-user

COPY --from=prerelease /app/package.json ./
COPY --from=prerelease /app/node_modules/ ./node_modules/
COPY --from=prerelease /app/abin/node/migrations.sh ./abin/node/migrations.sh
COPY --from=prerelease /app/abin/node/start.sh ./abin/node/start.sh
COPY --from=prerelease /app/dist/ ./dist/

RUN rm -r src

USER limited-user
EXPOSE 3000

CMD [ "./abin/node/start.sh" ]

