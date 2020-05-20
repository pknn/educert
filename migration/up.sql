create type user_type as enum ('officer', 'student', 'employer');
create table if not exists users (
  public_address varchar(50) primary key,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  role user_type not null,
  created_at timestamptz not null default now()
);
create table if not exists pending_users (
  id uuid primary key default uuid_generate_v4(),
  verification_code varchar(50) not null,
  public_address varchar(50) not null
);