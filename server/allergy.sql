INSERT INTO allergy (allergy_name) VALUES
('Peanuts'),
('Tree nuts'),
('Milk'),
('Eggs'),
('Fish'),
('Shellfish'),
('Wheat'),
('Soy'),
('Pollen'),
('Dust mites'),
('Animal dander'),
('Insect stings'),
('Mold'),
('Medications'),
('Latex'),
('Cockroaches'),
('Fragrances'),
('Chemical sensitivities'),
('Food additives'),
('Nickel');
INSERT INTO allergy (allergy_name) VALUES
('Bananas'),
('Avocados'),
('Kiwi'),
('Chestnuts'),
('Sunflower seeds'),
('Sesame seeds'),
('Mustard seeds'),
('Garlic'),
('Onions'),
('Tomatoes'),
('Potatoes'),
('Strawberries'),
('Apples'),
('Celery'),
('Carrots'),
('Peaches'),
('Beef'),
('Pork'),
('Chicken'),
('Gluten'),
('Sulfites'),
('Aspartame'),
('Monosodium glutamate (MSG)'),
('Artificial food coloring'),
('Henna'),
('Bee pollen'),
('Chamomile'),
('Echinacea'),
('Gold'),
('Cobalt'),
('Chromium'),
('Rubber'),
('Acrylics'),
('Formaldehyde'),
('Parabens'),
('Lanolin'),
('Propolis'),
('Neomycin'),
('Balsam of Peru'),
('Linalool'),
('Limonene');



ALTER TABLE allergy
ADD COLUMN description VARCHAR(255);

