INSERT INTO disease (disease_name, preferred_specialized) VALUES
-- Cardiovascular System
('Coronary Artery Disease', 'Cardiologist'),
('Congestive Heart Failure', 'Cardiologist'),
('Hypertension', 'Cardiologist'),

-- Respiratory System
('Asthma', 'Pulmonologist'),
('Chronic Obstructive Pulmonary Disease (COPD)', 'Pulmonologist'),
('Pneumonia', 'Pulmonologist'),

-- Digestive System
('Gastroesophageal Reflux Disease (GERD)', 'Gastroenterologist'),
('Irritable Bowel Syndrome (IBS)', 'Gastroenterologist'),
('Ulcerative Colitis', 'Gastroenterologist'),

-- Nervous System
('Alzheimer Disease', 'Neurologist'),
('Parkinsons Disease', 'Neurologist'),
('Multiple Sclerosis', 'Neurologist'),

-- Musculoskeletal System
('Osteoarthritis', 'Orthopedic Specialist'),
('Rheumatoid Arthritis', 'Rheumatologist'),
('Osteoporosis', 'Rheumatologist'),

-- Endocrine System
('Diabetes Mellitus', 'Endocrinologist'),
('Hyperthyroidism', 'Endocrinologist'),
('Hypothyroidism', 'Endocrinologist'),

-- Urinary System
('Chronic Kidney Disease', 'Nephrologist'),
('Urinary Tract Infection (UTI)', 'Urologist'),
('Kidney Stones', 'Urologist'),

-- Dermatology (Skin)
('Psoriasis', 'Dermatologist'),
('Eczema (Atopic Dermatitis)', 'Dermatologist'),
('Acne', 'Dermatologist'),

-- Reproductive System (Male)
('Prostate Cancer', 'Urologist'),
('Erectile Dysfunction', 'Urologist'),
('Testicular Cancer', 'Urologist'),

-- Reproductive System (Female)
('Polycystic Ovary Syndrome (PCOS)', 'Gynecologist'),
('Endometriosis', 'Gynecologist'),
('Breast Cancer', 'Oncologist'),

-- Others
('Deep Vein Thrombosis (DVT)', 'Vascular Surgeon'),
('Hearing Loss', 'ENT Specialist'),
('Sinusitis', 'ENT Specialist');



INSERT INTO symptom (body_part, body_symptom, duration) VALUES
-- Coronary Artery Disease
('Heart', 'Chest pain or discomfort (angina)', 'Often during physical exertion'),
('Heart', 'Shortness of breath', 'Persistent'),
('Heart', 'Fatigue', 'Persistent or after activities'),

-- Congestive Heart Failure
('Heart', 'Swelling in the legs, ankles, or feet (edema)', 'Persistent or progressive'),
('Heart', 'Shortness of breath, especially when lying down', 'Persistent'),
('Heart', 'Fatigue and weakness', 'Persistent'),

-- Hypertension
('Head', 'Headaches', 'Persistent or occasional'),
('Eyes', 'Blurred vision', 'Intermittent or persistent'),
('Heart', 'Chest pain', 'Intermittent or persistent');




INSERT INTO symptom (body_part, body_symptom, duration) VALUES
-- Asthma
('Lungs', 'Wheezing', 'Intermittent or during an asthma attack'),
('Lungs', 'Shortness of breath', 'Intermittent or persistent'),
('Lungs', 'Chest tightness or pain', 'Intermittent or during an asthma attack'),

-- Chronic Obstructive Pulmonary Disease (COPD)
('Lungs', 'Chronic cough with mucus', 'Persistent'),
('Lungs', 'Shortness of breath, especially during physical activities', 'Persistent and progressive'),
('Lungs', 'Frequent respiratory infections', 'Recurrent'),

-- Pneumonia
('Lungs', 'Chest pain when breathing or coughing', 'Persistent'),
('Lungs', 'Fever, sweating, and chills', 'Acute'),
('Lungs', 'Shortness of breath', 'Acute or persistent');




INSERT INTO symptom (body_part, body_symptom, duration) VALUES
-- Gastroesophageal Reflux Disease (GERD)
('Esophagus', 'Heartburn', 'Frequent, especially after eating'),
('Throat', 'Regurgitation of food or sour liquid', 'Frequent'),
('Chest', 'Chest pain', 'Intermittent, often after eating'),

