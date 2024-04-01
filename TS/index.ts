import { Computer } from "./Computer";
import { GamingComputerBuilder } from "./GamingComputerBuilder";
import { ComputerDirector } from "./ComputerDirector";

// Client
const gamingComputerBuilder = new GamingComputerBuilder();
const computerDirector = new ComputerDirector(gamingComputerBuilder);

computerDirector.buildGamingComputer('Intel i9', '32GB', '1TB SSD');
const gamingComputer = gamingComputerBuilder.getResult();
gamingComputer.showDetails();
