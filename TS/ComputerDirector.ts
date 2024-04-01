import { ComputerBuilder } from "./ComputerBuilder";

// Director
export class ComputerDirector {
    constructor(private builder: ComputerBuilder) {}

    buildGamingComputer(cpu: string, ram: string, storage: string): void {
        this.builder.setCPU(cpu);
        this.builder.setRAM(ram);
        this.builder.setStorage(storage);
    }
}
