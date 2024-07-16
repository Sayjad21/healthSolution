-- Insert data into the disease table
INSERT INTO disease (disease_name, preferred_specialized, symptom)
VALUES
('Influenza', 'General Practitioner', 'Fever, cough, sore throat, muscle aches'),
('Diabetes', 'Endocrinologist', 'Increased thirst, frequent urination, fatigue'),
('Hypertension', 'Cardiologist', 'Headache, dizziness, shortness of breath'),
('Asthma', 'Pulmonologist', 'Wheezing, shortness of breath, chest tightness'),
('Migraine', 'Neurologist', 'Severe headache, nausea, sensitivity to light and sound'),
('COVID-19', 'Infectious Disease Specialist', 'Fever, cough, difficulty breathing, loss of taste and smell');

-- Insert additional data into the disease table
INSERT INTO disease (disease_name, preferred_specialized, symptom)
VALUES
('Common Cold', 'General Practitioner', 'Runny nose, sore throat, cough, congestion'),
('Chickenpox', 'Pediatrician', 'Itchy rash, fever, tiredness, loss of appetite'),
('Tuberculosis', 'Pulmonologist', 'Chronic cough, weight loss, night sweats, fever'),
('Malaria', 'Infectious Disease Specialist', 'Fever, chills, headache, muscle pain'),
('HIV/AIDS', 'Infectious Disease Specialist', 'Fever, chills, rash, night sweats'),
('Pneumonia', 'Pulmonologist', 'Chest pain, cough, fever, difficulty breathing'),
('Hepatitis B', 'Gastroenterologist', 'Jaundice, fatigue, abdominal pain, dark urine'),
('Lyme Disease', 'Infectious Disease Specialist', 'Fever, headache, fatigue, skin rash'),
('Ebola', 'Infectious Disease Specialist', 'Fever, severe headache, muscle pain, vomiting'),
('Zika Virus', 'Infectious Disease Specialist', 'Fever, rash, joint pain, red eyes'),
('Cholera', 'Infectious Disease Specialist', 'Severe diarrhea, dehydration, muscle cramps'),
('Dengue Fever', 'Infectious Disease Specialist', 'High fever, severe headache, pain behind eyes, joint pain'),
('Rabies', 'Infectious Disease Specialist', 'Fever, headache, excess salivation, muscle spasms'),
('Measles', 'Pediatrician', 'Fever, cough, runny nose, inflamed eyes'),
('Tetanus', 'General Practitioner', 'Jaw cramping, muscle stiffness, difficulty swallowing'),
('Meningitis', 'Neurologist', 'Severe headache, stiff neck, fever, nausea'),
('Polio', 'Neurologist', 'Fatigue, fever, muscle weakness, paralysis'),
('Leprosy', 'Dermatologist', 'Skin lesions, muscle weakness, numbness, eye problems'),
('Syphilis', 'Dermatologist', 'Sores, skin rash, mucous membrane lesions, swollen lymph nodes');


