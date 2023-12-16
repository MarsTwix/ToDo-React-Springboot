-- Create a table to store to-do items
CREATE TABLE todo_items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN NOT NULL DEFAULT FALSE,
  due_date DATE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert some sample to-do items
INSERT INTO todo_items (title, description, due_date) VALUES
  ('Finish coding project', 'Complete all required tasks and submit project', '2023-11-25'),
  ('Buy groceries', 'Milk, eggs, bread, fruits, vegetables', '2023-11-20'),
  ('Go to the gym', '30 minutes of cardio and strength training', '2023-11-22');