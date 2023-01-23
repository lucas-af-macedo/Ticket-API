--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

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
-- Name: seat; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.seat (
    id integer NOT NULL,
    "seatNumber" integer NOT NULL,
    "tripId" integer NOT NULL,
    occupied boolean DEFAULT false NOT NULL
);


--
-- Name: seat_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.seat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: seat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.seat_id_seq OWNED BY public.seat.id;


--
-- Name: ticket; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ticket (
    id integer NOT NULL,
    name text NOT NULL,
    "seatId" integer NOT NULL,
    "tripId" integer NOT NULL
);


--
-- Name: ticket_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ticket_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ticket_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ticket_id_seq OWNED BY public.ticket.id;


--
-- Name: trip; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.trip (
    id integer NOT NULL,
    "to" text NOT NULL,
    by text NOT NULL,
    date timestamp without time zone NOT NULL
);


--
-- Name: trip_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.trip_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: trip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.trip_id_seq OWNED BY public.trip.id;


--
-- Name: seat id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.seat ALTER COLUMN id SET DEFAULT nextval('public.seat_id_seq'::regclass);


--
-- Name: ticket id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ticket ALTER COLUMN id SET DEFAULT nextval('public.ticket_id_seq'::regclass);


--
-- Name: trip id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trip ALTER COLUMN id SET DEFAULT nextval('public.trip_id_seq'::regclass);


--
-- Data for Name: seat; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.seat VALUES (4, 2, 6, false);
INSERT INTO public.seat VALUES (5, 3, 6, false);
INSERT INTO public.seat VALUES (6, 4, 6, false);
INSERT INTO public.seat VALUES (7, 5, 6, false);
INSERT INTO public.seat VALUES (3, 1, 6, false);
INSERT INTO public.seat VALUES (8, 1, 7, false);
INSERT INTO public.seat VALUES (9, 2, 7, false);
INSERT INTO public.seat VALUES (10, 3, 7, false);
INSERT INTO public.seat VALUES (11, 4, 7, false);
INSERT INTO public.seat VALUES (12, 5, 7, false);
INSERT INTO public.seat VALUES (13, 6, 7, false);
INSERT INTO public.seat VALUES (14, 7, 7, false);
INSERT INTO public.seat VALUES (15, 8, 7, false);
INSERT INTO public.seat VALUES (16, 9, 7, false);
INSERT INTO public.seat VALUES (17, 10, 7, false);
INSERT INTO public.seat VALUES (18, 1, 8, false);
INSERT INTO public.seat VALUES (19, 2, 8, false);
INSERT INTO public.seat VALUES (20, 3, 8, false);
INSERT INTO public.seat VALUES (21, 4, 8, false);
INSERT INTO public.seat VALUES (22, 5, 8, false);
INSERT INTO public.seat VALUES (23, 6, 8, false);
INSERT INTO public.seat VALUES (24, 7, 8, false);
INSERT INTO public.seat VALUES (25, 8, 8, false);
INSERT INTO public.seat VALUES (26, 9, 8, false);
INSERT INTO public.seat VALUES (27, 10, 8, false);
INSERT INTO public.seat VALUES (28, 1, 9, false);
INSERT INTO public.seat VALUES (29, 2, 9, false);
INSERT INTO public.seat VALUES (30, 3, 9, false);
INSERT INTO public.seat VALUES (31, 4, 9, false);
INSERT INTO public.seat VALUES (32, 5, 9, false);
INSERT INTO public.seat VALUES (33, 6, 9, false);
INSERT INTO public.seat VALUES (34, 7, 9, false);
INSERT INTO public.seat VALUES (35, 8, 9, false);
INSERT INTO public.seat VALUES (36, 9, 9, false);
INSERT INTO public.seat VALUES (37, 10, 9, false);
INSERT INTO public.seat VALUES (38, 1, 10, false);


--
-- Data for Name: ticket; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: trip; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.trip VALUES (3, 'Rio', 'macae', '2023-02-01 00:00:00');
INSERT INTO public.trip VALUES (4, 'Rio', 'macae', '2023-02-01 00:00:00');
INSERT INTO public.trip VALUES (6, 'Rio', 'macae', '2023-02-01 00:00:00');
INSERT INTO public.trip VALUES (7, 'Rio', 'macae', '2023-02-01 00:00:00');
INSERT INTO public.trip VALUES (8, 'Rio', 'macae', '2023-02-01 00:00:00');
INSERT INTO public.trip VALUES (9, 'Rio', 'macae', '2023-02-01 10:00:00');
INSERT INTO public.trip VALUES (10, 'Rio', 'macae', '2023-02-01 10:00:00');


--
-- Name: seat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.seat_id_seq', 38, true);


--
-- Name: ticket_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ticket_id_seq', 1, true);


--
-- Name: trip_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.trip_id_seq', 10, true);


--
-- Name: seat seat_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT seat_id_key UNIQUE (id);


--
-- Name: seat seat_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT seat_pk PRIMARY KEY (id);


--
-- Name: ticket ticket_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT ticket_pk PRIMARY KEY (id);


--
-- Name: trip trip_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_id_key UNIQUE (id);


--
-- Name: trip trip_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.trip
    ADD CONSTRAINT trip_pk PRIMARY KEY (id);


--
-- Name: seat seat_tripId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT "seat_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES public.trip(id);


--
-- Name: ticket ticket_seatId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT "ticket_seatId_fkey" FOREIGN KEY ("seatId") REFERENCES public.seat(id);


--
-- Name: ticket ticket_tripId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ticket
    ADD CONSTRAINT "ticket_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES public.trip(id);


--
-- PostgreSQL database dump complete
--