-- Insert additional data into the disease table
INSERT INTO disease (disease_name, preferred_specialized, symptom)
VALUES
('Smallpox', 'Infectious Disease Specialist', 'Fever, rash, body aches, vomiting'),
('Anthrax', 'Infectious Disease Specialist', 'Fever, chills, shortness of breath, chest discomfort'),
('E. Coli Infection', 'Gastroenterologist', 'Severe stomach cramps, diarrhea, vomiting'),
('Salmonella Infection', 'Gastroenterologist', 'Fever, diarrhea, stomach cramps'),
('Norovirus', 'Gastroenterologist', 'Nausea, vomiting, diarrhea, stomach pain'),
('Legionnaires’ Disease', 'Pulmonologist', 'Cough, shortness of breath, fever, muscle aches'),
('Cystic Fibrosis', 'Pulmonologist', 'Persistent cough, frequent lung infections, wheezing'),
('Celiac Disease', 'Gastroenterologist', 'Diarrhea, bloating, gas, fatigue'),
('Crohn’s Disease', 'Gastroenterologist', 'Abdominal pain, diarrhea, weight loss, fatigue'),
('Ulcerative Colitis', 'Gastroenterologist', 'Abdominal pain, diarrhea, rectal bleeding, fatigue'),
('Parkinson’s Disease', 'Neurologist', 'Tremor, slowed movement, muscle stiffness, balance problems'),
('Alzheimer’s Disease', 'Neurologist', 'Memory loss, confusion, difficulty with language, mood changes'),
('Multiple Sclerosis', 'Neurologist', 'Numbness, tingling, muscle weakness, balance issues'),
('Lupus', 'Rheumatologist', 'Fatigue, joint pain, skin rashes, fever'),
('Rheumatoid Arthritis', 'Rheumatologist', 'Joint pain, swelling, stiffness, fatigue'),
('Psoriasis', 'Dermatologist', 'Red patches of skin, scaling, itching, burning'),
('Dermatitis', 'Dermatologist', 'Red rash, itching, swelling, blisters'),
('Osteoporosis', 'Endocrinologist', 'Bone fractures, loss of height, back pain'),
('Gout', 'Rheumatologist', 'Severe pain, redness, and swelling in joints, often the big toe'),
('Hemophilia', 'Hematologist', 'Excessive bleeding, easy bruising, joint pain'),
('Sickle Cell Disease', 'Hematologist', 'Anemia, pain crises, swelling in hands and feet'),
('Thalassemia', 'Hematologist', 'Fatigue, weakness, pale or yellowish skin, slow growth in children'),
('Hypothyroidism', 'Endocrinologist', 'Fatigue, weight gain, cold intolerance, depression'),
('Hyperthyroidism', 'Endocrinologist', 'Weight loss, rapid heartbeat, sweating, nervousness'),
('Addison’s Disease', 'Endocrinologist', 'Fatigue, muscle weakness, weight loss, low blood pressure'),
('Cushing’s Syndrome', 'Endocrinologist', 'Weight gain, thinning skin, easy bruising, high blood pressure'),
('ALS (Amyotrophic Lateral Sclerosis)', 'Neurologist', 'Muscle weakness, difficulty speaking, difficulty swallowing, muscle cramps'),
('Huntington’s Disease', 'Neurologist', 'Movement disorders, cognitive decline, psychiatric disorders'),
('Prostate Cancer', 'Oncologist', 'Difficulty urinating, blood in urine, pelvic discomfort'),
('Breast Cancer', 'Oncologist', 'Lump in breast, change in breast shape, skin changes on breast'),
('Lung Cancer', 'Oncologist', 'Persistent cough, chest pain, shortness of breath, coughing up blood'),
('Colorectal Cancer', 'Oncologist', 'Change in bowel habits, rectal bleeding, abdominal pain'),
('Skin Cancer', 'Dermatologist', 'New growths, sores that don’t heal, changes in moles'),
('Leukemia', 'Hematologist', 'Fatigue, frequent infections, easy bruising, weight loss'),
('Lymphoma', 'Hematologist', 'Swollen lymph nodes, fatigue, fever, night sweats'),
('Pancreatic Cancer', 'Oncologist', 'Abdominal pain, weight loss, jaundice, nausea'),
('Kidney Disease', 'Nephrologist', 'Fatigue, swelling in legs, changes in urination, high blood pressure');

-- Insert data related to genital diseases into the disease table
INSERT INTO disease (disease_name, preferred_specialized, symptom)
VALUES
('Chlamydia', 'Gynecologist/Urologist', 'Painful urination, lower abdominal pain, vaginal discharge, discharge from penis'),
('Gonorrhea', 'Gynecologist/Urologist', 'Painful urination, pus-like discharge from penis, increased vaginal discharge, vaginal bleeding between periods'),
('Genital Herpes', 'Gynecologist/Urologist', 'Pain, itching, small sores, ulcers, scabs'),
('Human Papillomavirus (HPV)', 'Gynecologist/Urologist', 'Warts on genitals, itching, discomfort, bleeding during intercourse'),
('Syphilis', 'Gynecologist/Urologist', 'Sores, skin rash, mucous membrane lesions, swollen lymph nodes'),
('Trichomoniasis', 'Gynecologist/Urologist', 'Foul-smelling vaginal discharge, genital itching, painful urination'),
('Bacterial Vaginosis', 'Gynecologist', 'Thin gray or white discharge, foul-smelling odor, vaginal itching, burning during urination'),
('Pelvic Inflammatory Disease (PID)', 'Gynecologist', 'Lower abdominal pain, fever, unusual discharge with a bad odor, painful intercourse, painful urination'),
('Genital Warts', 'Gynecologist/Urologist', 'Small, flesh-colored or gray swellings in genital area, itching, discomfort, bleeding during intercourse'),
('HIV/AIDS', 'Infectious Disease Specialist', 'Fever, chills, rash, night sweats, swollen lymph nodes, rapid weight loss'),
('Candidiasis (Yeast Infection)', 'Gynecologist', 'Itching, irritation, swelling, thick white discharge'),
('Molluscum Contagiosum', 'Dermatologist', 'Small, raised, flesh-colored lesions, itching, irritation'),
('Pubic Lice (Crabs)', 'Dermatologist', 'Intense itching, visible lice or eggs in pubic hair'),
('Urethritis', 'Urologist', 'Painful urination, discharge from penis or vagina, itching, irritation'),
('Cervicitis', 'Gynecologist', 'Grayish or yellow discharge, pelvic pain, painful intercourse, bleeding between periods'),
('Prostatitis', 'Urologist', 'Painful urination, pain in groin, pelvic area, or genitals, flu-like symptoms'),
('Epididymitis', 'Urologist', 'Pain and swelling in the testicles, painful urination, discharge from penis'),
('Orchitis', 'Urologist', 'Swelling in one or both testicles, pain, fever, nausea'),
('Testicular Torsion', 'Urologist', 'Sudden severe pain in the scrotum, swelling, abdominal pain, nausea'),
('Vulvodynia', 'Gynecologist', 'Chronic pain in the vulva, burning, stinging, irritation, rawness');


