FROM node:22-slim AS build

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@latest

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm build

# --- Production stage ---
FROM node:22-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy standalone output and static assets
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]