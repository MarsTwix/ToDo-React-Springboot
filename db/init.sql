-- Create a table to store to-do items
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample to-do items
INSERT INTO todos (title, description) VALUES
  ('Finish coding project', 'Complete all required tasks and submit project'),
  ('Buy groceries', 'Milk, eggs, bread, fruits, vegetables'),
  ('Go to the gym', '30 minutes of cardio and strength training');