UPDATE allergy SET description = 'A common food allergy, particularly in children.' WHERE allergy_name = 'Peanuts';
UPDATE allergy SET description = 'Includes almonds, walnuts, cashews, and others.' WHERE allergy_name = 'Tree nuts';
UPDATE allergy SET description = 'Allergy to cows milk and related dairy products.' WHERE allergy_name = 'Milk';
UPDATE allergy SET description = 'Allergy to eggs, affecting both the yolk and the white.' WHERE allergy_name = 'Eggs';
UPDATE allergy SET description = 'Allergy to various types of fish such as salmon, tuna, etc.' WHERE allergy_name = 'Fish';
UPDATE allergy SET description = 'Includes crustaceans like shrimp, crab, and lobster.' WHERE allergy_name = 'Shellfish';
UPDATE allergy SET description = 'Allergy to wheat proteins, different from celiac disease.' WHERE allergy_name = 'Wheat';
UPDATE allergy SET description = 'Allergy to soybeans and soy products.' WHERE allergy_name = 'Soy';
UPDATE allergy SET description = 'Allergy to pollen from trees, grasses, and weeds.' WHERE allergy_name = 'Pollen';
UPDATE allergy SET description = 'Allergy to microscopic organisms found in house dust.' WHERE allergy_name = 'Dust mites';
UPDATE allergy SET description = 'Allergy to proteins found in skin cells, saliva, and urine of pets.' WHERE allergy_name = 'Animal dander';
UPDATE allergy SET description = 'Allergy to venom from bees, wasps, hornets, and fire ants.' WHERE allergy_name = 'Insect stings';
UPDATE allergy SET description = 'Allergy to mold spores in the environment.' WHERE allergy_name = 'Mold';
UPDATE allergy SET description = 'Allergy to specific medications, including antibiotics and others.' WHERE allergy_name = 'Medications';
UPDATE allergy SET description = 'Allergy to natural rubber latex, found in gloves, balloons, etc.' WHERE allergy_name = 'Latex';
UPDATE allergy SET description = 'Allergy to proteins found in cockroach droppings and body parts.' WHERE allergy_name = 'Cockroaches';
UPDATE allergy SET description = 'Allergy to various fragrances used in personal care products and cleaners.' WHERE allergy_name = 'Fragrances';
UPDATE allergy SET description = 'Sensitivity or allergy to various chemicals in the environment.' WHERE allergy_name = 'Chemical sensitivities';
UPDATE allergy SET description = 'Allergy to additives such as preservatives, colorings, and flavorings.' WHERE allergy_name = 'Food additives';
UPDATE allergy SET description = 'Allergy to nickel, often found in jewelry and other metal items.' WHERE allergy_name = 'Nickel';
UPDATE allergy SET description = 'Allergy to bananas, which may also cross-react with latex.' WHERE allergy_name = 'Bananas';
UPDATE allergy SET description = 'Allergy to avocados, also associated with latex allergy.' WHERE allergy_name = 'Avocados';
UPDATE allergy SET description = 'Allergy to kiwi fruit, often seen in individuals with latex allergy.' WHERE allergy_name = 'Kiwi';
UPDATE allergy SET description = 'Allergy to chestnuts, potentially linked to latex allergy.' WHERE allergy_name = 'Chestnuts';
UPDATE allergy SET description = 'Allergy to sunflower seeds, used in various food products.' WHERE allergy_name = 'Sunflower seeds';
UPDATE allergy SET description = 'Allergy to sesame seeds, increasingly common in many regions.' WHERE allergy_name = 'Sesame seeds';
UPDATE allergy SET description = 'Allergy to mustard seeds, found in condiments and various dishes.' WHERE allergy_name = 'Mustard seeds';
UPDATE allergy SET description = 'Allergy to garlic, affecting foods and some supplements.' WHERE allergy_name = 'Garlic';
UPDATE allergy SET description = 'Allergy to onions, including raw and cooked forms.' WHERE allergy_name = 'Onions';
UPDATE allergy SET description = 'Allergy to tomatoes, including raw, cooked, and processed forms.' WHERE allergy_name = 'Tomatoes';
UPDATE allergy SET description = 'Allergy to potatoes, affecting both raw and cooked potatoes.' WHERE allergy_name = 'Potatoes';
UPDATE allergy SET description = 'Allergy to strawberries, a common fruit allergy.' WHERE allergy_name = 'Strawberries';
UPDATE allergy SET description = 'Allergy to apples, often linked to birch pollen allergy.' WHERE allergy_name = 'Apples';
UPDATE allergy SET description = 'Allergy to celery, which can cause severe reactions in some people.' WHERE allergy_name = 'Celery';
UPDATE allergy SET description = 'Allergy to carrots, often associated with birch pollen allergy.' WHERE allergy_name = 'Carrots';
UPDATE allergy SET description = 'Allergy to peaches, commonly linked to birch pollen allergy.' WHERE allergy_name = 'Peaches';
UPDATE allergy SET description = 'Allergy to beef, less common but can cause significant reactions.' WHERE allergy_name = 'Beef';
UPDATE allergy SET description = 'Allergy to pork, another less common meat allergy.' WHERE allergy_name = 'Pork';
UPDATE allergy SET description = 'Allergy to chicken, including both meat and feathers.' WHERE allergy_name = 'Chicken';
UPDATE allergy SET description = 'Sensitivity or allergy to gluten, a protein in wheat and related grains.' WHERE allergy_name = 'Gluten';
UPDATE allergy SET description = 'Sensitivity or allergy to sulfites, used as preservatives in foods and beverages.' WHERE allergy_name = 'Sulfites';
UPDATE allergy SET description = 'Sensitivity or allergy to aspartame, an artificial sweetener.' WHERE allergy_name = 'Aspartame';
UPDATE allergy SET description = 'Sensitivity or allergy to MSG, a flavor enhancer in many foods.' WHERE allergy_name = 'Monosodium glutamate (MSG)';
UPDATE allergy SET description = 'Allergy to artificial food colorings, used in a variety of products.' WHERE allergy_name = 'Artificial food coloring';
UPDATE allergy SET description = 'Allergy to henna, used in temporary tattoos and hair dyes.' WHERE allergy_name = 'Henna';
UPDATE allergy SET description = 'Allergy to bee pollen, sometimes used as a dietary supplement.' WHERE allergy_name = 'Bee pollen';
UPDATE allergy SET description = 'Allergy to chamomile, an herb used in teas and other products.' WHERE allergy_name = 'Chamomile';
UPDATE allergy SET description = 'Allergy to echinacea, an herb often used to boost the immune system.' WHERE allergy_name = 'Echinacea';
UPDATE allergy SET description = 'Allergy to gold, found in jewelry and dental materials.' WHERE allergy_name = 'Gold';
UPDATE allergy SET description = 'Allergy to cobalt, used in metal alloys and pigments.' WHERE allergy_name = 'Cobalt';
UPDATE allergy SET description = 'Allergy to chromium, found in stainless steel and other alloys.' WHERE allergy_name = 'Chromium';
UPDATE allergy SET description = 'Allergy to various forms of rubber, including latex and synthetic rubber.' WHERE allergy_name = 'Rubber';
UPDATE allergy SET description = 'Allergy to acrylic materials, used in textiles, paints, and plastics.' WHERE allergy_name = 'Acrylics';
UPDATE allergy SET description = 'Allergy to formaldehyde, found in building materials and household products.' WHERE allergy_name = 'Formaldehyde';
UPDATE allergy SET description = 'Allergy to parabens, used as preservatives in cosmetics and pharmaceuticals.' WHERE allergy_name = 'Parabens';
UPDATE allergy SET description = 'Allergy to lanolin, a wool-derived ingredient in many skincare products.' WHERE allergy_name = 'Lanolin';
UPDATE allergy SET description = 'Allergy to propolis, a bee product used in supplements and skin treatments.' WHERE allergy_name = 'Propolis';
UPDATE allergy SET description = 'Allergy to neomycin, an antibiotic found in topical medications.' WHERE allergy_name = 'Neomycin';
UPDATE allergy SET description = 'Allergy to Balsam of Peru, used in fragrances and flavorings.' WHERE allergy_name = 'Balsam of Peru';
UPDATE allergy SET description = 'Allergy to linalool, a component of many essential oils.' WHERE allergy_name = 'Linalool';
UPDATE allergy SET description = 'Allergy to limonene, a citrus-derived compound found in cleaning products and fragrances.' WHERE allergy_name = 'Limonene';