-- Insert data related to diseases affecting girls and women into the disease table
INSERT INTO disease (disease_name, preferred_specialized, symptom)
VALUES
('Polycystic Ovary Syndrome (PCOS)', 'Gynecologist', 'Irregular periods, excess androgen, polycystic ovaries, weight gain'),
('Endometriosis', 'Gynecologist', 'Pelvic pain, painful periods, pain with intercourse, infertility'),
('Cervical Cancer', 'Gynecologist/Oncologist', 'Vaginal bleeding, pelvic pain, pain during intercourse, abnormal discharge'),
('Ovarian Cancer', 'Gynecologist/Oncologist', 'Abdominal bloating, pelvic pain, difficulty eating, frequent urination'),
('Pelvic Inflammatory Disease (PID)', 'Gynecologist', 'Lower abdominal pain, fever, unusual discharge, painful intercourse'),
('Menstrual Disorders', 'Gynecologist', 'Irregular periods, heavy bleeding, severe cramps, PMS symptoms'),
('Uterine Fibroids', 'Gynecologist', 'Heavy menstrual bleeding, prolonged periods, pelvic pain, frequent urination'),
('Vaginitis', 'Gynecologist', 'Vaginal itching, discharge, odor, discomfort during intercourse'),
('Breast Cancer', 'Oncologist', 'Lump in breast, change in size or shape, skin changes, nipple discharge'),
('Urinary Tract Infection (UTI)', 'Gynecologist/Urologist', 'Frequent urination, burning sensation, cloudy urine, pelvic pain'),
('Human Papillomavirus (HPV)', 'Gynecologist', 'Genital warts, abnormal Pap smears, increased risk of cervical cancer'),
('Bacterial Vaginosis', 'Gynecologist', 'Thin gray discharge, fishy odor, itching, burning during urination'),
('Yeast Infection', 'Gynecologist', 'Itching, thick white discharge, redness, swelling of the vulva'),
('Preeclampsia', 'Obstetrician/Gynecologist', 'High blood pressure, protein in urine, swelling, severe headaches'),
('Gestational Diabetes', 'Obstetrician/Gynecologist', 'High blood sugar during pregnancy, increased thirst, frequent urination'),
('Hyperemesis Gravidarum', 'Obstetrician/Gynecologist', 'Severe nausea, vomiting, weight loss, dehydration'),
('Postpartum Depression', 'Psychiatrist', 'Depressed mood, severe mood swings, excessive crying, difficulty bonding with baby'),
('Menopause', 'Gynecologist', 'Hot flashes, night sweats, mood changes, vaginal dryness'),
('Osteoporosis', 'Endocrinologist', 'Bone fractures, loss of height, back pain, brittle bones');


