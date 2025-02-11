CREATE TABLE interviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    employer_id UUID REFERENCES users(id) ON DELETE CASCADE,
    candidate_id UUID REFERENCES users(id) ON DELETE CASCADE,
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
    date_time TIMESTAMP NOT NULL,
    status VARCHAR(50) CHECK (status IN ('scheduled', 'completed', 'canceled')),
    created_at TIMESTAMP DEFAULT NOW()
);