-- Irritable Bowel Syndrome (IBS)
('Abdomen', 'Abdominal pain or cramping', 'Intermittent, often relieved by bowel movements'),
('Bowel', 'Bloating', 'Frequent'),
('Bowel', 'Diarrhea or constipation', 'Intermittent or alternating'),

-- Ulcerative Colitis
('Colon', 'Diarrhea, often with blood or pus', 'Persistent or frequent'),
('Abdomen', 'Abdominal pain and cramping', 'Intermittent'),
('Bowel', 'Urgent need to defecate', 'Frequent and sudden');



INSERT INTO symptom (body_part, body_symptom, duration) VALUES
-- Alzheimer's Disease
('Brain', 'Memory loss', 'Progressive'),
('Brain', 'Difficulty in completing familiar tasks', 'Progressive'),
('Brain', 'Confusion with time or place', 'Progressive'),

-- Parkinson's Disease
('Brain', 'Tremor, especially in hands', 'Persistent and progressive'),
('Muscles', 'Bradykinesia (slowed movement)', 'Progressive'),
('Muscles', 'Muscle stiffness or rigidity', 'Persistent and progressive'),

-- Multiple Sclerosis
('Nerves', 'Numbness or weakness in limbs', 'Intermittent or persistent'),
('Vision', 'Partial or complete loss of vision', 'Intermittent or sudden onset'),
('Muscles', 'Tingling or pain in parts of the body', 'Intermittent');



INSERT INTO symptom (body_part, body_symptom, duration) VALUES
-- Osteoarthritis
('Joints', 'Joint pain', 'Chronic, worsens with activity'),
('Joints', 'Stiffness', 'Persistent, especially in the morning'),
('Joints', 'Reduced range of motion', 'Progressive'),

-- Rheumatoid Arthritis
('Joints', 'Joint pain and tenderness', 'Persistent, often symmetrical'),
('Joints', 'Joint stiffness', 'Persistent, especially in the morning or after inactivity'),
('Joints', 'Swelling and inflammation', 'Chronic and progressive'),

-- Osteoporosis
('Bones', 'Back pain', 'Persistent or intermittent'),
('Bones', 'Loss of height over time', 'Progressive'),
('Bones', 'Bone fractures', 'Frequent, especially with minor injuries'),

-- Diabetes Mellitus
('Body', 'Increased thirst and frequent urination', 'Persistent'),
('Body', 'Unexplained weight loss', 'Progressive'),
('Body', 'Fatigue', 'Chronic'),

-- Hyperthyroidism
('Body', 'Weight loss despite increased appetite', 'Persistent'),
('Heart', 'Rapid heartbeat (tachycardia)', 'Persistent'),
('Body', 'Increased sweating and heat intolerance', 'Persistent'),

-- Hypothyroidism
('Body', 'Fatigue', 'Persistent'),
('Body', 'Weight gain', 'Progressive'),
('Skin', 'Dry skin', 'Persistent'),

-- Chronic Kidney Disease
('Body', 'Fatigue', 'Persistent and progressive'),
('Body', 'Swelling in ankles and feet', 'Progressive'),
('Body', 'Changes in urination frequency', 'Persistent'),

-- Urinary Tract Infection (UTI)
('Urinary tract', 'Burning sensation during urination', 'Acute'),
('Urinary tract', 'Frequent and urgent need to urinate', 'Acute'),
('Urinary tract', 'Cloudy or strong-smelling urine', 'Acute'),

-- Kidney Stones
('Kidneys', 'Severe pain in the side and back', 'Sudden onset, intermittent'),
('Urinary tract', 'Pain during urination', 'Intermittent'),
('Urinary tract', 'Pink, red, or brown urine', 'Intermittent'),

-- Psoriasis
('Skin', 'Red patches of skin covered with thick, silvery scales', 'Persistent'),
('Skin', 'Dry, cracked skin that may bleed', 'Persistent'),
('Skin', 'Itching, burning, or soreness', 'Intermittent'),

-- Eczema (Atopic Dermatitis)
('Skin', 'Dry skin', 'Persistent'),
('Skin', 'Itching, which may be severe', 'Persistent or intermittent'),
('Skin', 'Red to brownish-gray patches', 'Persistent'),

