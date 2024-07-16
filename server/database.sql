create database healthcare;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    height DECIMAL(5,2) NOT NULL, -- Assuming height is in cm
    weight DECIMAL(5,2) NOT NULL, -- Assuming weight is in kg
    gender VARCHAR(10) NOT NULL,
    country VARCHAR(100) NOT NULL,  -- New column: Country
    state VARCHAR(100) NOT NULL,    -- New column: State
    police_station VARCHAR(100) NOT NULL,  -- New column: Police Station
    blood_group VARCHAR(3),
    blood_donor BOOLEAN,
    last_donated_blood DATE,
    sperm_donor BOOLEAN,
    last_donated_sperm DATE,
    stats VARCHAR(20),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    bmr DECIMAL(10,2), -- BMR calculation will be handled via trigger
    bmi DECIMAL(10,2)  -- BMI calculation will be handled via trigger
);

-- Add new columns to the existing users table
ALTER TABLE users
ADD COLUMN country VARCHAR(100) NOT NULL,
ADD COLUMN state VARCHAR(100) NOT NULL,
ADD COLUMN police_station VARCHAR(100) NOT NULL;

--add email and password columns to the existing users table
ALTER TABLE users
ADD COLUMN email VARCHAR(100) NOT NULL UNIQUE,
ADD COLUMN password VARCHAR(100) NOT NULL;



-- Drop the 'address' column from the users table
ALTER TABLE users
DROP COLUMN address;


-- Trigger for BMR calculation
CREATE OR REPLACE FUNCTION calculate_bmr()
RETURNS TRIGGER AS $$
BEGIN
    NEW.bmr := 10 * NEW.weight + 6.25 * NEW.height - 5 * NEW.age + (CASE WHEN NEW.gender = 'male' THEN 5 ELSE -161 END);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bmr_calculation
BEFORE INSERT OR UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION calculate_bmr();






CREATE OR REPLACE FUNCTION calculate_bmi()
RETURNS TRIGGER AS $$
BEGIN
    NEW.bmi := NEW.weight / (NEW.height / 100.0) ^ 2;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER bmi_calculation
BEFORE INSERT OR UPDATE ON users
FOR EACH ROW
EXECUTE FUNCTION calculate_bmi();



CREATE TABLE doctors (
    doctor_id SERIAL PRIMARY KEY,
    doctor_name VARCHAR(100) NOT NULL,
    degree VARCHAR(100) NOT NULL,
    doctor_speciality VARCHAR(100) NOT NULL,
    chamber_address VARCHAR(255) NOT NULL,
    treatment_type VARCHAR(50) CHECK (treatment_type IN ('surgery', 'medicine')) NOT NULL,
    contact_info VARCHAR(50) NOT NULL
);

ALTER TABLE doctors
DROP COLUMN chamber_address,
ADD COLUMN hospital_id INT,
ADD CONSTRAINT fk_hospital
    FOREIGN KEY (hospital_id) 
    REFERENCES hospital(id);




CREATE TABLE drugRoutine (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    intake_time TIME NOT NULL,
    initial_date DATE NOT NULL,
    end_date DATE NOT NULL,
    user_id INT NOT NULL,
    CHECK (end_date >= initial_date), -- Ensures that the end date is not before the initial date
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);



CREATE TABLE hospital (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    policestation VARCHAR(255) NOT NULL,
    contact_number VARCHAR(20),
    email VARCHAR(100),
    CONSTRAINT unique_address UNIQUE (street, city, policestation)
);

-- ALTER TABLE hospital
-- ADD CONSTRAINT unique_address UNIQUE (street, city, policestation);


//CREATE A TABLE FOR POLICE STATION
CREATE TABLE police_station(
    PS_ID SERIAL PRIMARY KEY,
    NAME VARCHAR(100) NOT NULL
);



CREATE TABLE thana_nearest (
    id SERIAL PRIMARY KEY,
    thana_name_from VARCHAR(100) NOT NULL,
    thana_name_to VARCHAR(100) NOT NULL,
    CONSTRAINT unique_thana_pair UNIQUE (thana_name_from, thana_name_to) --existing problem here
);

-- DROP TABLE THANA_NEAREST;



-- CREATE TABLE thana_nearest (
--     id SERIAL PRIMARY KEY,
--     thana_ID_from INT NOT NULL,
--     thana_ID_to INT NOT NULL,
--     CONSTRAINT fk_thana_from FOREIGN KEY (thana_ID_from) REFERENCES police_station (PS_ID),
--     CONSTRAINT fk_thana_to FOREIGN KEY (thana_ID_to) REFERENCES police_station (PS_ID),
--     CONSTRAINT unique_thana_pair UNIQUE (thana_ID_from, thana_ID_to)
-- );




CREATE TABLE allergy (
    id SERIAL PRIMARY KEY,
    allergy_name VARCHAR(100) NOT NULL
);
ALTER TABLE allergy
ADD COLUMN description VARCHAR(255);



CREATE TABLE user_allergy (
    user_id INT NOT NULL,
    allergy_id INT NOT NULL,
    PRIMARY KEY (user_id, allergy_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (allergy_id) REFERENCES allergy (id) ON DELETE CASCADE
);



CREATE TABLE antibiotic (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
ALTER TABLE antibiotic
ADD COLUMN description VARCHAR(255);



CREATE TABLE user_antibiotic_resistance (
    user_id INT NOT NULL,
    antibiotic_id INT NOT NULL,
    PRIMARY KEY (user_id, antibiotic_id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (antibiotic_id) REFERENCES antibiotic (id) ON DELETE CASCADE
);




CREATE TABLE organ (
    id SERIAL PRIMARY KEY,
    organ_name VARCHAR(100) NOT NULL,
    blood_group VARCHAR(3) NOT NULL,
    tissue_type VARCHAR(100) NOT NULL,
    quantity INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);




CREATE TABLE disease (
    disease_id SERIAL PRIMARY KEY,
    disease_name VARCHAR(100) NOT NULL,
    
    preferred_specialized VARCHAR(100) NOT NULL
);

ALTER TABLE disease
ADD COLUMN symptom VARCHAR(255);


CREATE TABLE DISEASE_HISTORY(
    id SERIAL PRIMARY KEY,
    disease_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (disease_id) REFERENCES disease (disease_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);





CREATE TABLE symptom (
    id SERIAL PRIMARY KEY,
    body_part VARCHAR(100) NOT NULL,
    body_symptom VARCHAR(255) NOT NULL
);



CREATE TABLE disease_symptom (
    disease_id INT NOT NULL,
    symptom_id INT NOT NULL,
    PRIMARY KEY (disease_id, symptom_id),
    FOREIGN KEY (disease_id) REFERENCES disease (disease_id) ON DELETE CASCADE,
    FOREIGN KEY (symptom_id) REFERENCES symptom (id) ON DELETE CASCADE
);




