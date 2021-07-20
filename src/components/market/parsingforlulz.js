const cyberware_list = [
    "Cybereye, 100eb",
    "Cyberaudio Suite, 500eb",
    "Neural Link, 500eb",
    "Cyberarm, 500eb",
    "Cyberleg, 100eb",
    "External Cyberware of exactly 1000eb",
    "External Cyberware of 500eb or less",
    "Internal Cyberware of exactly 1000eb",
    "Internal Cyberware of 500eb or less",
    "Cybereye Option of exactly 1000eb",
    "Cybereye Option of 500eb or less",
    "Cyberaudio Option of exactly 1000eb",
    "Cyberaudio Option of 500eb or less",
    "Neuralware Option of exactly 1000eb",
    "Neuralware Option of 500eb or less",
    "Cyberlimb Option of exactly 1000eb",
    "Cyberlimb Option of 500eb or less",
    "Fashionware of GM's Choice",
    "Borgware of GM's Choice",
    "Any Cyberware of GM's Choice",
  ];

const food_list = ['Canned Goods, 10eb', 'Packaged goods, 10eb', 'Frozen Goods, 10eb', 'Bags of Grain, 20eb',
	     'Kibble Pack, 10eb', 'Bags of Prepak, 20eb', 'Street Drugs of 20eb or less',
	     'Poor Quality Alcohol, 10eb', 'Alcohol, 20eb', 'Excellent Quality Alcohol, 100eb', 'MRE, 10eb',
	     'Live Chicken, 50eb', 'Live Fish, 50eb', 'Fresh Fruits, 50eb', 'Fresh Vegetables, 50eb',
	     'Root Vegetables, 20eb', 'Live Pigs, 100eb', 'Exotic Fruits, 100eb', 'Exotic Vegetables, 100eb',
	     'Street Drugs of exactly 50eb'];

const electro_list = ['Agent, 100eb', 'Programs or Hardware of 100eb or less', 'Audio Recorder, 100eb',
		'Bug Detector, 500eb', 'Chemical Analyzer, 1000eb', 'Computer, 50eb', 'Cyberdeck, 500eb',
		'Disposable Cell Phone, 50eb', 'Electric Guitar or Other Instrument, 500eb',
		'Programs or Hardware of exactly 500eb', 'Medscanner, 1000eb', 'Homing Tracer, 500eb',
		'Radio Communicator, 100eb', 'Techscanner, 1000eb', 'Smart Glasses, 500eb', 'Radar Detector, 500eb',
		'Scrambler/Descrambler, 500eb', 'Radio Scanner/Music Player, 50eb', 'Braindance Viewer, 1000eb',
		'Virtuality Goggles, 100eb'];

const survival_list = ['Anti-Smog Breathing Mask, 20eb', 'Auto-Level Dampening Ear Protectors, 1000eb', 'Binoculars, 50eb',
		 'Carryall, 20eb', 'Flashlight, 20eb', 'Duct Tape, 20eb', 'Inflatable Bed & Sleep-bag, 20eb',
		 'Lock-Picking Set, 20eb', 'Handcuffs, 50eb', 'Medtech Bag, 100eb', 'Tent and Camping Equipment, 50eb',
		 'Rope (60m), 20eb', 'Techtool, 100eb', 'Personal CarePack, 20eb', 'Radiation Suit, 1000eb',
		 'Road Flare, 10eb', 'Grapple Gun, 100eb', 'Tech Bag, 500eb', 'Shovel or Axe, 50eb', 'Airhypo, 50eb'];

const clothes_list = ['Bag Lady Chic', 'Gang Colors', 'Generic Chic', 'Bohemian', 'Leisurewear', 'Nomad Leather', 'Asia Pop',
		'Urban Flash', 'Businesswear', 'High Fashion', 'Biomonitor, 100eb', 'Chemskin, 100eb', 'EMP Threading, 10eb',
		'Light Tatoo, 100eb', 'Shift Tacts, 100eb', 'Skinwatch, 100eb', 'Techhair, 100eb', 'Generic Chic',
		'Leisurewear', 'Gang Colors'];






  let cyberware = [];
  
  parsemagic = (listname) =>{
    let mainObj = [];
    listname.map((list) => {
        let split = list.split(",");
      
        let numb = list.match(/\d/g);
        if (numb !== null) {
          numb = Number(numb.join(""));
        }
      
        let obj = {
          name: split[0],
          price: numb,
        };
      
        mainObj.push(obj);
           
      }); return (mainObj);
  };

 
  cyberware = parsemagic(cyberware_list);
  food = parsemagic(food_list);
  electronics = parsemagic(electro_list);
  clothes = parsemagic(clothes_list);
  survival = parsemagic(survival_list);
 
  console.log(food);
  console.log(cyberware);
  console.log(electronics);
  console.log(clothes);
  console.log(survival);