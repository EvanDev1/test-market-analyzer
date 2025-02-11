const fs = require("fs");

// Define your original itemData object
const originalItemData = {
  "AP Rounds I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "AP Rounds II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Afterburner-S I": {
    categories: ["Modules.Subsystems"],
  },
  "Afterburner-S II": {
    categories: ["Modules.Subsystems"],
  },
  "Afterburner-S III": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Fuel Injector": {
    categories: ["Modules.Engine Rigs"],
  },
  Armchair: {
    categories: ["Furniture.Seating"],
  },
  "Astero blueprint": {
    categories: ["Blueprints"],
  },
  "Banner (CoreSec)": {
    categories: ["Furniture.electronics"],
  },
  "Banner (Foralkan)": {
    categories: ["Furniture.electronics"],
  },
  "Banner (Lycentian)": {
    categories: ["Furniture.electronics"],
  },
  "Banner (Trade Union)": {
    categories: ["Furniture.electronics"],
  },
  "Barracuda blueprint": {
    categories: ["Blueprints"],
  },
  "Battery I": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Battery II": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Battery III": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Beam I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Beam II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Beam III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Beam-M I": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Beam-M II": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Beam-M III": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Blaster I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Blaster II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Blaster III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Blaster-M I": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Blaster-M II": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Blaster-M III": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Blink Drive I": {
    categories: ["Modules.Subsystems"],
  },
  "Blink Drive II": {
    categories: ["Modules.Subsystems"],
  },
  "Blink Drive III": {
    categories: ["Modules.Subsystems"],
  },
  "Box shelf": {
    categories: ["Furniture.Shelves"],
  },
  "Candiru blueprint": {
    categories: ["Blueprints"],
  },
  "Cannon I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Cannon II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Cannon III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Cannon-M I": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Cannon-M II": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Cannon-M III": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Christmas tree": {
    categories: ["Furniture.Plants"],
  },
  "Coilgun I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Coilgun II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Coilgun III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Coilgun-M I": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Coilgun-M II": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Coilgun-M III": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Composite Armor I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Composite Armor II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Composite Armor III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Conciliator blueprint": {
    categories: ["Blueprints"],
  },
  "CoreSec Targeter I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Couch (center)": {
    categories: ["Furniture.Seating"],
  },
  "Couch (left)": {
    categories: ["Furniture.Seating"],
  },
  "Couch (right)": {
    categories: ["Furniture.Seating"],
  },
  Counter: {
    categories: ["Furniture.Counters"],
  },
  "Counter (bar)": {
    categories: ["Furniture.Counters"],
  },
  "Curved bench": {
    categories: ["Furniture.Seating"],
  },
  "Curved chair": {
    categories: ["Furniture.Seating"],
  },
  "Display case": {
    categories: ["Furniture.Displays"],
  },
  "Display shelf": {
    categories: ["Furniture.Displays"],
  },
  "Disruptor I": {
    categories: ["Modules.Subsystems"],
  },
  "Disruptor II": {
    categories: ["Modules.Subsystems"],
  },
  "Disruptor III": {
    categories: ["Modules.Subsystems"],
  },
  "Double rounded bed": {
    categories: ["Furniture.Beds"],
  },
  "Dread Coilgun blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Coilgun-M blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Flak blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Railgun blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Railgun-M blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Shrapnel blueprint": {
    categories: ["Blueprints"],
  },
  "Drone Targeter I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Drone Targeter II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Eclipse Helmet": {
    categories: ["Armor.Light"],
  },
  "Eclipse Legs": {
    categories: ["Armor.Light"],
  },
  "Eclipse Torso": {
    categories: ["Armor.Light"],
  },
  "Edict blueprint": {
    categories: ["Blueprints"],
  },
  Endtable: {
    categories: ["Furniture.Tables"],
  },
  "Energy Booster I": {
    categories: ["Modules.Subsystems"],
  },
  "Energy Booster II": {
    categories: ["Modules.Subsystems"],
  },
  "Energy Booster III": {
    categories: ["Modules.Subsystems"],
  },
  "Engine Gimbals I": {
    categories: ["Modules.Engine Rigs"],
  },
  "Engine Gimbals II": {
    categories: ["Modules.Engine Rigs"],
  },
  "Engine Gimbals III": {
    categories: ["Modules.Engine Rigs"],
  },
  "Enhanced Deflectors I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Enhanced Deflectors II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Enhanced Deflectors III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Enhanced Servos I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Enhanced Servos II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Enhanced Servos III": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Eos blueprint": {
    categories: ["Blueprints"],
  },
  "Exhaust Restrictor I": {
    categories: ["Modules.Engine Rigs"],
  },
  "Exhaust Restrictor II": {
    categories: ["Modules.Engine Rigs"],
  },
  "Exhaust Restrictor III": {
    categories: ["Modules.Engine Rigs"],
  },
  Firework: {
    categories: ["Deployables.Fireworks"],
  },
  "Firework (snowflake)": {
    categories: ["Deployables.Fireworks"],
  },
  "Flak I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Flak II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Flak III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Foralkan Targeter I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Foralkan Targeter II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Fuel Injector I": {
    categories: ["Modules.Engine Rigs"],
  },
  "Fuel Injector II": {
    categories: ["Modules.Engine Rigs"],
  },
  "Fuel Injector III": {
    categories: ["Modules.Engine Rigs"],
  },
  "Galaxy blueprint": {
    categories: ["Blueprints"],
  },
  "HE Rounds I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "HE Rounds II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Hardlight Shields I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Hardlight Shields II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Hardlight Shields III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Heat Sink I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Heat Sink II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Heat Sink III": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Heavy Bolt I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Heavy Bolt II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Heavy Bolt III": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Heavy Hull Repairer I": {
    categories: ["Modules.Subsystems"],
  },
  "Heavy Hull Repairer II": {
    categories: ["Modules.Subsystems"],
  },
  "Heavy Hull Repairer III": {
    categories: ["Modules.Subsystems"],
  },
  "Heavy Sensor Janmer I": {
    categories: ["Modules.Subsystems"],
  },
  "Heavy Shield Repairer I": {
    categories: ["Modules.Subsystems"],
  },
  "Heavy Shield Repairer II": {
    categories: ["Modules.Subsystems"],
  },
  "Heavy Shield Repairer III": {
    categories: ["Modules.Subsystems"],
  },
  "Holo plant": {
    categories: ["Furniture.Plants", "Furniture.electronics"],
  },
  "Holoprojector (CoreSec)": {
    categories: ["Furniture.electronics"],
  },
  "Holoprojector (Foralkan)": {
    categories: ["Furniture.electronics"],
  },
  "Holoprojector (Lycentian)": {
    categories: ["Furniture.electronics"],
  },
  "Holoprojector (Mining Guild)=": {
    categories: ["Furniture.electronics"],
  },
  "Holoprojector (Trade Union)": {
    categories: ["Furniture.electronics"],
  },
  "Holoprojector (Mining Guild)": {
    categories: ["Furniture.electronics"],
  },
  "Hornbill blueprint": {
    categories: ["Blueprints"],
  },
  Houseplant: {
    categories: ["Furniture.Plants"],
  },
  "Hull Booster I": {
    categories: ["Modules.Subsystems"],
  },
  "Hull Booster II": {
    categories: ["Modules.Subsystems"],
  },
  "Hull Booster III": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Beam blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Beam-M blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Blaster blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Blaster-M blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Cannon blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Cannon-M blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Claymore blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Ion": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Hybrid Ion Rounds": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Hybrid Ion-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Hybrid Luminar blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Paragon blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Polaris blueprint": {
    categories: ["Blueprints"],
  },
  "Ice Miner I": {
    categories: ["Turrets.Miner", "Turrets.Small"],
  },
  "Ice Miner II": {
    categories: ["Turrets.Miner", "Turrets.Small"],
  },
  "Ion I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Ion II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Ion III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Ion Rounds I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Ion Rounds II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Ion Rounds III": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Ion-M I": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Ion-M II": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Ion-M III": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Jockey Helmet": {
    categories: ["Armor.Heavy"],
  },
  "Jockey Legs": {
    categories: ["Armor.Heavy"],
  },
  "Jockey Torso": {
    categories: ["Armor.Heavy"],
  },
  "Judicator blueprint": {
    categories: ["Blueprints"],
  },
  "Justice blueprint": {
    categories: ["Blueprints"],
  },
  "Knifejaw blueprint": {
    categories: ["Blueprints"],
  },
  "Koronis blueprint": {
    categories: ["Blueprints"],
  },
  "Liberty blueprint": {
    categories: ["Blueprints"],
  },
  "Light Hull Repairer I": {
    categories: ["Modules.Subsystems"],
  },
  "Light Hull Repairer II": {
    categories: ["Modules.Subsystems"],
  },
  "Light Hull Repairer III": {
    categories: ["Modules.Subsystems"],
  },
  "Light Sensor Jammer I": {
    categories: ["Modules.Subsystems"],
  },
  "Light Shield Repairer I": {
    categories: ["Modules.Subsystems"],
  },
  "Light Shield Repairer II": {
    categories: ["Modules.Subsystems"],
  },
  "Light Shield Repairer III": {
    categories: ["Modules.Subsystems"],
  },
  "Lightburner-L III": {
    categories: ["Modules.Subsystems"],
  },
  "Lightburner-M III": {
    categories: ["Modules.Subsystems"],
  },
  "Lightburner-S III": {
    categories: ["Modules.Subsystems"],
  },
  "Lightweight Engines I": {
    categories: ["Modules.Engine Rigs"],
  },
  "Lightweight Engines II": {
    categories: ["Modules.Engine Rigs"],
  },
  "Lightweight Engines III": {
    categories: ["Modules.Engine Rigs"],
  },
  "Loxodon blueprint": {
    categories: ["Blueprints"],
  },
  "Lucent blueprint": {
    categories: ["Blueprints"],
  },
  "Luster blueprint": {
    categories: ["Blueprints"],
  },
  "Lycentian Targeter I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Lycentian Targeter II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Macaw blueprint": {
    categories: ["Blueprints"],
  },
  "Mackerel blueprint": {
    categories: ["Blueprints"],
  },
  "Marine Helmet": {
    categories: ["Armor.Heavy", "Armor.Sold by Station"],
  },
  "Marine Legs": {
    categories: ["Armor.Heavy", "Armor.Sold by Station"],
  },
  "Marine Torso": {
    categories: ["Armor.Heavy", "Armor.Sold by Station"],
  },
  "Medium Hull Repairer II": {
    categories: ["Modules.Subsystems"],
  },
  "Medium Hull Repairer III": {
    categories: ["Modules.Subsystems"],
  },
  "Medium Hulll Repairer I": {
    categories: ["Modules.Subsystems"],
  },
  "Medium Shield Repairer I": {
    categories: ["Modules.Subsystems"],
  },
  "Medium Shield Repairer II": {
    categories: ["Modules.Subsystems"],
  },
  "Medium Shield Repairer III": {
    categories: ["Modules.Subsystems"],
  },
  "Miner I": {
    categories: ["Turrets.Miner", "Turrets.Small"],
  },
  "Miner II": {
    categories: ["Turrets.Miner", "Turrets.Small"],
  },
  "Nero Helmet": {
    categories: ["Armor.Heavy", "Armor.Sold by Station"],
  },
  "Nero Legs": {
    categories: ["Armor.Heavy", "Armor.Sold by Station"],
  },
  "Nero Torso": {
    categories: ["Armor.Heavy", "Armor.Sold by Station"],
  },
  "Nullifier Rounds I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Nullifier Rounds II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Overclocker II": {
    categories: ["Modules.Subsystems"],
  },
  "Overclocker III": {
    categories: ["Modules.Subsystems"],
  },
  "Overdrive-L I": {
    categories: ["Modules.Subsytem"],
  },
  "Overdrive-L II": {
    categories: ["Modules.Subsystems"],
  },
  "Overdrive-L III": {
    categories: ["Modules.Subsystems"],
  },
  "Overdrive-M II": {
    categories: ["Modules.Subsystems"],
  },
  "Overdrive-M III": {
    categories: ["Modules.Subsystems"],
  },
  Pants: {
    categories: ["Clothing.Civilian", "Clothing.Pants"],
  },
  "Pants (CoreSec)": {
    categories: ["Clothing.Uniforms.CoreSec", "Clothing.Pants"],
  },
  "Pants (Foralkan Admiral)": {
    categories: ["Clothing.Uniforms.Foralkan", "Clothing.Pants"],
  },
  "Pants (Foralkan Command)": {
    categories: ["Clothing.Uniforms.Foralkan", "Clothing.Pants"],
  },
  "Pants (Foralkan)": {
    categories: ["Clothing.Uniforms.Foralkan", "Clothing.Pants"],
  },
  "Pants (Kavani Command)": {
    categories: ["Clothing.Uniforms.Kavani", "Clothing.Pants"],
  },
  "Pants (Kavani)": {
    categories: ["Clothing.Uniforms.Kavani", "Clothing.Pants"],
  },
  "Pants (Lycentian Admiral)": {
    categories: ["Clothing.Uniforms.Lycentian", "Clothing.Pants"],
  },
  "Pants (Lycentian Command)": {
    categories: ["Clothing.Uniforms.Lycentian", "Clothing.Pants"],
  },
  "Pants (Lycentian)": {
    categories: ["Clothing.Uniforms.Lycentian", "Clothing.Pants"],
  },
  "Pants (Mining Guild)": {
    categories: ["Clothing.Uniforms.Mining Guild", "Clothing.Pants"],
  },
  "Pants (Syndicate)": {
    categories: ["Clothing.Uniforms.Syndicate", "Clothing.Pants"],
  },
  "Pants (Trade Union)": {
    categories: ["Clothing.Uniforms.Trade Union", "Clothing.Pants"],
  },
  "Parallel Circuits I": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Parallel Circuits II": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Parallel Circuits III": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Parrot blueprint": {
    categories: ["Blueprints"],
  },
  "Patcher Nanobots I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Patcher Nanobots II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Patcher Nanobots III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Phoenix Helmet": {
    categories: ["Armor.Light"],
  },
  "Phoenix Legs": {
    categories: ["Armor.Light"],
  },
  "Phoenix Torso": {
    categories: ["Armor.Light"],
  },
  "Piranha blueprint": {
    categories: ["Blueprints"],
  },
  "Precision Miner I": {
    categories: ["Turrets.Miner"],
  },
  "Precision Miner II": {
    categories: ["Turrets.Miner", "Turrets.Small"],
  },
  "Railgun I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Railgun II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Railgun III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Railgun-M I": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Railgun-M II": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Railgun-M III": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Rapid Bolt I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Rapid Bolt II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Rapid Bolt III": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Reflective Panels I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reflective Panels II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reflective Plating I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reflective Plating II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reflective Plating III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reinforced Hull I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reinforced Hull II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Reinforced Hull III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Rogue Helmet": {
    categories: ["Armor.Light", "Armor.Sold by Station"],
  },
  "Rogue Legs": {
    categories: ["Armor.Light", "Armor.Sold by Station"],
  },
  "Rogue Torso": {
    categories: ["Armor.Light", "Armor.Sold by Station"],
  },
  "Rounded bed": {
    categories: ["Furniture.Beds"],
  },
  "Sensor Booster I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Sensor Booster II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Sensor Booster III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Sensor Jammer I": {
    categories: ["Modules.Subsystems"],
  },
  "Servo Surge I": {
    categories: ["Modules.Subsystems"],
  },
  "Servo Surge III": {
    categories: ["Modules.Subsystems"],
  },
  "Shadow Helmet": {
    categories: ["Armor.Light", "Armor.Sold by Station"],
  },
  "Shadow Legs": {
    categories: ["Armor.Light", "Armor.Sold by Station"],
  },
  "Shadow Torso": {
    categories: ["Armor.Light", "Armor.Sold by Station"],
  },
  "Shield Amplifier I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Shield Amplifier II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Shield Amplifier III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Shield Booster I": {
    categories: ["Modules.Subsystems"],
  },
  "Shield Booster II": {
    categories: ["Modules.Subsystems"],
  },
  "Shield Booster III": {
    categories: ["Modules.Subsystems"],
  },
  "Shrapnel I": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Shrapnel II": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Shrapnel III": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Shroud blueprint": {
    categories: ["Blueprints"],
  },
  "Simple bed": {
    categories: ["Furniture.Beds"],
  },
  "Simple chair": {
    categories: ["Furniture.Seating"],
  },
  "Skeletonized Chassis I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Skeletonized Chassis II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Skeletonized Chassis III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Slab shelf": {
    categories: ["Furniture.Shelves"],
  },
  "Snowy tree": {
    categories: ["Furniture.Plants"],
  },
  "Stand light": {
    categories: ["Furniture.electronics"],
  },
  "Standing shelf": {
    categories: ["Furniture.Shelves"],
  },
  "Stasis Field I": {
    categories: ["Modules.Subsystems"],
  },
  "Stasis Field II": {
    categories: ["Modules.Subsystems"],
  },
  "Stasis Field III": {
    categories: ["Modules.Subsystems"],
  },
  "Strip Miner I": {
    categories: ["Turrets.Miner"],
  },
  "Strip Miner II": {
    categories: ["Turrets.Miner", "Turrets.Small"],
  },
  "Swift Bolt I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Swift Bolt II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Swift Bolt III": {
    categories: ["Modules.Weapon Rigs"],
  },
  "T-shirt": {
    categories: ["Clothing.Civilian", "Clothing.Shirts"],
  },
  Table: {
    categories: ["Furniture.Tables"],
  },
  "Target Painter I": {
    categories: ["Modules.Subsystems"],
  },
  "Target Painter II": {
    categories: ["Modules.Subsystems"],
  },
  "Templar Helmet": {
    categories: ["Armor.Light"],
  },
  "Templar Legs": {
    categories: ["Armor.Light"],
  },
  "Templar Torso": {
    categories: ["Armor.Light"],
  },
  "Tetra blueprint": {
    categories: ["Blueprints"],
  },
  "Thresher blueprint": {
    categories: ["Blueprints"],
  },
  "Toucan blueprint": {
    categories: ["Blueprints"],
  },
  "Triazo blueprint": {
    categories: ["Blueprints"],
  },
  "Ultralight Chassis I": {
    categories: ["Modules.Defense Rigs"],
  },
  "Ultralight Chassis II": {
    categories: ["Modules.Defense Rigs"],
  },
  "Ultralight Chassis III": {
    categories: ["Modules.Defense Rigs"],
  },
  "Uniform (CoreSec)": {
    categories: ["Clothing.Uniforms.CoreSec", "Clothing.Shirts"],
  },
  "Uniform (Foralkan Admiral)": {
    categories: ["Clothing.Uniforms.Foralkan", "Clothing.Shirts"],
  },
  "Uniform (Foralkan Command)": {
    categories: ["Clothing.Uniforms.Foralkan", "Clothing.Shirts"],
  },
  "Uniform (Foralkan)": {
    categories: ["Clothing.Uniforms.Foralkan", "Clothing.Shirts"],
  },
  "Uniform (Kavani Command)": {
    categories: ["Clothing.Uniforms.Kavani", "Clothing.Shirts"],
  },
  "Uniform (Kavani Marshal)": {
    categories: ["Clothing.Uniforms.Kavani", "Clothing.Shirts"],
  },
  "Uniform (Kavani)": {
    categories: ["Clothing.Uniforms.Kavani", "Clothing.Shirts"],
  },
  "Uniform (Lycentian Admiral)": {
    categories: ["Clothing.Uniforms.Lycentian", "Clothing.Shirts"],
  },
  "Uniform (Lycentian)": {
    categories: ["Clothing.Uniforms.Lycentian", "Clothing.Shirts"],
  },
  "Uniform (Mining Guild)": {
    categories: ["Clothing.Uniforms.Mining Guild", "Clothing.Shirts"],
  },
  "Uniform (Syndicate)": {
    categories: ["Clothing.Uniforms.Syndicate", "Clothing.Shirts"],
  },
  "Uniform (Trade Union)": {
    categories: ["Clothing.Uniforms.Trade Union", "Clothing.Shirts"],
  },
  "Veil blueprint": {
    categories: ["Blueprints"],
  },
  "Vesta blueprint": {
    categories: ["Blueprints"],
  },
  "Virtue blueprint": {
    categories: ["Blueprints"],
  },
  Wall: {
    categories: ["Furniture.Walls"],
  },
  "Wall (long)": {
    categories: ["Furniture.Walls"],
  },
  "Warden Helmet": {
    categories: ["Armor.Heavy"],
  },
  "Warden Legs": {
    categories: ["Armor.Heavy"],
  },
  "Warden Torso": {
    categories: ["Armor.Heavy"],
  },
  "Warp Charger I": {
    categories: ["Modules.Engine Rigs"],
  },
  "Warp Charger II": {
    categories: ["Modules.Engine Rigs"],
  },
  "Warp Charger III": {
    categories: ["Modules.Engine Rigs"],
  },
  "Warp Field Amplifier I": {
    categories: ["Modules.Engine Rigs"],
  },
  "Warp Field Amplifier II": {
    categories: ["Modules.Engine Rigs"],
  },
  "Warp Field Amplifier III": {
    categories: ["Modules.Engine Rigs"],
  },
  "Warp disruptor I": {
    categories: ["Deployables.Combat"],
  },
  "Warp disruptor II": {
    categories: ["Deployables.Combat"],
  },
  "Warp disruptor III": {
    categories: ["Deployables.Combat"],
  },
  Gellium: {
    categories: ["Resources.Refined Ore"],
  },
  "Vexnium ore": {
    categories: ["Resources.Ore"],
  },
  Reknite: {
    categories: ["Resources.Refined Ore"],
  },
  Water: {
    categories: ["Resources.Refined Ore"],
  },
  "Red Narcor ore": {
    categories: ["Resources.Ore"],
  },
  "Axnit ore": {
    categories: ["Resources.Ore"],
  },
  Vexnium: {
    categories: ["Resources.Refined Ore"],
  },
  "Water ice": {
    categories: ["Resources.Ore"],
  },
  Axnit: {
    categories: ["Resources.Refined Ore"],
  },
  Narcor: {
    categories: ["Resources.Refined Ore"],
  },
  "Narcor ore": {
    categories: ["Resources.Ore"],
  },
  "Axnit (pristine)": {
    categories: ["Resources.Ore"],
  },
  "Gellium ore": {
    categories: ["Resources.Ore"],
  },
  Korrelite: {
    categories: ["Resources.Refined Ore"],
  },
  "Red Narcor": {
    categories: ["Resources.Refined Ore"],
  },
  "Reknite (inferior)": {
    categories: ["Resources.Ore"],
  },
  "Reknite ore": {
    categories: ["Resources.Ore"],
  },
  "Korrelite ore": {
    categories: ["Resources.Ore"],
  },
  "Korrelite (inferior)": {
    categories: ["Resources.Ore"],
  },
  "Korrelite (pristine)": {
    categories: ["Resources.Ore"],
  },
  "Reknite (superior)": {
    categories: ["Resources.Ore"],
  },
  "Gellium (superior)": {
    categories: ["Resources.Ore"],
  },
  "Gellium (pristine)": {
    categories: ["Resources.Ore"],
  },
  "Korrelite (superior)": {
    categories: ["Resources.Ore"],
  },
  "Gellium (inferior)": {
    categories: ["Resources.Ore"],
  },
  "Reknite (pristine)": {
    categories: ["Resources.Ore"],
  },
  "Drone command core": {
    categories: ["Resources.Drone", "Salvage.Faction Points", "Salvage.Drone"],
  },
  "Drone core": {
    categories: ["Resources.Drone", "Salvage.Faction Points", "Salvage.Drone"],
  },
  "Power cell": {
    categories: ["Resources.Junk"],
  },
  "Metal scraps": {
    categories: ["Resources.Junk"],
  },
  "Lycentian Mission Log": {
    categories: ["Salvage.Faction Points"],
  },
  "Crate of Exotic Goods": {
    categories: ["Salvage.Faction Points"],
  },
  "Contraband weapons": {
    categories: ["Salvage.Faction Points"],
  },
  "Stolen artifacts": {
    categories: ["Salvage.Faction Points"],
  },
  "Kavani Mission Log": {
    categories: ["Salvage.Faction Points"],
  },
  "Crate of Rare Ore": {
    categories: ["Salvage.Faction Points"],
  },
  "Contraband goods": {
    categories: ["Salvage.Faction Points"],
  },
  "Lycentian Insignia": {
    categories: ["Salvage.Faction Points"],
  },
  "Damaged Spaceship Parts": {
    categories: ["Salvage.Cargo"],
  },
  "Foralkan Insignia": {
    categories: ["Salvage.Faction Points"],
  },
  "Foralkan Mission Log": {
    categories: ["Salvage.Faction Points"],
  },
  "Kavani Insignia": {
    categories: ["Salvage.Faction Points"],
  },
  "Damaged Fuel": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Silver)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged supplies": {
    categories: ["Salvage.Cargo"],
  },
  "Shipping Manifest": {
    categories: ["Salvage.Faction Points"],
  },
  "Damaged Medical Supplies": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Blue)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Ruby)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Yellow)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Purple)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Amethyst)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Amber)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Orange)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Red)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Jasper)": {
    categories: ["Salvage.Cargo"],
  },
  "Damaged Spice (Sapphire)": {
    categories: ["Salvage.Cargo"],
  },
  "Elite drone core": {
    categories: ["Salvage.Faction Points", "Salvage.Drone"],
  },
  "Adv drone core": {
    categories: ["Salvage.Faction Points", "Salvage.Drone"],
  },
  "Foralkan Helmet": {
    categories: ["Salvage.Faction Points"],
  },
  "Kavani Helmet": {
    categories: ["Salvage.Faction Points"],
  },
  "Lycentian Helmet": {
    categories: ["Salvage.Faction Points"],
  },
  Adamant: {
    categories: ["Ships.Frigates"],
  },
  Astero: {
    categories: ["Ships.Hauler"],
  },
  Aurora: {
    categories: ["Ships.Fighters"],
  },
  Badger: {
    categories: ["Ships.Miners"],
  },
  Barracuda: {
    categories: ["Ships.Frigates"],
  },
  Bison: {
    categories: ["Ships.Haulers"],
  },
  Bulwark: {
    categories: ["Ships.Destroyers"],
  },
  Candiru: {
    categories: ["Ships.Interceptors"],
  },
  Chevron: {
    categories: ["Ships.Corvettes"],
  },
  Claymore: {
    categories: ["Ships.Fighters"],
  },
  Conciliator: {
    categories: ["Ships.Destroyers"],
  },
  Echelon: {
    categories: ["Ships.Destroyers"],
  },
  Edict: {
    categories: ["Ships.Corvettes"],
  },
  Eos: {
    categories: ["Ships.Miners"],
  },
  Falcon: {
    categories: ["Ships.Interceptors"],
  },
  Fortitude: {
    categories: ["Ships.Destroyers"],
  },
  Galaxy: {
    categories: ["Ships.Haulers"],
  },
  Halo: {
    categories: ["Ships.Frigates"],
  },
  "Honey Badger": {
    categories: ["Ships.Miners"],
  },
  Horizon: {
    categories: ["Ships.Destroyers"],
  },
  Hornbill: {
    categories: ["Ships.Fighters"],
  },
  "Hybrid Claymore": {
    categories: ["Ships.Fighters"],
  },
  "Hybrid Luminar": {
    categories: ["Ships.Fighters"],
  },
  "Hybrid Paragon": {
    categories: ["Ships.Fighters"],
  },
  "Hybrid Polaris": {
    categories: ["Ships.Fighters"],
  },
  Hyrax: {
    categories: ["Ships.Haulers"],
  },
  Infinity: {
    categories: ["Ships.Corvette"],
  },
  Judicator: {
    categories: ["Ships.Frigates"],
  },
  Justice: {
    categories: ["Ships.Destroyers"],
  },
  Knifejaw: {
    categories: ["Ships.Corvettes"],
  },
  Kodiak: {
    categories: ["Ships.Miners"],
  },
  Koronis: {
    categories: ["Ships.Miners"],
  },
  Liberty: {
    categories: ["Ships.Corvettes"],
  },
  Loxodon: {
    categories: ["Ships.Destroyers"],
  },
  Lucent: {
    categories: ["Ships.Fighters"],
  },
  Luster: {
    categories: ["Ships.Fighters"],
  },
  Macaw: {
    categories: ["Ships.Interceptors"],
  },
  Mackerel: {
    categories: ["Ships.Interceptors"],
  },
  Mako: {
    categories: ["Ships.Miners"],
  },
  Marlin: {
    categories: ["Ships.Miners"],
  },
  Ozark: {
    categories: ["Ships.Miners"],
  },
  Paragon: {
    categories: ["Ships.Interceptors"],
  },
  Parrot: {
    categories: ["Ships.Interceptors"],
  },
  Phalanx: {
    categories: ["Ships.Frigates"],
  },
  Piranha: {
    categories: ["Ships.Fighters"],
  },
  Polaris: {
    categories: ["Ships.Fighters"],
  },
  Radix: {
    categories: ["Ships.Corvettes"],
  },
  Rhino: {
    categories: ["Ships.Haulers"],
  },
  Sabre: {
    categories: ["Ships.Fighters"],
  },
  Shroud: {
    categories: ["Ships.Haulers"],
  },
  Tetra: {
    categories: ["Ships.Interceptors"],
  },
  Thresher: {
    categories: ["Ships.Fighters"],
  },
  Toucan: {
    categories: ["Ships.Fighters"],
  },
  Triazo: {
    categories: ["Ships.Interceptors"],
  },
  Veil: {
    categories: ["Ships.Haulers"],
  },
  Vesta: {
    categories: ["Ships.Miners"],
  },
  Virtue: {
    categories: ["Ships.Frigates"],
  },
  Yukon: {
    categories: ["Ships.Miners"],
  },
  Zenith: {
    categories: ["Ships.Interceptors"],
  },
  Zubron: {
    categories: ["Ships.Haulers"],
  },
  "Ancient Coilgun": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Ancient Coilgun-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Ancient Railgun": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Ancient Railgun-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Dread Coilgun": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Dread Coilgun-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Dread Flak": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Dread Railgun": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Dread Railgun-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Dread Shrapnel": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Hybrid Beam": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Hybrid Beam-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Hybrid Blaster": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Hybrid Blaster-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  "Hybrid Cannon": {
    categories: ["Turrets.Combat", "Turrets.Small"],
  },
  "Hybrid Cannon-M": {
    categories: ["Turrets.Combat", "Turrets.Medium"],
  },
  Disintegrex: {
    categories: ["Weapons.Pistol"],
  },
  "Explosive I": {
    categories: ["Weapons.Grenade", "Weapons.Sold by Station"],
  },
  "FG-88": {
    categories: ["Weapons.Rifle"],
  },
  "Gal-31": {
    categories: ["Weapons.Rifle", "Weapons.Sold by Station"],
  },
  "Gal-32": {
    categories: ["Weapons.Rifle"],
  },
  "Gal-33": {
    categories: ["Weapons.Rifle"],
  },
  "H3-X": {
    categories: ["Weapons.Rifle"],
  },
  "Hyper G1": {
    categories: ["Weapons.Pistol", "Weapons.Sold by Station"],
  },
  "Hyper G2": {
    categories: ["Weapons.Pistol"],
  },
  "Hyper X9": {
    categories: ["Weapons.Pistol"],
  },
  "LG0-T": {
    categories: ["Weapons.Rifle", "Weapons.Sold by Station"],
  },
  "LGS-T": {
    categories: ["Weapons.Rifle"],
  },
  "LG5-T": {
    categories: ["Weapons.Rifle"],
  },
  "LG9-T": {
    categories: ["Weapons.Rifle"],
  },
  "Orin 377": {
    categories: ["Weapons.Pistol"],
  },
  "Orin 388": {
    categories: ["Weapons.Pistol"],
  },
  "Orin 399": {
    categories: ["Weapons.Pistol"],
  },
  "Poison I": {
    categories: ["Weapons.Grenade", "Weapons.Sold by Station"],
  },
  "RR-5000": {
    categories: ["Weapons.Rifle"],
  },
  SSLB: {
    categories: ["Weapons.Rifle"],
  },
  "Smoke I": {
    categories: ["Weapons.Grenade", "Weapons.Sold by Station"],
  },
  Snowball: {
    categories: ["Weapons.Grenade"],
  },
  "Trila 3": {
    categories: ["Weapons.Rifle"],
  },
  "Ancient drone core": {
    categories: ["No use"],
  },
  "Crystal shard": {
    categories: ["No use"],
  },
  "Ancient beacon": {
    categories: ["Salvage.Ancient"],
  },
  "Heat Sink": {
    categories: ["Resources.Junk"],
  },
  "Ethereal (Ozark)": {
    categories: ["Skins"],
  },
  "Ethereal (Halo)": {
    categories: ["Skins"],
  },
  "Ethereal (Edict)": {
    categories: ["Skins"],
  },
  "Ethereal (Paragon)": {
    categories: ["Skins"],
  },
  "Ethereal (Kodiak)": {
    categories: ["Skins"],
  },
  "Ethereal (Barracuda)": {
    categories: ["Skins"],
  },
  "Ethereal (Stratos)": {
    categories: ["Skins"],
  },
  "Ethereal (Radix)": {
    categories: ["Skins"],
  },
  "Ethereal (Zubron)": {
    categories: ["Skins"],
  },
  "Ethereal (Claymore)": {
    categories: ["Skins"],
  },
  "Ethereal (Polaris)": {
    categories: ["Skins"],
  },
  "Ethereal (Virtue)": {
    categories: ["Skins"],
  },
  "Ethereal (Luminar)": {
    categories: ["Skins"],
  },
  "Ethereal (Judicator)": {
    categories: ["Skins"],
  },
  "Ethereal (Knifejaw)": {
    categories: ["Skins"],
  },
  "Ethereal (Dolphin)": {
    categories: ["Skins"],
  },
  "Ethereal (Phalanx)": {
    categories: ["Skins"],
  },
  "Ethereal (Liberty)": {
    categories: ["Skins"],
  },
  "Dread Warp Field Amplifier": {
    categories: ["Modules.Engine Rigs"],
  },
  "Hybrid Heavy Bolt": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Dread Reflective Panels": {
    categories: ["Modules.Defense Rigs"],
  },
  "Dread Reflective Plating": {
    categories: ["Modules.Defense Rigs"],
  },
  "Dread Energy Booster": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Enhanced Deflectors": {
    categories: ["Modules.Defense Rigs"],
  },
  "Hybrid Hardlight Shields": {
    categories: ["Modules.Defense Rigs"],
  },
  "Ancient Hull Booster": {
    categories: ["Modules.Subsystems"],
  },
  "Dread Nullifier Rounds": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Dread Exhaust Restrictor": {
    categories: ["Modules.Engine Rigs"],
  },
  "Dread Ultralight Chassis": {
    categories: ["Modules.Defense Rigs"],
  },
  "Hybrid Engine Gimbals": {
    categories: ["Modules.Engine Rigs"],
  },
  "Ancient Light Armor Booster": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Shield Amplifier": {
    categories: ["Modules.Defense Rigs"],
  },
  Luminar: {
    categories: ["Ships.Fighters"],
  },
  "Ice Miner II blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Blink Drive": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Medium Shield Repairer": {
    categories: ["Modules.Subsystemss"],
  },
  "Hybrid Enhanced Servos": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Dread Heavy Sensor Janmer": {
    categories: ["Module.Subsystems"],
  },
  "Dread Reinforced Hull": {
    categories: ["Modules.Defense Rigs"],
  },
  "Ancient Heavy Armor Booster": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Lightweight Engines": {
    categories: ["Modules.Engine Rigs"],
  },
  "Hybrid Parallel Circuits": {
    categories: ["Modules.Reactor Rigs"],
  },
  Yuma: {
    categories: ["Ships.Vendors"],
  },
  "Hybrid Ion blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Heavy Shield Repairer": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Medium Armor Booster": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Stasis Field": {
    categories: ["Modules.Subsystems"],
  },
  "Dread Warp Charger": {
    categories: ["Modules.Engine Rigs"],
  },
  "Hybrid Rapid Bolt": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Dread Heavy Hull Repairer": {
    categories: ["Modules.Subsystems"],
  },
  "Dread Light Hull Repairer": {
    categories: ["Modules.Subsystems"],
  },
  "Kavani Targeter I": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Spacemine I": {
    categories: ["Deployables.Combat"],
  },
  "Dread Sensor Janmer": {
    categories: ["Modules.Subsystems"],
  },
  "Dread Medium Hull Repairer": {
    categories: ["Modules.Subsystems"],
  },
  "Precision Miner II blueprint": {
    categories: ["Blueprints"],
  },
  "Dread Heat Sink": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Hybrid Overclocker": {
    categories: ["Modules.Subsystems"],
  },
  "Dread Light Sensor Janmer": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Battery": {
    categories: ["Modules.Reactor Rigs"],
  },
  "Dread AP Rounds": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Hybrid Light Shield Repairer": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Shield Booster": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Sensor Booster": {
    categories: ["Modules.Defense Rigs"],
  },
  "Dread Skeletonized Chassis": {
    categories: ["Modules.Defense Rigs"],
  },
  "Ancient HE Rounds": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Strip Miner II blueprint": {
    categories: ["Blueprints"],
  },
  "Ancient Overclocker": {
    categories: ["Modules.Subsystems"],
  },
  "Dread Servo Surge": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Patcher Nanobots": {
    categories: ["Modules.Defense Rigs"],
  },
  "Ancient Composite Armor": {
    categories: ["Modules.Defense Rigs"],
  },
  Fargo: {
    categories: ["Ships.Vendors"],
  },
  "Hybrid Disruptor": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Swift Bolt": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Dread Disruptor": {
    categories: ["Modules.Subsystems"],
  },
  "Prospector I": {
    categories: ["Turrets.Miner"],
  },
  "Kavani Targeter II": {
    categories: ["Modules.Weapon Rigs"],
  },
  "Ancient Overdrive-M": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Overdrive-L": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Afterburner-S": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Lightburner-L": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Lightburner-S": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Ion-M blueprint": {
    categories: ["Blueprints"],
  },
  "Hybrid Overdrive-M": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Afterburner-S": {
    categories: ["Modules.Subsystems"],
  },
  "Ancient Lightburner-M": {
    categories: ["Modules.Subsystems"],
  },
  "Hybrid Overdrive-L": {
    categories: ["Modules.Subsystems"],
  },
};

// Convert itemData object to array of objects
const convertedItemData = Object.entries(originalItemData).map(([itemName, data]) => ({
  itemName,
  ...data,
}));

// Write the converted array to a new JavaScript file
const outputFile = "convertedItemData.js";
const outputContent = `const itemData = ${JSON.stringify(
  convertedItemData,
  null,
  2
)};\n\nmodule.exports = itemData;`;

fs.writeFileSync(outputFile, outputContent);

console.log(`Converted itemData saved to ${outputFile}`);
