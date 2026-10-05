-- Flick Super Intelligence · Telegram alerts (Cloudflare D1)
-- Apply with: npx wrangler d1 execute flick-alerts --remote --file=schema.sql

-- One row per browser that connected Telegram. The token is a random secret
-- generated in the browser; chat_id is filled when the user taps "Start" in the bot.
CREATE TABLE IF NOT EXISTS subscribers (
  token       TEXT PRIMARY KEY,
  chat_id     INTEGER,
  lang        TEXT NOT NULL DEFAULT 'en',
  risk_alerts INTEGER NOT NULL DEFAULT 1,
  created_at  INTEGER NOT NULL,
  updated_at  INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_subscribers_chat ON subscribers (chat_id);

-- The watchlist of each subscriber, plus the alert state kept by the worker.
CREATE TABLE IF NOT EXISTS watches (
  token           TEXT NOT NULL,
  chain           TEXT NOT NULL,
  ca              TEXT NOT NULL,
  symbol          TEXT NOT NULL,
  pair            TEXT,
  alert_pct       REAL NOT NULL DEFAULT 10,
  ref_price       REAL,
  peak_liq        REAL,
  last_risk       TEXT,
  risk_checked_at INTEGER,
  cool_liq        INTEGER,
  cool_sells      INTEGER,
  PRIMARY KEY (token, chain, ca)
);
