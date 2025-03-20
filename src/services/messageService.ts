import axios from "axios";
import { WhatsappMessage } from "../models/WhatsAppMessage";
import { BASE_URL } from "../utils/constants";
import { GroupMessage } from "../models/GroupMessage";

const API_URL = `${BASE_URL}/api/Whatsapp/GetLastMessagens`;

const API_GROUP_URL = `${BASE_URL}/api/Whatsapp/GetAllMessagensMongo`;

// Função para buscar as últimas mensagens do WhatsApp
export const getLastMessages = async (): Promise<WhatsappMessage[]> => {
  try {
    const response = await axios.get<WhatsappMessage[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar as mensagens do WhatsApp:", error);
    throw error;
  }
};

export const getGroupMessages = async (): Promise<GroupMessage[]> => {
  try {
    const response = await axios.get<GroupMessage[]>(API_GROUP_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar as mensagens do WhatsApp:", error);
    throw error;
  }
}