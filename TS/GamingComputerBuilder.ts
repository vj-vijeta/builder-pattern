import { Computer } from "./Computer";
import { ComputerBuilder } from "./ComputerBuilder";

// Concrete Builder (GamingComputerBuilder)
export class GamingComputerBuilder implements ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer('', '', '');
    }

    setCPU(cpu: string): void {
        this.computer = new Computer(cpu, this.computer['ram'], this.computer['storage']);
    }

    setRAM(ram: string): void {
        this.computer = new Computer(this.computer['cpu'], ram, this.computer['storage']);
    }

    setStorage(storage: string): void {
        this.computer = new Computer(this.computer['cpu'], this.computer['ram'], storage);
    }

    getResult(): Computer {
        return this.computer;
    }
}