-- Acne
('Skin', 'Pimples, blackheads, or whiteheads', 'Persistent'),
('Skin', 'Inflamed or swollen spots', 'Intermittent'),
('Skin', 'Scarring', 'Chronic'),

-- Prostate Cancer
('Prostate', 'Difficulty urinating', 'Progressive'),
('Body', 'Blood in urine or semen', 'Intermittent'),
('Body', 'Bone pain', 'Chronic'),

-- Erectile Dysfunction
('Body', 'Inability to achieve or maintain an erection', 'Persistent'),
('Body', 'Reduced sexual desire', 'Persistent'),
('Body', 'Anxiety or stress', 'Intermittent'),

-- Testicular Cancer
('Testicles', 'Lump or swelling in the testicle', 'Persistent'),
('Body', 'Discomfort or pain in the scrotum', 'Persistent'),
('Body', 'Back pain', 'Persistent'),

-- Polycystic Ovary Syndrome (PCOS)
('Ovaries', 'Irregular menstrual cycles', 'Persistent'),
('Body', 'Excess hair growth (hirsutism)', 'Persistent'),
('Body', 'Weight gain', 'Progressive'),

-- Endometriosis
('Pelvis', 'Pelvic pain, especially during menstruation', 'Persistent'),
('Body', 'Pain during intercourse', 'Intermittent'),
('Body', 'Heavy menstrual bleeding', 'Persistent'),

-- Breast Cancer
('Breast', 'Lump in the breast or underarm', 'Persistent'),
('Breast', 'Changes in the size or shape of the breast', 'Progressive'),
('Breast', 'Nipple discharge', 'Persistent');


INSERT INTO symptom (body_part, body_symptom, duration) VALUES
-- Deep Vein Thrombosis (DVT)
('Legs', 'Swelling in the affected leg', 'Persistent'),
('Legs', 'Pain or tenderness, often starting in the calf', 'Persistent'),
('Legs', 'Red or discolored skin', 'Persistent'),

-- Hearing Loss
('Ears', 'Difficulty hearing conversations, especially in noisy environments', 'Persistent'),
('Ears', 'Muffled hearing', 'Persistent'),
('Ears', 'Ringing in the ears (tinnitus)', 'Persistent or intermittent'),

-- Sinusitis
('Sinuses', 'Facial pain or pressure', 'Persistent or intermittent'),
('Sinuses', 'Nasal congestion or blockage', 'Persistent'),
('Sinuses', 'Thick nasal discharge (often yellow or green)', 'Persistent');



INSERT INTO disease_symptom (disease_id, symptom_id) VALUES
-- Coronary Artery Disease
(1, 1),  -- Chest pain (angina)
(1, 2),  -- Shortness of breath
(1, 3),  -- Fatigue

-- Congestive Heart Failure
(2, 4),  -- Shortness of breath
(2, 5),  -- Swelling in the legs, ankles, or feet (edema)
(2, 6),  -- Fatigue and weakness

-- Hypertension
(3, 7),  -- Headaches
(3, 8),  -- Shortness of breath
(3, 9),  -- Nosebleeds

-- Asthma
(4, 10), -- Wheezing
(4, 11), -- Shortness of breath
(4, 12), -- Chest tightness or pain

-- Chronic Obstructive Pulmonary Disease (COPD)
(5, 13), -- Chronic cough
(5, 14), -- Shortness of breath, especially during physical activities
(5, 15); -- Frequent respiratory infections


INSERT INTO disease_symptom (disease_id, symptom_id) VALUES
-- Pneumonia
(6, 16), -- Cough with phlegm
(6, 17), -- High fever
(6, 18), -- Shortness of breath

-- Gastroesophageal Reflux Disease (GERD)
(7, 19), -- Heartburn
(7, 20), -- Regurgitation of food or sour liquid
(7, 21), -- Chest pain

-- Irritable Bowel Syndrome (IBS)
(8, 22), -- Abdominal pain or cramping
(8, 23), -- Bloating
(8, 24), -- Diarrhea or constipation

-- Ulcerative Colitis
(9, 25), -- Abdominal pain
(9, 26), -- Diarrhea with blood or pus
(9, 27), -- Urgent need to have a bowel movement

