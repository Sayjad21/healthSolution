INSERT INTO antibiotic (name) VALUES
('Amoxicillin'),
('Penicillin'),
('Ciprofloxacin'),
('Azithromycin'),
('Cephalexin'),
('Clindamycin'),
('Doxycycline'),
('Metronidazole'),
('Erythromycin'),
('Levofloxacin'),
('Vancomycin'),
('Trimethoprim-sulfamethoxazole'),
('Gentamicin'),
('Ceftriaxone'),
('Tetracycline'),
('Ampicillin'),
('Chloramphenicol'),
('Linezolid'),
('Meropenem'),
('Piperacillin-tazobactam');
INSERT INTO antibiotic (name) VALUES
('Imipenem'),
('Amikacin'),
('Cefepime'),
('Cefuroxime'),
('Fosfomycin'),
('Norfloxacin'),
('Ofloxacin'),
('Rifampicin'),
('Tobramycin'),
('Nitrofurantoin'),
('Bacitracin'),
('Polymyxin B'),
('Neomycin'),
('Colistin'),
('Dalbavancin'),
('Tedizolid'),
('Tigecycline'),
('Daptomycin'),
('Quinupristin-dalfopristin'),
('Clarithromycin'),
('Minocycline'),
('Ceftaroline'),
('Cefixime'),
('Ceftazidime'),
('Sulfasalazine'),
('Ertapenem'),
('Doripenem'),
('Spectinomycin'),
('Roxithromycin'),
('Josamycin'),
('Spiramycin'),
('Pristinamycin'),
('Mupirocin'),
('Secnidazole'),
('Tinidazole'),
('Sulfanilamide'),
('Thiamphenicol'),
('Telavancin'),
('Plazomicin');

ALTER TABLE antibiotic
ADD COLUMN description VARCHAR(255);


UPDATE antibiotic SET description = 'Broad-spectrum antibiotic used to treat various infections.' WHERE name = 'Amoxicillin';
UPDATE antibiotic SET description = 'Used to treat serious bacterial infections, particularly in hospital settings.' WHERE name = 'Vancomycin';
UPDATE antibiotic SET description = 'Effective against a wide range of bacteria, including those resistant to other antibiotics.' WHERE name = 'Ciprofloxacin';
UPDATE antibiotic SET description = 'Used to treat infections caused by bacteria, including skin, respiratory, and urinary tract infections.' WHERE name = 'Azithromycin';
UPDATE antibiotic SET description = 'Commonly used to treat respiratory infections, skin infections, and sexually transmitted infections.' WHERE name = 'Doxycycline';
UPDATE antibiotic SET description = 'Effective against a broad range of bacteria, often used for respiratory and skin infections.' WHERE name = 'Clindamycin';
UPDATE antibiotic SET description = 'Used to treat a variety of bacterial infections, including those of the skin and respiratory tract.' WHERE name = 'Ceftriaxone';
UPDATE antibiotic SET description = 'Effective against a range of infections, particularly those of the skin and respiratory system.' WHERE name = 'Levofloxacin';
UPDATE antibiotic SET description = 'Used to treat infections caused by Gram-positive bacteria, including staph and strep.' WHERE name = 'Penicillin';
UPDATE antibiotic SET description = 'Effective against many bacterial infections, including those of the respiratory and urinary tracts.' WHERE name = 'Metronidazole';
UPDATE antibiotic SET description = 'Used to treat infections caused by various Gram-negative bacteria.' WHERE name = 'Gentamicin';
UPDATE antibiotic SET description = 'Effective against anaerobic bacteria, commonly used for intra-abdominal infections.' WHERE name = 'Meropenem';
UPDATE antibiotic SET description = 'Broad-spectrum antibiotic used for serious infections when other antibiotics are ineffective.' WHERE name = 'Imipenem';
UPDATE antibiotic SET description = 'Used to treat a variety of infections, including those of the urinary tract and respiratory system.' WHERE name = 'Trimethoprim';
UPDATE antibiotic SET description = 'Commonly used to treat infections such as pneumonia, bronchitis, and ear infections.' WHERE name = 'Clarithromycin';
UPDATE antibiotic SET description = 'Effective against bacterial infections, often used for skin and soft tissue infections.' WHERE name = 'Erythromycin';
UPDATE antibiotic SET description = 'Used to treat serious bacterial infections, particularly in hospitalized patients.' WHERE name = 'Linezolid';
UPDATE antibiotic SET description = 'Effective against Gram-positive bacteria, commonly used for skin and soft tissue infections.' WHERE name = 'Cephalexin';
UPDATE antibiotic SET description = 'Broad-spectrum antibiotic used to treat a variety of bacterial infections.' WHERE name = 'Cefuroxime';
UPDATE antibiotic SET description = 'Effective against a range of bacterial infections, including those of the respiratory tract.' WHERE name = 'Tetracycline';
UPDATE antibiotic SET description = 'Combination antibiotic used to treat various infections including urinary tract infections and respiratory tract infections.' WHERE id = 12; -- Trimethoprim-sulfamethoxazole

