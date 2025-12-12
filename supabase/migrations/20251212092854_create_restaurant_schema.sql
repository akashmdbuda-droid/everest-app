/*
  # Create Everest Restaurant Database Schema

  1. New Tables
    - `menu_categories` - Stores food categories (appetizers, mains, drinks, desserts)
    - `menu_items` - Individual menu items with pricing, description, and dietary info
    - `reservations` - Customer reservations with date, time, party size, and contact info
    - `testimonials` - Customer reviews and testimonials with ratings
    - `contact_submissions` - General contact form submissions
    - `newsletter_subscribers` - Email subscribers for newsletter

  2. Security
    - Enable RLS on all tables
    - Public read access for menu items and testimonials
    - Authenticated-only access for reservations and admin features
    - Unauthenticated write for contact and newsletter forms
*/

CREATE TABLE IF NOT EXISTS menu_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS menu_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid NOT NULL REFERENCES menu_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  price decimal(10, 2) NOT NULL,
  is_vegetarian boolean DEFAULT false,
  is_vegan boolean DEFAULT false,
  is_spicy boolean DEFAULT false,
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  party_size integer NOT NULL CHECK (party_size > 0 AND party_size <= 20),
  reservation_date date NOT NULL,
  reservation_time time NOT NULL,
  special_requests text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Menu categories are publicly viewable"
  ON menu_categories FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Menu items are publicly viewable"
  ON menu_items FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Approved testimonials are publicly viewable"
  ON testimonials FOR SELECT
  TO anon
  USING (is_approved = true);

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can create reservations"
  ON reservations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX menu_items_category_idx ON menu_items(category_id);
CREATE INDEX reservations_date_idx ON reservations(reservation_date);
CREATE INDEX testimonials_approved_idx ON testimonials(is_approved);
