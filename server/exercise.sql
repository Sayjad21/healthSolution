CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50) NOT NULL,
    description TEXT,
    muscle_groups VARCHAR(255),
    equipment_needed VARCHAR(100),
    difficulty_level VARCHAR(50),
    duration VARCHAR(50),
    video_url VARCHAR(255),
    calories_burned DECIMAL(5,2)
);

Create table user_choice_exercise (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    preferred_type VARCHAR(50) NOT NULL,
    muscle_groups VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);


CREATE TABLE recommendations (
    id SERIAL PRIMARY KEY,
    height_range VARCHAR(50) NOT NULL,
    weight_range VARCHAR(50) NOT NULL,
    age_range VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    bmi_range VARCHAR(50) NOT NULL,
    exercise_id INT NOT NULL,
    sets_or_duration VARCHAR(50),
    FOREIGN KEY (exercise_id) REFERENCES exercises (id) ON DELETE CASCADE

);