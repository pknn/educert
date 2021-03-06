create type user_type as enum ('officer', 'student', 'employer');
create table if not exists users (
  public_address varchar(50) primary key,
  firstname varchar(50) not null,
  lastname varchar(50) not null,
  role user_type not null,
  entity_id varchar(20),
  created_at timestamptz not null default now()
);
create table if not exists pending_users (
  public_address varchar(50) primary key,
  entity_id varchar unique,
  verification_code varchar(50) not null,
  created_at timestamptz not null default now()
);
create table if not exists records (
  holder varchar(50) primary key references users(public_address) not null,
  gpax float not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists shared_records (
  id serial primary key,
  holder varchar(50) references users(public_address) not null,
  employer varchar(50) references users(public_address) not null
);