-- Insert additional common diseases into the disease table
INSERT INTO disease (disease_name, preferred_specialized, symptom)
VALUES
('Anemia', 'Hematologist', 'Fatigue, weakness, pale skin, shortness of breath'),
('Bronchitis', 'Pulmonologist', 'Cough, production of mucus, fatigue, shortness of breath'),
('Gallstones', 'Gastroenterologist', 'Sudden and rapidly intensifying pain in the upper right portion of your abdomen, back pain, nausea'),
('Gastritis', 'Gastroenterologist', 'Upper abdominal pain, nausea, vomiting, bloating'),
('Kidney Stones', 'Urologist', 'Severe pain in the side and back, pain during urination, pink or brown urine, nausea'),
('Osteoarthritis', 'Rheumatologist', 'Joint pain, stiffness, tenderness, loss of flexibility'),
('Peptic Ulcer', 'Gastroenterologist', 'Burning stomach pain, bloating, heartburn, nausea'),
('Sinusitis', 'ENT Specialist', 'Facial pain, nasal congestion, headache, fever'),
('Urinary Tract Infection (UTI)', 'Urologist', 'Strong urge to urinate, burning sensation when urinating, cloudy urine, pelvic pain'),
('Varicose Veins', 'Vascular Surgeon', 'Swollen, twisted veins, aching pain, heaviness in legs'),
('Vertigo', 'ENT Specialist/Neurologist', 'Spinning sensation, dizziness, balance problems, nausea'),
('Tonsillitis', 'ENT Specialist', 'Sore throat, difficulty swallowing, red and swollen tonsils, fever'),
('Hypoglycemia', 'Endocrinologist', 'Shakiness, sweating, confusion, rapid heartbeat'),
('Hyperlipidemia', 'Cardiologist', 'Often no symptoms, but high cholesterol levels detected through blood tests'),
('Herniated Disc', 'Orthopedic Specialist', 'Arm or leg pain, numbness, tingling, muscle weakness'),
('Gout', 'Rheumatologist', 'Severe pain, redness, and swelling in joints, often the big toe'),
('Psoriatic Arthritis', 'Rheumatologist', 'Joint pain, stiffness, swelling, red patches of skin'),
('Chronic Fatigue Syndrome', 'General Practitioner', 'Extreme fatigue, memory problems, muscle pain, headaches'),
('Irritable Bowel Syndrome (IBS)', 'Gastroenterologist', 'Abdominal pain, cramping, bloating, gas, diarrhea, or constipation'),
('Celiac Disease', 'Gastroenterologist', 'Diarrhea, bloating, gas, fatigue, anemia, and osteoporosis'),
('Hives', 'Dermatologist', 'Red, itchy welts on the skin, swelling'),
('Hypersensitivity Pneumonitis', 'Pulmonologist', 'Cough, shortness of breath, fatigue, chills'),
('Mononucleosis', 'General Practitioner', 'Fatigue, fever, sore throat, swollen lymph nodes, swollen spleen'),
('Bell’s Palsy', 'Neurologist', 'Sudden weakness or paralysis on one side of the face, drooping mouth, drooling, loss of taste');


-- Viral Fever
INSERT INTO disease (disease_name, symptom, preferred_specialized) VALUES 
('Viral Fever', 'High fever, body aches, headache, fatigue, chills', 'Infectious Disease Specialist');

-- Cardiac Diseases
INSERT INTO disease (disease_name, symptom, preferred_specialized) VALUES 
('Coronary Artery Disease', 'Chest pain, shortness of breath, fatigue, heart attack', 'Cardiologist'),
('Hypertension', 'High blood pressure, headaches, dizziness, shortness of breath', 'Cardiologist'),
('Congestive Heart Failure', 'Shortness of breath, swelling in legs, rapid heartbeat, fatigue', 'Cardiologist');

-- Kidney Diseases
INSERT INTO disease (disease_name, symptom, preferred_specialized) VALUES 
('Chronic Kidney Disease', 'Fatigue, swollen ankles, frequent urination, shortness of breath', 'Nephrologist'),
('Kidney Stones', 'Severe pain in side and back, pain during urination, nausea', 'Urologist'),
('Acute Kidney Injury', 'Decreased urine output, fluid retention, confusion, fatigue', 'Nephrologist');

-- Brain Diseases
INSERT INTO disease (disease_name, symptom, preferred_specialized) VALUES 
('Stroke', 'Sudden numbness or weakness, confusion, trouble speaking, severe headache', 'Neurologist'),
('Alzheimer Disease', 'Memory loss, confusion, difficulty completing familiar tasks, mood changes', 'Neurologist'),
('Parkinson Disease', 'Tremors, stiffness, slow movement, balance problems', 'Neurologist');

-- Eye Diseases
INSERT INTO disease (disease_name, symptom, preferred_specialized) VALUES 
('Cataract', 'Blurred vision, difficulty seeing at night, sensitivity to light, fading colors', 'Ophthalmologist'),
('Glaucoma', 'Loss of peripheral vision, halos around lights, eye pain, nausea', 'Ophthalmologist'),
('Age-related Macular Degeneration', 'Blurred vision, difficulty recognizing faces, need for brighter light', 'Ophthalmologist');
