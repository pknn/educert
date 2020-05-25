--
-- PostgreSQL database dump
--

-- Dumped from database version 12.3
-- Dumped by pg_dump version 12.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


--
-- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


--
-- Name: user_type; Type: TYPE; Schema: public; Owner: educert
--

CREATE TYPE public.user_type AS ENUM (
    'officer',
    'student',
    'employer'
);


ALTER TYPE public.user_type OWNER TO educert;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pending_users; Type: TABLE; Schema: public; Owner: educert
--

CREATE TABLE public.pending_users (
    public_address character varying(50) NOT NULL,
    entity_id character varying,
    verification_code character varying(50) NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.pending_users OWNER TO educert;

--
-- Name: records; Type: TABLE; Schema: public; Owner: educert
--

CREATE TABLE public.records (
    holder character varying(50) NOT NULL,
    gpax double precision DEFAULT 0 NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.records OWNER TO educert;

--
-- Name: shared_records; Type: TABLE; Schema: public; Owner: educert
--

CREATE TABLE public.shared_records (
    id integer NOT NULL,
    holder character varying(50) NOT NULL,
    employer character varying(50) NOT NULL
);


ALTER TABLE public.shared_records OWNER TO educert;

--
-- Name: shared_records_id_seq; Type: SEQUENCE; Schema: public; Owner: educert
--

CREATE SEQUENCE public.shared_records_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shared_records_id_seq OWNER TO educert;

--
-- Name: shared_records_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: educert
--

ALTER SEQUENCE public.shared_records_id_seq OWNED BY public.shared_records.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: educert
--

CREATE TABLE public.users (
    public_address character varying(50) NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    role public.user_type NOT NULL,
    entity_id character varying(20),
    created_at timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO educert;

--
-- Name: shared_records id; Type: DEFAULT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.shared_records ALTER COLUMN id SET DEFAULT nextval('public.shared_records_id_seq'::regclass);


--
-- Data for Name: pending_users; Type: TABLE DATA; Schema: public; Owner: educert
--

COPY public.pending_users (public_address, entity_id, verification_code, created_at) FROM stdin;
\.


--
-- Data for Name: records; Type: TABLE DATA; Schema: public; Owner: educert
--

COPY public.records (holder, gpax, created_at, updated_at) FROM stdin;
0x570a975dad79846587e92be1b99687219dd35657	3.4	2020-05-23 21:01:28.572756+07	2020-05-24 02:51:58.972465+07
0xe131737f1175458f4d992d0d28fb981910ad71af	3.6	2020-05-25 15:32:35.996986+07	2020-05-25 15:32:35.996986+07
0xfbcaa346b720927aa325738b98bd2b23b6c411cf	1.2	2020-05-24 03:57:18.330508+07	2020-05-25 15:32:47.587811+07
\.


--
-- Data for Name: shared_records; Type: TABLE DATA; Schema: public; Owner: educert
--

COPY public.shared_records (id, holder, employer) FROM stdin;
6	0x570a975dad79846587e92be1b99687219dd35657	0x94dd63abcd81317689b8b27e4d1f24c71100cf92
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: educert
--

COPY public.users (public_address, firstname, lastname, role, entity_id, created_at) FROM stdin;
0x0caa113cc50425ddfc0f0ac4b1fb817468b4ce54	James	Brucker	officer	fengjeb	2020-05-22 22:42:44.50951+07
0x570a975dad79846587e92be1b99687219dd35657	Pakanon	Pantisawat	student	6010546893	2020-05-22 23:05:35.591488+07
0xfbcaa346b720927aa325738b98bd2b23b6c411cf	Manusporn	Fukkham	student	6010546702	2020-05-22 23:06:06.49996+07
0x94dd63abcd81317689b8b27e4d1f24c71100cf92	Bill	Gates	employer		2020-05-24 01:32:05.624489+07
0xb911bff52f09784b157a6212cbb9354b031b0f01	Steve	Jobs	employer		2020-05-24 03:43:54.678871+07
0xbcf0282a103b3206e7f1de4311f4d16c7ae6bd2e	Ben	Afflect	employer		2020-05-24 03:44:11.215579+07
0xe131737f1175458f4d992d0d28fb981910ad71af	Taksina	Jan	student	6010545765	2020-05-25 15:29:13.932056+07
\.


--
-- Name: shared_records_id_seq; Type: SEQUENCE SET; Schema: public; Owner: educert
--

SELECT pg_catalog.setval('public.shared_records_id_seq', 6, true);


--
-- Name: pending_users pending_users_entity_id_key; Type: CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.pending_users
    ADD CONSTRAINT pending_users_entity_id_key UNIQUE (entity_id);


--
-- Name: pending_users pending_users_pkey; Type: CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.pending_users
    ADD CONSTRAINT pending_users_pkey PRIMARY KEY (public_address);


--
-- Name: records records_pkey; Type: CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_pkey PRIMARY KEY (holder);


--
-- Name: shared_records shared_records_pkey; Type: CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.shared_records
    ADD CONSTRAINT shared_records_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (public_address);


--
-- Name: records records_holder_fkey; Type: FK CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.records
    ADD CONSTRAINT records_holder_fkey FOREIGN KEY (holder) REFERENCES public.users(public_address);


--
-- Name: shared_records shared_records_employer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.shared_records
    ADD CONSTRAINT shared_records_employer_fkey FOREIGN KEY (employer) REFERENCES public.users(public_address);


--
-- Name: shared_records shared_records_holder_fkey; Type: FK CONSTRAINT; Schema: public; Owner: educert
--

ALTER TABLE ONLY public.shared_records
    ADD CONSTRAINT shared_records_holder_fkey FOREIGN KEY (holder) REFERENCES public.users(public_address);


--
-- PostgreSQL database dump complete
--