UPDATE antibiotic SET description = 'Broad-spectrum penicillin antibiotic used to treat various bacterial infections such as respiratory infections and urinary tract infections.' WHERE id = 16; -- Ampicillin

UPDATE antibiotic SET description = 'Broad-spectrum antibiotic effective against a wide range of bacteria, used for treating serious infections.' WHERE id = 17; -- Chloramphenicol

UPDATE antibiotic SET description = 'Combination antibiotic with extended spectrum activity, used to treat infections caused by resistant bacteria.' WHERE id = 20; -- Piperacillin-tazobactam

UPDATE antibiotic SET description = 'Aminoglycoside antibiotic used to treat serious infections caused by Gram-negative bacteria.' WHERE id = 22; -- Amikacin

UPDATE antibiotic SET description = 'Fourth-generation cephalosporin antibiotic used primarily for the treatment of serious infections, particularly hospital-acquired infections.' WHERE id = 23; -- Cefepime

UPDATE antibiotic SET description = 'Antibiotic that disrupts bacterial cell wall synthesis, used primarily for urinary tract infections.' WHERE id = 25; -- Fosfomycin

UPDATE antibiotic SET description = 'Fluoroquinolone antibiotic used to treat urinary tract infections, respiratory infections, and other bacterial infections.' WHERE id = 26; -- Norfloxacin

UPDATE antibiotic SET description = 'Fluoroquinolone antibiotic used for treating a variety of bacterial infections, including respiratory and skin infections.' WHERE id = 27; -- Ofloxacin

UPDATE antibiotic SET description = 'Antibiotic that inhibits RNA synthesis in bacteria, used to treat tuberculosis and other bacterial infections.' WHERE id = 28; -- Rifampicin

UPDATE antibiotic SET description = 'Aminoglycoside antibiotic used to treat serious infections caused by Gram-negative bacteria, including respiratory tract infections.' WHERE id = 29; -- Tobramycin

UPDATE antibiotic SET description = 'Antibiotic used primarily for urinary tract infections caused by susceptible bacteria.' WHERE id = 30; -- Nitrofurantoin

UPDATE antibiotic SET description = 'Antibiotic produced by Bacillus licheniformis, used primarily topically for skin infections.' WHERE id = 31; -- Bacitracin

UPDATE antibiotic SET description = 'Polypeptide antibiotic used for the treatment of Gram-negative bacterial infections, particularly those resistant to other antibiotics.' WHERE id = 32; -- Polymyxin B

UPDATE antibiotic SET description = 'Antibiotic effective against Gram-negative bacteria, used for various infections including urinary tract infections.' WHERE id = 33; -- Neomycin

UPDATE antibiotic SET description = 'Antibiotic used primarily for the treatment of infections caused by multidrug-resistant Gram-negative bacteria.' WHERE id = 34; -- Colistin

UPDATE antibiotic SET description = 'Lipoglycopeptide antibiotic used for the treatment of skin and soft tissue infections caused by Gram-positive bacteria.' WHERE id = 35; -- Dalbavancin

UPDATE antibiotic SET description = 'Oxazolidinone antibiotic used for the treatment of skin and soft tissue infections caused by Gram-positive bacteria.' WHERE id = 36; -- Tedizolid

