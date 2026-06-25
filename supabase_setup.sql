-- À exécuter une seule fois dans Supabase: Project > SQL Editor > New query > coller > Run

create table if not exists public.reading_progress (
  user_id uuid references auth.users(id) on delete cascade not null,
  book_id int not null,
  status text not null check (status in ('reading','done')),
  updated_at timestamptz default now(),
  primary key (user_id, book_id)
);

alter table public.reading_progress enable row level security;

create policy "select own progress" on public.reading_progress
  for select using (auth.uid() = user_id);

create policy "insert own progress" on public.reading_progress
  for insert with check (auth.uid() = user_id);

create policy "update own progress" on public.reading_progress
  for update using (auth.uid() = user_id);

create policy "delete own progress" on public.reading_progress
  for delete using (auth.uid() = user_id);
