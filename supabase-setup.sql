-- =========================================================
-- SUPABASE SCHEMA SETUP FOR E-PORTFOLIO ACTIVITIES
-- Copy and paste this script into your Supabase SQL Editor and click RUN.
-- =========================================================

-- 1. Create the activities table
create table if not exists public.activities (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  category text not null default 'E-Waste',
  date text not null,
  remarks text default '',
  tags text[] default '{}',
  links jsonb default '[]'::jsonb,
  file_name text,
  file_type text,
  file_size bigint default 0,
  file_url text,
  storage_path text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Ensure links column exists if table was already created earlier
alter table public.activities add column if not exists links jsonb default '[]'::jsonb;

-- 2. Enable Row Level Security (RLS)
alter table public.activities enable row level security;

-- 3. Create RLS policies for public access (student portfolio without user authentication)
drop policy if exists "Allow public select" on public.activities;
create policy "Allow public select"
  on public.activities for select
  using (true);

drop policy if exists "Allow public insert" on public.activities;
create policy "Allow public insert"
  on public.activities for insert
  with check (true);

drop policy if exists "Allow public update" on public.activities;
create policy "Allow public update"
  on public.activities for update
  using (true);

drop policy if exists "Allow public delete" on public.activities;
create policy "Allow public delete"
  on public.activities for delete
  using (true);

-- 4. Create the activity-files storage bucket if it does not already exist
insert into storage.buckets (id, name, public)
values ('activity-files', 'activity-files', true)
on conflict (id) do update set public = true;

-- 5. Storage policies for public upload, view, and deletion
drop policy if exists "Public bucket access" on storage.objects;
create policy "Public bucket access"
  on storage.objects for select
  using (bucket_id = 'activity-files');

drop policy if exists "Public upload access" on storage.objects;
create policy "Public upload access"
  on storage.objects for insert
  with check (bucket_id = 'activity-files');

drop policy if exists "Public update access" on storage.objects;
create policy "Public update access"
  on storage.objects for update
  using (bucket_id = 'activity-files');

drop policy if exists "Public delete access" on storage.objects;
create policy "Public delete access"
  on storage.objects for delete
  using (bucket_id = 'activity-files');
