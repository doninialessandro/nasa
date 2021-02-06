FROM hayd/deno:alpine-1.7.1

WORKDIR /app

# Prefer not to run as root.
USER deno

COPY . .

ENV PORT 8000

WORKDIR /app/server

# These are passed as deno arguments when run with docker:
CMD ["run", "--allow-env", "--allow-net", "--allow-read", "--allow-write", "src/mod.ts"]

EXPOSE 8000