UPDATE antibiotic SET description = 'Glycylcycline antibiotic used for the treatment of complicated skin and intra-abdominal infections.' WHERE id = 37; -- Tigecycline

UPDATE antibiotic SET description = 'Lipopeptide antibiotic used for the treatment of skin infections and bacteremia caused by Gram-positive bacteria.' WHERE id = 38; -- Daptomycin

UPDATE antibiotic SET description = 'Streptogramin antibiotic combination used for the treatment of infections caused by multidrug-resistant Gram-positive bacteria.' WHERE id = 39; -- Quinupristin-dalfopristin

UPDATE antibiotic SET description = 'Tetracycline antibiotic used for the treatment of acne and respiratory tract infections.' WHERE id = 41; -- Minocycline

UPDATE antibiotic SET description = 'Cephalosporin antibiotic effective against Gram-positive and Gram-negative bacteria, used for skin and soft tissue infections.' WHERE id = 42; -- Ceftaroline

UPDATE antibiotic SET description = 'Third-generation cephalosporin antibiotic used for the treatment of respiratory tract infections and urinary tract infections.' WHERE id = 43; -- Cefixime

UPDATE antibiotic SET description = 'Third-generation cephalosporin antibiotic used for the treatment of infections caused by susceptible Gram-negative bacteria.' WHERE id = 44; -- Ceftazidime

UPDATE antibiotic SET description = 'Aminosalicylate antibiotic used for the treatment of inflammatory bowel disease and rheumatoid arthritis.' WHERE id = 45; -- Sulfasalazine

UPDATE antibiotic SET description = 'Carbapenem antibiotic used for the treatment of serious bacterial infections, including complicated urinary tract infections.' WHERE id = 46; -- Ertapenem

UPDATE antibiotic SET description = 'Carbapenem antibiotic used for the treatment of serious bacterial infections, including intra-abdominal infections.' WHERE id = 47; -- Doripenem

UPDATE antibiotic SET description = 'Aminoglycoside antibiotic used for the treatment of sexually transmitted infections and gonorrhea.' WHERE id = 48; -- Spectinomycin

UPDATE antibiotic SET description = 'Macrolide antibiotic used for the treatment of respiratory tract infections and skin infections.' WHERE id = 49; -- Roxithromycin

UPDATE antibiotic SET description = 'Macrolide antibiotic used for the treatment of respiratory tract infections and skin infections.' WHERE id = 50; -- Josamycin

UPDATE antibiotic SET description = 'Macrolide antibiotic used for the treatment of respiratory tract infections and skin infections.' WHERE id = 51; -- Spiramycin

UPDATE antibiotic SET description = 'Streptogramin antibiotic used for the treatment of infections caused by Gram-positive bacteria, including skin infections.' WHERE id = 52; -- Pristinamycin

UPDATE antibiotic SET description = 'Topical antibiotic used for the treatment of skin infections caused by Staphylococcus aureus.' WHERE id = 53; -- Mupirocin

UPDATE antibiotic SET description = 'Nitroimidazole antibiotic used for the treatment of parasitic and bacterial infections, including anaerobic infections.' WHERE id = 54; -- Secnidazole

UPDATE antibiotic SET description = 'Nitroimidazole antibiotic used for the treatment of parasitic and bacterial infections, including anaerobic infections.' WHERE id = 55; -- Tinidazole

UPDATE antibiotic SET description = 'Sulfonamide antibiotic used for the treatment of bacterial infections and as a diuretic.' WHERE id = 56; -- Sulfanilamide

UPDATE antibiotic SET description = 'Antibiotic effective against a wide range of Gram-negative and Gram-positive bacteria.' WHERE id = 57; -- Thiamphenicol

UPDATE antibiotic SET description = 'Lipoglycopeptide antibiotic used for the treatment of skin infections caused by Gram-positive bacteria.' WHERE id = 58; -- Telavancin

UPDATE antibiotic SET description = 'Aminoglycoside antibiotic used for the treatment of complicated urinary tract infections caused by multidrug-resistant bacteria.' WHERE id = 59; -- Plazomicin
