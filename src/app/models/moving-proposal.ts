export interface MovingProposal {
    id: number,
    addressFrom: string;
    addressTo: string;
    distance: number;
    livingAreaSurface: number;
    atticAreaSurface: number;
    hasPiano: boolean;
    needsPackingAssistance: boolean;
    firstName: string;
    lastName: string;
    email: string;
    price: number;
    createDate: Date;
    lastUpdateDate: Date;
}