export interface RepairModel {
    type?: string;
    brand?: string;
    device?: string;
    deviceProblem?: string;
    seriaImei?: string;
    lockCode?: string;

}

export interface WorkingParts {
    backcamara: boolean;
    charginPort: boolean;
    fingerPrint: boolean;
}