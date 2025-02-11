export interface WhatsappMessage {
    phoneNumber: string;
    customerName: string;
    protocolNumber: string;
    dateMessage: string; // Pode ser convertido para Date caso necessÃ¡rio
    service: string;
    status: string;
    id: string;
  }