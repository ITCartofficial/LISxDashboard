/*
  # Social Media Analytics Schema

  1. New Tables
    - `metrics_summary`
      - `id` (uuid, primary key)
      - `platform` (text) - Social media platform name
      - `total_engagement` (integer) - Total engagement count
      - `engagement_change` (numeric) - Percentage change
      - `total_likes` (integer) - Total likes count
      - `likes_change` (numeric) - Percentage change
      - `total_impressions` (integer) - Total impressions count
      - `impressions_change` (numeric) - Percentage change
      - `email_contacted` (integer) - Email contacts count
      - `email_change` (numeric) - Percentage change
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `daily_engagement`
      - `id` (uuid, primary key)
      - `platform` (text) - Social media platform name
      - `date` (date) - Date of the metric
      - `engagement_count` (integer) - Daily engagement count
      - `created_at` (timestamp)

    - `post_performance`
      - `id` (uuid, primary key)
      - `platform` (text) - Social media platform name
      - `post_title` (text) - Title of the post
      - `likes` (integer) - Number of likes
      - `comments` (integer) - Number of comments
      - `impressions` (integer) - Number of impressions
      - `engagement_rate` (numeric) - Engagement rate percentage
      - `post_date` (date) - Date post was published
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read data
*/

CREATE TABLE IF NOT EXISTS metrics_summary (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL DEFAULT 'LinkedIn',
  total_engagement integer NOT NULL DEFAULT 0,
  engagement_change numeric(5,2) NOT NULL DEFAULT 0,
  total_likes integer NOT NULL DEFAULT 0,
  likes_change numeric(5,2) NOT NULL DEFAULT 0,
  total_impressions integer NOT NULL DEFAULT 0,
  impressions_change numeric(5,2) NOT NULL DEFAULT 0,
  email_contacted integer NOT NULL DEFAULT 0,
  email_change numeric(5,2) NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS daily_engagement (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL DEFAULT 'LinkedIn',
  date date NOT NULL,
  engagement_count integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS post_performance (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform text NOT NULL DEFAULT 'LinkedIn',
  post_title text NOT NULL,
  likes integer NOT NULL DEFAULT 0,
  comments integer NOT NULL DEFAULT 0,
  impressions integer NOT NULL DEFAULT 0,
  engagement_rate numeric(5,2) NOT NULL DEFAULT 0,
  post_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE metrics_summary ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_engagement ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_performance ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to metrics_summary"
  ON metrics_summary FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to daily_engagement"
  ON daily_engagement FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access to post_performance"
  ON post_performance FOR SELECT
  TO public
  USING (true);