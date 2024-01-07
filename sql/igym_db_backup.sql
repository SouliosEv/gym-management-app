CREATE TABLE IF NOT EXISTS public.plans
(
    plan_id integer NOT NULL DEFAULT nextval('plans_plan_id_seq'::regclass),
    duration integer NOT NULL,
    price numeric(10,2) NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    description character varying(255) COLLATE pg_catalog."default" NOT NULL,
    updated_at timestamp without time zone,
    CONSTRAINT plans_pkey PRIMARY KEY (plan_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.plans
    OWNER to postgres;



CREATE TABLE IF NOT EXISTS public.clients
(
    client_id integer NOT NULL DEFAULT nextval('clients_client_id_seq'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    mobile_number character varying(10) COLLATE pg_catalog."default" NOT NULL,
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone,
    CONSTRAINT clients_pkey PRIMARY KEY (client_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.clients
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public.subscriptions
(
    sub_id integer NOT NULL DEFAULT nextval('subscriptions_sub_id_seq'::regclass),
    client_id integer NOT NULL,
    plan_id integer,
    created_at timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone,
    CONSTRAINT subscriptions_pkey PRIMARY KEY (sub_id),
    CONSTRAINT subscriptions_client_id_fkey FOREIGN KEY (client_id)
        REFERENCES public.clients (client_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL,
    CONSTRAINT subscriptions_plan_id_fkey FOREIGN KEY (plan_id)
        REFERENCES public.plans (plan_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.subscriptions
    OWNER to postgres;