-- Alzheimer's Disease
(10, 28), -- Memory loss
(10, 29), -- Confusion with time or place
(10, 30); -- Difficulty completing familiar tasks


INSERT INTO disease_symptom (disease_id, symptom_id) VALUES
-- Parkinson's Disease
(11, 31), -- Tremors or shaking
(11, 32), -- Stiffness or rigidity in limbs
(11, 33), -- Slowness of movement

-- Multiple Sclerosis
(12, 34), -- Fatigue
(12, 35), -- Difficulty walking or balance problems
(12, 36), -- Numbness or tingling in limbs

-- Osteoarthritis
(13, 37), -- Joint pain
(13, 38), -- Stiffness, especially in the morning
(13, 39), -- Swelling in the affected joints

-- Rheumatoid Arthritis
(14, 40), -- Joint pain and swelling
(14, 41), -- Morning stiffness lasting more than an hour
(14, 42), -- Fatigue

-- Osteoporosis
(15, 43), -- Back pain due to fractured vertebrae
(15, 44), -- Loss of height over time
(15, 45), -- Stooped posture

-- Diabetes Mellitus
(16, 46), -- Increased thirst
(16, 47), -- Frequent urination
(16, 48), -- Fatigue

-- Hyperthyroidism
(17, 49), -- Unexplained weight loss
(17, 50), -- Rapid heartbeat or palpitations
(17, 51), -- Sweating

-- Hypothyroidism
(18, 52), -- Fatigue
(18, 53), -- Weight gain
(18, 54), -- Cold intolerance

-- Chronic Kidney Disease
(19, 55), -- Swelling in the legs or ankles
(19, 56), -- Fatigue
(19, 57), -- Changes in urine output

-- Urinary Tract Infection (UTI)
(20, 58), -- Painful urination
(20, 59), -- Frequent urge to urinate
(20, 60), -- Cloudy or strong-smelling urine

-- Kidney Stones
(21, 61), -- Severe pain in the back or side
(21, 62), -- Painful urination
(21, 63), -- Nausea or vomiting

-- Psoriasis
(22, 64), -- Red patches of skin covered with thick, silvery scales
(22, 65), -- Dry, cracked skin that may bleed
(22, 66), -- Itching or soreness

-- Eczema (Atopic Dermatitis)
(23, 67), -- Itchy, red rash
(23, 68), -- Dry, scaly skin
(23, 69), -- Thickened skin from scratching

-- Acne
(24, 70), -- Pimples or zits
(24, 71), -- Blackheads or whiteheads
(24, 72), -- Oily skin

-- Prostate Cancer
(25, 73), -- Difficulty urinating
(25, 74), -- Painful ejaculation
(25, 75), -- Blood in urine or semen

-- Erectile Dysfunction
(26, 76), -- Difficulty achieving or maintaining an erection
(26, 77), -- Reduced sexual desire
(26, 78), -- Premature ejaculation

-- Testicular Cancer
(27, 79), -- Lump or swelling in the testicle
(27, 80), -- Pain or discomfort in the testicle
(27, 81), -- A feeling of heaviness in the scrotum

-- Polycystic Ovary Syndrome (PCOS)
(28, 82), -- Irregular menstrual periods
(28, 83), -- Excessive hair growth
(28, 84), -- Acne

-- Endometriosis
(29, 85), -- Painful periods
(29, 86), -- Pain during intercourse
(29, 87), -- Pain with bowel movements or urination

-- Breast Cancer
(30, 88), -- Lump or mass in the breast
(30, 89), -- Changes in breast size or shape
(30, 90); -- Nipple discharge

INSERT INTO disease_symptom (disease_id, symptom_id) VALUES
-- Deep Vein Thrombosis (DVT)
(31, 91), -- Swelling in one leg
(31, 92), -- Pain or tenderness in the leg
(31, 93), -- Warmth or redness in the affected area

-- Hearing Loss
(32, 94), -- Difficulty understanding conversations
(32, 95), -- Ringing or buzzing in the ears
(32, 96), -- Need to turn up the volume on TV or radio

-- Sinusitis
(33, 97), -- Facial pain or pressure
(33, 98), -- Nasal congestion
(33, 99); -- Thick nasal discharge