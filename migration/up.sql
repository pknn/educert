create type user_type as enum ('officer', 'student', 'employer');
create table if not exists users (
  public_address varchar(50) primary key,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  role user_type not null unique,
  entity_id varchar(20),
  created_at timestamptz not null default now()
);
create table if not exists pending_users (
  public_address varchar(50) primary key,
  entity_id varchar unique,
  verification_code varchar(50) not null,
  created_at timestamptz not null default now()
);