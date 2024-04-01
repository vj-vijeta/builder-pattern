import { Computer } from "./Computer";

// Builder
export interface ComputerBuilder {
    setCPU(cpu: string): void;
    setRAM(ram: string): void;
    setStorage(storage: string): void;
    getResult(): Computer;
}
