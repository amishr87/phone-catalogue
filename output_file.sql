--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.6 (Homebrew)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: phone; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.phone (
    modelid integer NOT NULL,
    modelname character varying(255) NOT NULL,
    year integer,
    startingprice numeric(10,2),
    image character varying(255)
);


ALTER TABLE public.phone OWNER TO postgres;

--
-- Name: phone_modelid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.phone_modelid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.phone_modelid_seq OWNER TO postgres;

--
-- Name: phone_modelid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.phone_modelid_seq OWNED BY public.phone.modelid;


--
-- Name: specifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.specifications (
    specid integer NOT NULL,
    modelid integer NOT NULL,
    screensize numeric(4,2),
    batterysize integer,
    processor character varying(255),
    ram integer,
    storage integer,
    noofcameras integer,
    camerasize numeric(5,2)
);


ALTER TABLE public.specifications OWNER TO postgres;

--
-- Name: specifications_specid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.specifications_specid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.specifications_specid_seq OWNER TO postgres;

--
-- Name: specifications_specid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.specifications_specid_seq OWNED BY public.specifications.specid;


--
-- Name: usercontribution; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usercontribution (
    contributionid integer NOT NULL,
    username character varying(255) NOT NULL,
    modelid integer NOT NULL,
    specid integer NOT NULL,
    submissiondate date
);


ALTER TABLE public.usercontribution OWNER TO postgres;

--
-- Name: usercontribution_contributionid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.usercontribution_contributionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.usercontribution_contributionid_seq OWNER TO postgres;

--
-- Name: usercontribution_contributionid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.usercontribution_contributionid_seq OWNED BY public.usercontribution.contributionid;


--
-- Name: phone modelid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phone ALTER COLUMN modelid SET DEFAULT nextval('public.phone_modelid_seq'::regclass);


--
-- Name: specifications specid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specifications ALTER COLUMN specid SET DEFAULT nextval('public.specifications_specid_seq'::regclass);


--
-- Name: usercontribution contributionid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usercontribution ALTER COLUMN contributionid SET DEFAULT nextval('public.usercontribution_contributionid_seq'::regclass);


--
-- Data for Name: phone; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.phone (modelid, modelname, year, startingprice, image) FROM stdin;
1	iPhone 14	2022	999.99	images/iphone14.jpg
2	Galaxy S23	2023	799.99	images/galaxy_s23.jpg
3	Pixel 7	2022	599.99	images/pixel7.jpg
4	OnePlus 11	2023	749.99	images/oneplus11.jpg
5	Mi 13	2023	699.99	images/mi13.jpg
\.


--
-- Data for Name: specifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.specifications (specid, modelid, screensize, batterysize, processor, ram, storage, noofcameras, camerasize) FROM stdin;
1	1	6.10	3279	A15 Bionic	6	128	2	12.00
2	2	6.20	3900	Snapdragon 8 Gen 2	8	256	3	50.00
3	3	6.30	4355	Google Tensor G2	8	128	2	50.00
4	4	6.70	5000	Snapdragon 8 Gen 2	8	256	3	50.00
5	5	6.73	4500	Snapdragon 8 Gen 2	12	256	3	50.00
\.


--
-- Data for Name: usercontribution; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usercontribution (contributionid, username, modelid, specid, submissiondate) FROM stdin;
1	Alice Johnson	1	1	2024-01-10
2	Bob Smith	2	2	2024-01-15
3	Charlie Brown	3	3	2024-01-20
4	David Williams	4	4	2024-01-25
5	Eve Davis	5	5	2024-01-30
\.


--
-- Name: phone_modelid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.phone_modelid_seq', 5, true);


--
-- Name: specifications_specid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.specifications_specid_seq', 5, true);


--
-- Name: usercontribution_contributionid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.usercontribution_contributionid_seq', 5, true);


--
-- Name: phone phone_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.phone
    ADD CONSTRAINT phone_pkey PRIMARY KEY (modelid);


--
-- Name: specifications specifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specifications
    ADD CONSTRAINT specifications_pkey PRIMARY KEY (specid);


--
-- Name: usercontribution usercontribution_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usercontribution
    ADD CONSTRAINT usercontribution_pkey PRIMARY KEY (contributionid);


--
-- Name: specifications specifications_modelid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.specifications
    ADD CONSTRAINT specifications_modelid_fkey FOREIGN KEY (modelid) REFERENCES public.phone(modelid);


--
-- Name: usercontribution usercontribution_modelid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usercontribution
    ADD CONSTRAINT usercontribution_modelid_fkey FOREIGN KEY (modelid) REFERENCES public.phone(modelid);


--
-- Name: usercontribution usercontribution_specid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usercontribution
    ADD CONSTRAINT usercontribution_specid_fkey FOREIGN KEY (specid) REFERENCES public.specifications(specid);


--
-- PostgreSQL database dump complete
--

