-- Data for the doctors table ensuring every hospital has doctors for each specified specialty
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
-- Hospital 1
('Dr. Liam Smith', 'MBBS, MD', 'ENT Specialist', 'medicine', '1566778899', 41),
('Dr. Emily Johnson', 'MBBS, MCh', 'Urologist', 'surgery', '6677889900', 41),
('Dr. James Brown', 'MBBS, MD', 'Oncologist', 'medicine', '7788990011', 41),
('Dr. Charlotte Jones', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '8899001122', 41),
('Dr. Benjamin Garcia', 'MBBS, MS', 'Gynecologist/Urologist', 'surgery', '9900112233', 41),
('Dr. Amelia Miller', 'MBBS, DM', 'Nephrologist', 'medicine', '001122333', 41),
('Dr. Mason Davis', 'MBBS, DM', 'Neurologist', 'medicine', '112233315', 41),
('Dr. Ava Martinez', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '223331566', 41),
('Dr. Ethan Rodriguez', 'MBBS, MD', 'Psychiatrist', 'medicine', '333156677', 41),
('Dr. Mia Hernandez', 'MBBS, MD', 'Hematologist', 'medicine', '315667788', 41),
('Dr. Jackson Lopez', 'MBBS', 'General Practitioner', 'medicine', '1566778899', 41),
('Dr. Isabella Gonzalez', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '6677889900', 41),
('Dr. Noah Wilson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '7788990011', 41),
('Dr. Sophia Lee', 'MBBS, MD', 'Endocrinologist', 'medicine', '8899001122', 41),
('Dr. Lucas King', 'MBBS, MS', 'Gynecologist', 'surgery', '9900112233', 41),
('Dr. Harper Clark', 'MBBS, DM', 'Cardiologist', 'medicine', '001122333', 41),
('Dr. Jack Harris', 'MBBS, MS', 'Ophthalmologist', 'surgery', '112233315', 41),
('Dr. Amelia Robinson', 'MBBS, MS', 'ENT Specialist/Neurologist', 'medicine', '223331566', 41),
('Dr. Ethan Lewis', 'MBBS, MD', 'Pediatrician', 'medicine', '333156677', 41),
('Dr. Olivia Young', 'MBBS, MD', 'Infectious Disease Specialist', 'medicine', '315667788', 41),
('Dr. Logan Scott', 'MBBS, DM', 'Gastroenterologist', 'medicine', '1566778899', 41),
('Dr. Emily Adams', 'MBBS, MD', 'Pulmonologist', 'medicine', '6677889900', 41),
('Dr. Mason King', 'MBBS, DM', 'Rheumatologist', 'medicine', '7788990011', 41),
('Dr. Ella Anderson', 'MBBS, MD', 'Dermatologist', 'medicine', '8899001122', 41);

-- Repeat the same structure for hospitals 2 to 25
-- Example for Hospital 2
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. William Clark', 'MBBS, MD', 'ENT Specialist', 'medicine', '1566778800', 42),
('Dr. Emily Carter', 'MBBS, MCh', 'Urologist', 'surgery', '6677889810', 42),
('Dr. James Mitchell', 'MBBS, MD', 'Oncologist', 'medicine', '7788990910', 42),
('Dr. Charlotte Murphy', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '8899001210', 42),
('Dr. Benjamin Hughes', 'MBBS, MS', 'Gynecologist/Urologist', 'surgery', '990011210', 42),
('Dr. Amelia Sanders', 'MBBS, DM', 'Nephrologist', 'medicine', '001122310', 42),
('Dr. Mason Powell', 'MBBS, DM', 'Neurologist', 'medicine', '112233110', 42),
('Dr. Ava Russell', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '223335610', 42),
('Dr. Ethan Bryant', 'MBBS, MD', 'Psychiatrist', 'medicine', '333156710', 42),
('Dr. Mia Cooper', 'MBBS, MD', 'Hematologist', 'medicine', '315667810', 42),
('Dr. Jackson Ward', 'MBBS', 'General Practitioner', 'medicine', '1566778810', 42),
('Dr. Isabella Perez', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '6677889811', 42),
('Dr. Noah Howard', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '7788990911', 42),
('Dr. Sophia Turner', 'MBBS, MD', 'Endocrinologist', 'medicine', '8899001211', 42),
('Dr. Lucas Collins', 'MBBS, MS', 'Gynecologist', 'surgery', '990011211', 42),
('Dr. Harper Phillips', 'MBBS, DM', 'Cardiologist', 'medicine', '001122311', 42),
('Dr. Jack Wood', 'MBBS, MS', 'Ophthalmologist', 'surgery', '112233511', 42),
('Dr. Amelia Richardson', 'MBBS, MS', 'ENT Specialist/Neurologist', 'medicine', '223335611', 42),
('Dr. Ethan Wright', 'MBBS, MD', 'Pediatrician', 'medicine', '333156711', 42),
('Dr. Olivia Green', 'MBBS, MD', 'Infectious Disease Specialist', 'medicine', '315667811', 42),
('Dr. Logan Baker', 'MBBS, DM', 'Gastroenterologist', 'medicine', '1566778811', 42),
('Dr. Emily Parker', 'MBBS, MD', 'Pulmonologist', 'medicine', '6677889812', 42),
('Dr. Mason Young', 'MBBS, DM', 'Rheumatologist', 'medicine', '7788990912', 42),
('Dr. Ella Foster', 'MBBS, MD', 'Dermatologist', 'medicine', '8899001212', 42);

-- Data for Hospital 4
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Lucas Rivera', 'MBBS, MS', 'Gynecologist', 'surgery', '990011214', 43),
('Dr. Harper Reed', 'MBBS, DM', 'Cardiologist', 'medicine', '001122314', 43),
('Dr. Jack Coleman', 'MBBS, MS', 'Ophthalmologist', 'surgery', '112233514', 43),
('Dr. Amelia Ward', 'MBBS, MS', 'ENT Specialist/Neurologist', 'medicine', '223335614', 43),
('Dr. Ethan Richardson', 'MBBS, MD', 'Pediatrician', 'medicine', '333156714', 43),
('Dr. Olivia Green', 'MBBS, MD', 'Infectious Disease Specialist', 'medicine', '315667814', 43),
('Dr. Logan Baker', 'MBBS, DM', 'Gastroenterologist', 'medicine', '1566778814', 43),
('Dr. Emily Parker', 'MBBS, MD', 'Pulmonologist', 'medicine', '6677889814', 43),
('Dr. Mason Young', 'MBBS, DM', 'Rheumatologist', 'medicine', '7788990914', 43),
('Dr. Ella Foster', 'MBBS, MD', 'Dermatologist', 'medicine', '8899001214', 43),
('Dr. William Clark', 'MBBS, MD', 'ENT Specialist', 'medicine', '1566778800', 43),
('Dr. Emily Carter', 'MBBS, MCh', 'Urologist', 'surgery', '6677889810', 43),
('Dr. James Mitchell', 'MBBS, MD', 'Oncologist', 'medicine', '7788990910', 43),
('Dr. Charlotte Murphy', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '8899001210', 43),
('Dr. Benjamin Hughes', 'MBBS, MS', 'Gynecologist/Urologist', 'surgery', '990011210', 43),
('Dr. Amelia Sanders', 'MBBS, DM', 'Nephrologist', 'medicine', '001122310', 43),
('Dr. Mason Powell', 'MBBS, DM', 'Neurologist', 'medicine', '112233110', 43),
('Dr. Ava Russell', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '223335610', 43),
('Dr. Ethan Bryant', 'MBBS, MD', 'Psychiatrist', 'medicine', '333156710', 43),
('Dr. Mia Cooper', 'MBBS, MD', 'Hematologist', 'medicine', '315667810', 43),
('Dr. Jackson Ward', 'MBBS', 'General Practitioner', 'medicine', '1566778810', 43),
('Dr. Isabella Perez', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '6677889811', 43),
('Dr. Noah Howard', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '7788990911', 43),
('Dr. Sophia Turner', 'MBBS, MD', 'Endocrinologist', 'medicine', '8899001211', 43);


-- Data for Hospital 3
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Olivia Moore', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112400', 44),
('Dr. Ethan Davis', 'MBBS, DM', 'Urologist', 'medicine', '0011223400', 44),
('Dr. Sophia Wilson', 'MBBS, MD', 'Oncologist', 'medicine', '112233100', 44),
('Dr. Noah Anderson', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335600', 44),
('Dr. Isabella Martinez', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156700', 44),
('Dr. Mason Garcia', 'MBBS, DM', 'Nephrologist', 'medicine', '315667800', 44),
('Dr. Ava Lopez', 'MBBS, DM', 'Neurologist', 'medicine', '1566778800', 44),
('Dr. Ethan Hernandez', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889800', 44),
('Dr. Mia Gonzalez', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990900', 44),
('Dr. Jackson Rodriguez', 'MBBS, MD', 'Hematologist', 'medicine', '8899001200', 44),
('Dr. Amelia Flores', 'MBBS', 'General Practitioner', 'medicine', '9900112401', 44),
('Dr. Benjamin Gomez', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223401', 44),
('Dr. Charlotte Perez', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '112233101', 44),
('Dr. William Sanchez', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335601', 44),
('Dr. Emily Rivera', 'MBBS, MS', 'Gynecologist', 'surgery', '333156701', 44),
('Dr. Harper Reed', 'MBBS, DM', 'Cardiologist', 'medicine', '315667801', 44),
('Dr. Jack Coleman', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778801', 44),
('Dr. Lucas Ward', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889801', 44),
('Dr. Amelia Richardson', 'MBBS, MD', 'Pediatrician', 'medicine', '7788990901', 44),
('Dr. Logan Green', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899001201', 44),
('Dr. Emily Baker', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112402', 44),
('Dr. Mason Parker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223402', 44),
('Dr. Ella Young', 'MBBS, DM', 'Rheumatologist', 'medicine', '112233102', 44),
('Dr. William Foster', 'MBBS, MD', 'Dermatologist', 'medicine', '223335602', 44);

-- Data for Hospital 5
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Olivia Turner', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112100', 5),
('Dr. Ethan Harris', 'MBBS, DM', 'Urologist', 'medicine', '0011223100', 5),
('Dr. Sophia King', 'MBBS, MD', 'Oncologist', 'medicine', '112233600', 5),
('Dr. Noah Wright', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335700', 5),
('Dr. Isabella Scott', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156800', 5),
('Dr. Mason Young', 'MBBS, DM', 'Nephrologist', 'medicine', '315667900', 5),
('Dr. Ava Robinson', 'MBBS, DM', 'Neurologist', 'medicine', '1566778900', 5),
('Dr. Ethan Moore', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889900', 5),
('Dr. Mia Clark', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990000', 5),
('Dr. Jackson Lewis', 'MBBS, MD', 'Hematologist', 'medicine', '8899001300', 5),
('Dr. Amelia Hill', 'MBBS', 'General Practitioner', 'medicine', '9900112101', 5),
('Dr. Benjamin Phillips', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223101', 5),
('Dr. Charlotte Davis', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '112233601', 5),
('Dr. William Martinez', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335701', 5),
('Dr. Emily Garcia', 'MBBS, MS', 'Gynecologist', 'surgery', '333156801', 5),
('Dr. Harper Martinez', 'MBBS, DM', 'Cardiologist', 'medicine', '315667901', 5),
('Dr. Jack Taylor', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778901', 5),
('Dr. Lucas White', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889901', 5),
('Dr. Amelia Harris', 'MBBS, MD', 'Pediatrician', 'medicine', '7788990001', 5),
('Dr. Logan Thompson', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899001301', 5),
('Dr. Emily Wilson', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112102', 5),
('Dr. Mason Allen', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223102', 5),
('Dr. Ella Wright', 'MBBS, DM', 'Rheumatologist', 'medicine', '112233602', 5),
('Dr. William Turner', 'MBBS, MD', 'Dermatologist', 'medicine', '223335702', 5);


-- Data for Hospital 6
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Olivia Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112600', 6),
('Dr. Ethan Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223600', 6),
('Dr. Sophia Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333700', 6),
('Dr. Noah Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335800', 6),
('Dr. Isabella Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156900', 6),
('Dr. Mason Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667100', 6),
('Dr. Ava Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778100', 6),
('Dr. Ethan Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889100', 6),
('Dr. Mia Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990200', 6),
('Dr. Jackson King', 'MBBS, MD', 'Hematologist', 'medicine', '8899001400', 6),
('Dr. Amelia Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112700', 6),
('Dr. Benjamin Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223700', 6),
('Dr. Charlotte Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333800', 6),
('Dr. William Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335900', 6),
('Dr. Emily Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156100', 6),
('Dr. Harper Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667200', 6),
('Dr. Jack Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778200', 6),
('Dr. Lucas Smith', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889300', 6),
('Dr. Amelia Turner', 'MBBS, MD', 'Pediatrician', 'medicine', '7788990400', 6),
('Dr. Logan Walker', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899001100', 6),
('Dr. Emily Young', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112800', 6),
('Dr. Mason Zimmerman', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223800', 6),
('Dr. Ella Adams', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333900', 6),
('Dr. William Baker', 'MBBS, MD', 'Dermatologist', 'medicine', '223336000', 6);


-- Data for Hospital 7
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Olivia Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112600', 7),
('Dr. Ethan Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223600', 7),
('Dr. Sophia Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333700', 7),
('Dr. Noah Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335800', 7),
('Dr. Isabella Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156900', 7),
('Dr. Mason Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667100', 7),
('Dr. Ava Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778100', 7),
('Dr. Ethan Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889100', 7),
('Dr. Mia Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990200', 7),
('Dr. Jackson King', 'MBBS, MD', 'Hematologist', 'medicine', '8899001400', 7),
('Dr. Amelia Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112700', 7),
('Dr. Benjamin Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223700', 7),
('Dr. Charlotte Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333800', 7),
('Dr. William Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335900', 7),
('Dr. Emily Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156100', 7),
('Dr. Harper Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667200', 7),
('Dr. Jack Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778200', 7),
('Dr. Lucas Smith', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889300', 7),
('Dr. Amelia Turner', 'MBBS, MD', 'Pediatrician', 'medicine', '7788990400', 7),
('Dr. Logan Walker', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899001100', 7),
('Dr. Emily Young', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112800', 7),
('Dr. Mason Zimmerman', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223800', 7),
('Dr. Ella Adams', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333900', 7),
('Dr. William Baker', 'MBBS, MD', 'Dermatologist', 'medicine', '223336000', 7);


-- Data for Hospital 8
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Ava Brown', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112611', 8),
('Dr. Benjamin Clark', 'MBBS, DM', 'Urologist', 'medicine', '0011223611', 8),
('Dr. Olivia Davis', 'MBBS, MD', 'Oncologist', 'medicine', '1122333711', 8),
('Dr. Ethan Evans', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335811', 8),
('Dr. Sophia Foster', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156911', 8),
('Dr. Jackson Gray', 'MBBS, DM', 'Nephrologist', 'medicine', '315667111', 8),
('Dr. Amelia Hill', 'MBBS, DM', 'Neurologist', 'medicine', '1566778111', 8),
('Dr. Noah Jackson', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889111', 8),
('Dr. Isabella King', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990211', 8),
('Dr. Mason Lee', 'MBBS, MD', 'Hematologist', 'medicine', '889900511', 8),
('Dr. Emily Moore', 'MBBS', 'General Practitioner', 'medicine', '9900112711', 8),
('Dr. William Nelson', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223711', 8),
('Dr. Charlotte Olson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333811', 8),
('Dr. Ethan Parker', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335911', 8),
('Dr. Mia Quinn', 'MBBS, MS', 'Gynecologist', 'surgery', '333156111', 8),
('Dr. Harper Robinson', 'MBBS, DM', 'Cardiologist', 'medicine', '315667211', 8),
('Dr. Jackson Smith', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778211', 8),
('Dr. Lucas Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889311', 8),
('Dr. Amelia Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899011', 8),
('Dr. Ethan Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899001511', 8),
('Dr. Mia Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112811', 8),
('Dr. William Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223811', 8),
('Dr. Emily Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333911', 8),
('Dr. Noah Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336011', 8);


-- Data for Hospital 9
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Benjamin Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112622', 9),
('Dr. Charlotte Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223622', 9),
('Dr. William Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333722', 9),
('Dr. Emily Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335822', 9),
('Dr. Noah Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156922', 9),
('Dr. Ava Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667122', 9),
('Dr. Ethan Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778122', 9),
('Dr. Olivia Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889122', 9),
('Dr. Jackson Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990222', 9),
('Dr. Isabella King', 'MBBS, MD', 'Hematologist', 'medicine', '889900122', 9),
('Dr. Mason Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112722', 9),
('Dr. Emily Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223722', 9),
('Dr. William Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333822', 9),
('Dr. Sophia Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335922', 9),
('Dr. Noah Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156122', 9),
('Dr. Amelia Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667222', 9),
('Dr. Lucas Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778222', 9),
('Dr. Mia Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889322', 9),
('Dr. Harper Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899022', 9),
('Dr. Jack Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005122', 9),
('Dr. Ella Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112822', 9),
('Dr. Benjamin Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223822', 9),
('Dr. Charlotte Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333922', 9),
('Dr. William Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336022', 9);



-- Data for Hospital 10
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Liam Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112623', 10),
('Dr. Sophia Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223623', 10),
('Dr. Oliver Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333723', 10),
('Dr. Amelia Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335823', 10),
('Dr. Noah Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156923', 10),
('Dr. Ava Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667123', 10),
('Dr. Ethan Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778123', 10),
('Dr. Olivia Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889123', 10),
('Dr. Jackson Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990223', 10),
('Dr. Isabella King', 'MBBS, MD', 'Hematologist', 'medicine', '889900123', 10),
('Dr. Mason Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112723', 10),
('Dr. Emily Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223723', 10),
('Dr. William Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333823', 10),
('Dr. Sophia Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335923', 10),
('Dr. Noah Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156123', 10),
('Dr. Amelia Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667223', 10),
('Dr. Lucas Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778223', 10),
('Dr. Mia Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889323', 10),
('Dr. Harper Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899023', 10),
('Dr. Jack Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005123', 10),
('Dr. Ella Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112823', 10),
('Dr. Benjamin Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223823', 10),
('Dr. Charlotte Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333923', 10),
('Dr. William Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336023', 10);


-- Data for Hospital 11
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Sophia Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112624', 11),
('Dr. Oliver Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223624', 11),
('Dr. Amelia Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333724', 11),
('Dr. Noah Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335824', 11),
('Dr. Ava Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156924', 11),
('Dr. Ethan Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667124', 11),
('Dr. Olivia Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778124', 11),
('Dr. Jackson Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889124', 11),
('Dr. Isabella Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990224', 11),
('Dr. Mason King', 'MBBS, MD', 'Hematologist', 'medicine', '889900124', 11),
('Dr. Emily Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112724', 11),
('Dr. William Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223724', 11),
('Dr. Sophia Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333824', 11),
('Dr. Noah Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335924', 11),
('Dr. Amelia Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156124', 11),
('Dr. Lucas Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667224', 11),
('Dr. Mia Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778224', 11),
('Dr. Harper Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889324', 11),
('Dr. Jack Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899024', 11),
('Dr. Ella Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005124', 11),
('Dr. Benjamin Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112824', 11),
('Dr. Charlotte Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223824', 11),
('Dr. William Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333924', 11),
('Dr. Emily Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336024', 11);


-- Data for Hospital 12
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Oliver Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112625', 12),
('Dr. Amelia Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223625', 12),
('Dr. Noah Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333725', 12),
('Dr. Ava Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335825', 12),
('Dr. Ethan Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156925', 12),
('Dr. Olivia Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667125', 12),
('Dr. Jackson Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778125', 12),
('Dr. Isabella Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889125', 12),
('Dr. Mason Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990225', 12),
('Dr. Emily King', 'MBBS, MD', 'Hematologist', 'medicine', '889900125', 12),
('Dr. William Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112725', 12),
('Dr. Sophia Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223725', 12),
('Dr. Oliver Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333825', 12),
('Dr. Amelia Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335925', 12),
('Dr. Noah Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156125', 12),
('Dr. Ava Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667225', 12),
('Dr. Ethan Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778225', 12),
('Dr. Olivia Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889325', 12),
('Dr. Jackson Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899025', 12),
('Dr. Isabella Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005125', 12),
('Dr. Mason Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112825', 12),
('Dr. Emily Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223825', 12),
('Dr. William Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333925', 12),
('Dr. Sophia Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336025', 12);


-- Data for Hospital 13
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Ava Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112626', 13),
('Dr. Ethan Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223626', 13),
('Dr. Olivia Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333726', 13),
('Dr. Jackson Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335826', 13),
('Dr. Isabella Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156926', 13),
('Dr. Mason Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667126', 13),
('Dr. Emily Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778126', 13),
('Dr. William Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889126', 13),
('Dr. Sophia Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990226', 13),
('Dr. Noah King', 'MBBS, MD', 'Hematologist', 'medicine', '889900126', 13),
('Dr. Amelia Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112726', 13),
('Dr. Oliver Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223726', 13),
('Dr. Ava Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333826', 13),
('Dr. Ethan Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335926', 13),
('Dr. Olivia Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156126', 13),
('Dr. Jackson Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667226', 13),
('Dr. Isabella Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778226', 13),
('Dr. Mason Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889326', 13),
('Dr. Emily Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899026', 13),
('Dr. William Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005126', 13),
('Dr. Sophia Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112826', 13),
('Dr. Oliver Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223826', 13),
('Dr. Amelia Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333926', 13),
('Dr. Noah Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336026', 13);


-- Data for Hospital 14
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Sophia Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112627', 14),
('Dr. Oliver Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223627', 14),
('Dr. Amelia Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333727', 14),
('Dr. Noah Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335827', 14),
('Dr. Ava Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156927', 14),
('Dr. Ethan Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667127', 14),
('Dr. Olivia Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778127', 14),
('Dr. Jackson Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889127', 14),
('Dr. Isabella Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990227', 14),
('Dr. Mason King', 'MBBS, MD', 'Hematologist', 'medicine', '889900127', 14),
('Dr. Emily Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112727', 14),
('Dr. William Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223727', 14),
('Dr. Sophia Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333827', 14),
('Dr. Oliver Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335927', 14),
('Dr. Amelia Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156127', 14),
('Dr. Noah Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667227', 14),
('Dr. Ava Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778227', 14),
('Dr. Ethan Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889327', 14),
('Dr. Olivia Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899027', 14),
('Dr. Jackson Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005127', 14),
('Dr. Isabella Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112827', 14),
('Dr. Mason Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223827', 14),
('Dr. Emily Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333927', 14),
('Dr. William Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336027', 14);


-- Data for Hospital 15
INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Noah Adams', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112628', 15),
('Dr. Ava Baker', 'MBBS, DM', 'Urologist', 'medicine', '0011223628', 15),
('Dr. Ethan Carter', 'MBBS, MD', 'Oncologist', 'medicine', '1122333728', 15),
('Dr. Olivia Davis', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '223335828', 15),
('Dr. Jackson Edwards', 'MBBS, MCh', 'Gynecologist/Urologist', 'surgery', '333156928', 15),
('Dr. Isabella Foster', 'MBBS, DM', 'Nephrologist', 'medicine', '315667128', 15),
('Dr. Mason Gray', 'MBBS, DM', 'Neurologist', 'medicine', '1566778128', 15),
('Dr. Emily Hill', 'MBBS, MCh', 'Vascular Surgeon', 'surgery', '6677889128', 15),
('Dr. William Jackson', 'MBBS, MD', 'Psychiatrist', 'medicine', '7788990228', 15),
('Dr. Sophia King', 'MBBS, MD', 'Hematologist', 'medicine', '889900128', 15),
('Dr. Oliver Lee', 'MBBS', 'General Practitioner', 'medicine', '9900112728', 15),
('Dr. Amelia Moore', 'MBBS, MD', 'Obstetrician/Gynecologist', 'medicine', '0011223728', 15),
('Dr. Noah Nelson', 'MBBS, MCh', 'Gynecologist/Oncologist', 'surgery', '1122333828', 15),
('Dr. Ava Olson', 'MBBS, MD', 'Endocrinologist', 'medicine', '223335928', 15),
('Dr. Ethan Parker', 'MBBS, MS', 'Gynecologist', 'surgery', '333156128', 15),
('Dr. Olivia Quinn', 'MBBS, DM', 'Cardiologist', 'medicine', '315667228', 15),
('Dr. Jackson Robinson', 'MBBS, MS', 'Ophthalmologist', 'surgery', '1566778228', 15),
('Dr. Isabella Turner', 'MBBS, MD', 'ENT Specialist/Neurologist', 'medicine', '6677889328', 15),
('Dr. Mason Walker', 'MBBS, MD', 'Pediatrician', 'medicine', '778899028', 15),
('Dr. Emily Young', 'MBBS, DM', 'Infectious Disease Specialist', 'medicine', '8899005128', 15),
('Dr. William Adams', 'MBBS, MD', 'Gastroenterologist', 'medicine', '9900112828', 15),
('Dr. Sophia Baker', 'MBBS, DM', 'Pulmonologist', 'medicine', '0011223828', 15),
('Dr. Oliver Carter', 'MBBS, DM', 'Rheumatologist', 'medicine', '1122333928', 15),
('Dr. Amelia Davis', 'MBBS, MD', 'Dermatologist', 'medicine', '223336028', 15);




INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Rana Banerjee', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112122', 22),
('Dr. Riazul Islam', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223122', 22),
('Dr. Sushmita Dutta', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336022', 22),
('Dr. Sreemoyee Chakraborty', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357022', 22),
('Dr. Pritam Ghosh', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568022', 22);


INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Abhijit Roy', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112123', 23),
('Dr. Soumen Basu', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223123', 23),
('Dr. Subhajit Das', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336023', 23),
('Dr. Ranjana Mitra', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357023', 23),
('Dr. Anirban Chatterjee', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568023', 23);



INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Sudip Banerjee', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112124', 24),
('Dr. Prithwiraj Saha', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223124', 24),
('Dr. Tanmoy Sinha', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336024', 24),
('Dr. Rimita Ghosh', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357024', 24),
('Dr. Arindam Mukherjee', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568024', 24);


INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Sandeep Chatterjee', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112125', 25),
('Dr. Partha Sarathi Ghosh', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223125', 25),
('Dr. Kunal Sen', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336025', 25),
('Dr. Sanghamitra Das', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357025', 25),
('Dr. Ankit Bose', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568025', 25);


INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Subhamoy Banik', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112126', 26),
('Dr. Nandini Chakraborty', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223126', 26),
('Dr. Kaustav Das', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336026', 26),
('Dr. Chandrima Sen', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357026', 26),
('Dr. Dipankar Basu', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568026', 26);


INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Arnab Roy', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112127', 27),
('Dr. Saikat Chakraborty', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223127', 27),
('Dr. Swagata Ghosh', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336027', 27),
('Dr. Saurav Mitra', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357027', 27),
('Dr. Sourav Sen', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568027', 27);



INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Sujit Paul', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112128', 28),
('Dr. Nihar Ranjan', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223128', 28),
('Dr. Rajarshi Banerjee', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336028', 28),
('Dr. Rupa Sinha', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357028', 28),
('Dr. Sayan Mukherjee', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568028', 28);


INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Tirthankar Ghosh', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112129', 29),
('Dr. Shubhankar Das', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223129', 29),
('Dr. Meghna Saha', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336029', 29),
('Dr. Subhasis Mitra', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357029', 29),
('Dr. Bikash Paul', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568029', 29);



INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Rupam Dey', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112130', 30),
('Dr. Rajesh Sen', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223130', 30),
('Dr. Madhumita Ghosh', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336030', 30),
('Dr. Rajat Saha', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357030', 30),
('Dr. Sukanta Banerjee', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568030', 30);



INSERT INTO doctors (doctor_name, degree, doctor_speciality, treatment_type, contact_info, hospital_id) VALUES
('Dr. Soumya Roy', 'MBBS, MS', 'ENT Specialist', 'surgery', '9900112131', 31),
('Dr. Bipasha Ghosh', 'MBBS, DM', 'Cardiologist', 'medicine', '0011223131', 31),
('Dr. Debjani Das', 'MBBS, MD', 'Dermatologist', 'medicine', '1122336031', 31),
('Dr. Supratik Sinha', 'MBBS, MS', 'Orthopedic Specialist', 'surgery', '2233357031', 31),
('Dr. Sourav Bhattacharya', 'MBBS, MCh', 'Neurologist', 'surgery', '3331568031', 31);



