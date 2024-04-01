// Product (Computer)
export class Computer {
    private cpu: string;
    private ram: string;
    private storage: string;

    constructor(cpu: string, ram: string, storage: string) {
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
    }

    public showDetails(): void {
        console.log(`CPU: ${this.cpu}, RAM: ${this.ram}, Storage: ${this.storage}`);
    }
}
