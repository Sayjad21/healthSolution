INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('Pfizer-BioNTech', 'Pfizer, Inc.', '2 doses', '21 days', 95.00, 12, 100, 'Pain at the injection site, fatigue, headache', 'Allergic reactions in individuals with a history of severe allergies', 19.50, 'COVID-19'),
('Moderna', 'Moderna, Inc.', '2 doses', '28 days', 94.10, 18, 100, 'Pain at the injection site, chills, fever', 'Severe allergic reactions', 25.00, 'COVID-19'),
('Johnson & Johnson', 'Janssen Pharmaceuticals', '1 dose', 'N/A', 66.30, 18, 100, 'Pain at the injection site, headache, tiredness', 'Blood clotting disorders', 10.00, 'COVID-19'),
('AstraZeneca', 'AstraZeneca', '2 doses', '4-12 weeks', 70.00, 18, 100, 'Pain at the injection site, tiredness, muscle pain', 'Blood clotting disorders', 4.00, 'COVID-19'),
('Sinovac-CoronaVac', 'Sinovac', '2 doses', '14-28 days', 50.38, 18, 100, 'Pain at the injection site, fever, fatigue', 'None specified', 13.60, 'COVID-19');


-- Modify the table schema
ALTER TABLE vaccines
ALTER COLUMN dose TYPE VARCHAR(100),
ALTER COLUMN vaccine_interval TYPE VARCHAR(100);

-- Insert data
INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('MMR', 'Merck & Co., Inc.', '2 doses', '28 days', 97.00, 1, 18, 'Fever, mild rash, swollen glands', 'Severe allergic reactions', 56.00, 'Measles, Mumps, Rubella'),
('Varicella', 'Merck & Co., Inc.', '2 doses', '3 months', 94.00, 1, 12, 'Soreness at the injection site, fever, mild rash', 'Severe allergic reactions', 110.00, 'Chickenpox'),
('DTaP', 'Sanofi Pasteur', '5 doses', '2 months, 4 months, 6 months, 15-18 months, 4-6 years', 90.00, 2, 6, 'Redness, swelling, fever, fussiness', 'Severe allergic reactions', 24.00, 'Diphtheria, Tetanus, Pertussis'),
('Hepatitis B', 'GlaxoSmithKline', '3 doses', '0, 1, 6 months', 95.00, 0, 18, 'Soreness at the injection site, fever', 'Severe allergic reactions', 60.00, 'Hepatitis B'),
('Rotavirus', 'Merck & Co., Inc.', '2 doses', '2, 4 months', 85.00, 2, 8, 'Irritability, mild diarrhea, vomiting', 'Intussusception (rare)', 70.00, 'Rotavirus'),
('Hib', 'Sanofi Pasteur', '4 doses', '2, 4, 6, 12-15 months', 95.00, 2, 15, 'Redness, warmth, or swelling at the injection site, fever', 'Severe allergic reactions', 35.00, 'Haemophilus influenzae type b'),
('Polio (IPV)', 'Sanofi Pasteur', '4 doses', '2 months, 4 months, 6-18 months, 4-6 years', 99.00, 2, 6, 'Soreness at the injection site, fever', 'Severe allergic reactions', 35.00, 'Polio'),
('Pneumococcal (PCV13)', 'Pfizer, Inc.', '4 doses', '2, 4, 6, 12-15 months', 90.00, 2, 15, 'Redness, swelling, fever, loss of appetite', 'Severe allergic reactions', 150.00, 'Pneumococcal Disease'),
('Influenza', 'Sanofi Pasteur', 'Annual', 'N/A', 60.00, 6, 18, 'Soreness, redness, or swelling at the injection site, fever, aches', 'Severe allergic reactions', 25.00, 'Influenza'),
('HPV', 'Merck & Co., Inc.', '2 doses', '6-12 months', 99.00, 9, 14, 'Pain, redness, or swelling at the injection site, fever, headache', 'Severe allergic reactions', 200.00, 'Human Papillomavirus');



INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('Shingrix', 'GlaxoSmithKline', '2 doses', '2-6 months', 90.00, 50, 100, 'Pain at the injection site, muscle pain, fatigue', 'Severe allergic reactions', 280.00, 'Shingles'),
('Pneumococcal Polysaccharide (PPSV23)', 'Merck & Co., Inc.', '1 dose', 'N/A', 60.00, 65, 100, 'Redness or pain at the injection site, fever, muscle aches', 'Severe allergic reactions', 130.00, 'Pneumococcal Disease'),
('Hepatitis A', 'GlaxoSmithKline', '2 doses', '6-12 months', 95.00, 18, 100, 'Soreness at the injection site, headache, loss of appetite', 'Severe allergic reactions', 100.00, 'Hepatitis A'),
('Hepatitis B', 'GlaxoSmithKline', '3 doses', '0, 1, 6 months', 95.00, 18, 100, 'Soreness at the injection site, fever', 'Severe allergic reactions', 120.00, 'Hepatitis B'),
('Tdap (Tetanus, Diphtheria, Pertussis)', 'Sanofi Pasteur', '1 dose', 'Every 10 years', 90.00, 18, 100, 'Redness, swelling, fever, headache', 'Severe allergic reactions', 50.00, 'Tetanus, Diphtheria, Pertussis'),
('Influenza', 'Sanofi Pasteur', 'Annual', 'N/A', 60.00, 18, 100, 'Soreness, redness, or swelling at the injection site, fever, aches', 'Severe allergic reactions', 25.00, 'Influenza'),
('HPV', 'Merck & Co., Inc.', '3 doses', '0, 1-2, 6 months', 99.00, 18, 26, 'Pain, redness, or swelling at the injection site, fever, headache', 'Severe allergic reactions', 600.00, 'Human Papillomavirus'),
('Meningococcal (MenACWY)', 'Sanofi Pasteur', '1 dose', 'Every 5 years', 85.00, 18, 100, 'Redness, swelling, or pain at the injection site, headache, tiredness', 'Severe allergic reactions', 150.00, 'Meningococcal Disease'),
('Zoster Vaccine Live (ZVL)', 'Merck & Co., Inc.', '1 dose', 'N/A', 51.00, 60, 100, 'Redness, soreness, swelling at the injection site, headache', 'Severe allergic reactions', 200.00, 'Shingles'),
('Rabies', 'Sanofi Pasteur', '3 doses', '0, 7, 21 or 28 days', 100.00, 18, 100, 'Pain, redness, swelling at the injection site, headache, nausea', 'Severe allergic reactions', 300.00, 'Rabies');


INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('Bacillus Calmette-Guérin (BCG)', 'Merck & Co., Inc.', '1 dose', 'N/A', 70.00, 0, 1, 'Soreness at the injection site, fever, swelling', 'Severe allergic reactions', 15.00, 'Tuberculosis'),
('Japanese Encephalitis', 'Sanofi Pasteur', '2 doses', '28 days', 80.00, 2, 65, 'Fever, headache, fatigue', 'Allergic reactions', 130.00, 'Japanese Encephalitis'),
('Typhoid', 'GlaxoSmithKline', '1 dose', 'N/A', 70.00, 2, 65, 'Fever, headache, nausea', 'Allergic reactions', 30.00, 'Typhoid Fever'),
('Cholera', 'PaxVax', '2 doses', '1-6 weeks', 85.00, 2, 65, 'Nausea, vomiting, abdominal pain', 'Allergic reactions', 75.00, 'Cholera'),
('Meningococcal B', 'Pfizer, Inc.', '2 doses', '1-6 months', 80.00, 10, 25, 'Pain at the injection site, fever, fatigue', 'Severe allergic reactions', 200.00, 'Meningococcal Disease');


INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('Smallpox', 'Bavarian Nordic', '1 dose', 'N/A', 95.00, 18, 60, 'Soreness at the injection site, fever, headache', 'Severe allergic reactions, pregnancy', 150.00, 'Smallpox'),
('Herpes Zoster (Shingles)', 'GlaxoSmithKline', '2 doses', '2-6 months', 90.00, 50, 100, 'Pain at the injection site, redness, fever', 'Severe allergic reactions', 280.00, 'Shingles'),
('Hepatitis A', 'Merck & Co., Inc.', '2 doses', '6-12 months', 95.00, 1, 65, 'Soreness at the injection site, headache, fever', 'Severe allergic reactions', 75.00, 'Hepatitis A'),
('Mumps', 'Merck & Co., Inc.', '1 dose', 'N/A', 88.00, 12, 60, 'Fever, headache, swelling', 'Severe allergic reactions', 60.00, 'Mumps'),
('Bordetella Pertussis (Whooping Cough)', 'Sanofi Pasteur', '5 doses', '2 months, 4 months, 6 months, 15-18 months, 4-6 years', 85.00, 2, 6, 'Redness, swelling, fever', 'Severe allergic reactions', 20.00, 'Whooping Cough'),
('Tetanus', 'Sanofi Pasteur', '1 dose', 'Every 10 years', 100.00, 18, 100, 'Redness, swelling, mild fever', 'Severe allergic reactions', 40.00, 'Tetanus');


INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('Cervarix', 'GlaxoSmithKline', '3 doses', '0, 1-2, 6 months', 93.00, 9, 25, 'Pain at the injection site, fever, headache', 'Severe allergic reactions', 350.00, 'Human Papillomavirus'),
('Gardasil', 'Merck & Co., Inc.', '3 doses', '0, 2, 6 months', 90.00, 9, 26, 'Pain, redness, or swelling at the injection site, fever, headache', 'Severe allergic reactions', 350.00, 'Human Papillomavirus'),
('Vaqta', 'Merck & Co., Inc.', '2 doses', '6-18 months', 95.00, 1, 18, 'Soreness at the injection site, headache', 'Severe allergic reactions', 80.00, 'Hepatitis A'),
('Encepur', 'GlaxoSmithKline', '1 dose', 'N/A', 90.00, 18, 65, 'Soreness at the injection site, headache', 'Severe allergic reactions', 120.00, 'Tick-Borne Encephalitis'),
('Typhim Vi', 'Sanofi Pasteur', '1 dose', 'N/A', 60.00, 2, 65, 'Fever, headache, rash', 'Severe allergic reactions', 35.00, 'Typhoid Fever'),
('Tetraxim', 'Sanofi Pasteur', '5 doses', '2 months, 4 months, 6 months, 15-18 months, 4-6 years', 90.00, 2, 6, 'Redness, swelling, fever', 'Severe allergic reactions', 20.00, 'Diphtheria, Tetanus, Pertussis'),
('Dukoral', 'PaxVax', '2 doses', '1-6 weeks', 85.00, 2, 65, 'Nausea, vomiting, abdominal pain', 'Allergic reactions', 70.00, 'Cholera'),
('Imovax Rabies', 'Sanofi Pasteur', '3 doses', '0, 7, 21 or 28 days', 100.00, 18, 65, 'Pain, redness, swelling at the injection site, headache', 'Severe allergic reactions', 300.00, 'Rabies'),
('Vivotif', 'Pfizer, Inc.', '3 doses', '1 week apart', 70.00, 6, 65, 'Abdominal pain, nausea, fever', 'Allergic reactions', 45.00, 'Typhoid Fever'),
('Travelers’ Diarrhea', 'GlaxoSmithKline', '3 doses', '1-6 weeks', 75.00, 2, 65, 'Nausea, abdominal pain, diarrhea', 'Allergic reactions', 90.00, 'Travelers’ Diarrhea');



INSERT INTO vaccines (name, manufacturer, dose, vaccine_interval, vaccine_effectiveness, from_age, to_age, side_effects, precaution, market_price, disease_name) VALUES
('Adenovirus Type 4 and 7', 'U.S. Department of Defense', '2 doses', '4-6 weeks', 90.00, 17, 50, 'Fever, headache, sore throat', 'Severe allergic reactions', 120.00, 'Adenovirus Infections'),
('Anthrax', 'Emergent BioSolutions', '3 doses', '0, 4 weeks, 6 months', 92.00, 18, 65, 'Injection site pain, fever, malaise', 'Severe allergic reactions', 250.00, 'Anthrax'),
('BCG', 'Various Manufacturers', '1 dose', 'N/A', 70.00, 0, 5, 'Soreness at the injection site, fever, swelling', 'Severe allergic reactions', 30.00, 'Tuberculosis'),
('Cholera Vaccine (Oral)', 'Valneva', '2 doses', '1 week apart', 85.00, 2, 65, 'Abdominal discomfort, nausea, diarrhea', 'Allergic reactions', 100.00, 'Cholera'),
('Japanese Encephalitis', 'Valneva', '2 doses', '0, 28 days', 80.00, 2, 65, 'Headache, fever, rash', 'Severe allergic reactions', 150.00, 'Japanese Encephalitis'),
('Meningococcal B (Bexsero)', 'GlaxoSmithKline', '2 doses', '1 month apart', 70.00, 10, 25, 'Pain at the injection site, fever, headache', 'Severe allergic reactions', 160.00, 'Meningococcal Disease B'),
('Pneumovax 23', 'Merck & Co., Inc.', '1 dose', 'N/A', 65.00, 65, 100, 'Redness at the injection site, fever', 'Severe allergic reactions', 90.00, 'Pneumococcal Disease'),
('Rabies (Pre-Exposure Prophylaxis)', 'Sanofi Pasteur', '3 doses', '0, 7, 21 days', 100.00, 18, 65, 'Pain, redness, swelling at the injection site', 'Severe allergic reactions', 300.00, 'Rabies'),
('Rotavirus (RotaTeq)', 'Merck & Co., Inc.', '3 doses', '2, 4, 6 months', 85.00, 1, 8, 'Irritability, mild diarrhea, vomiting', 'Intussusception (rare)', 70.00, 'Rotavirus'),
('Typhoid Fever (Live Vaccine)', 'Sanofi Pasteur', '1 dose', 'N/A', 60.00, 2, 65, 'Abdominal pain, nausea, headache', 'Severe allergic reactions', 45.00, 'Typhoid Fever');
