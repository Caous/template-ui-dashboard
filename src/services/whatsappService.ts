import axios from "axios";
import { BASE_URL } from "../utils/constants";

const API_BASE_URL = `${BASE_URL}/api/Whatsapp`;

const handleRequest = async (endpoint: string): Promise<number | null> => {
  try {
    const response = await axios.get<string>(`${API_BASE_URL}/${endpoint}`);
    return response.data ? parseInt(response.data, 10) : null;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 204) {
        console.warn(`No content from ${endpoint}`);
        return null;
      } else if (error.response?.status === 400) {
        console.error(`Bad request: ${endpoint}`);
      } else if (error.response?.status === 500) {
        console.error(`Internal server error: ${endpoint}`);
      }
    } else {
      console.error(`Unknown error calling ${endpoint}:`, error);
    }
    return null;
  }
};

export const countNewCustomer = async (): Promise<number | null> => {
  return handleRequest("CountNewCustomer");
};

export const countRecurrenceCustomerMonth = async (): Promise<number | null> => {
  return handleRequest("CountRecurrenceCustomerMonth");
};

export const countNewTicketsSupport = async (): Promise<number | null> => {
  return handleRequest("CountNewTicketsSupport");
};

export const countMessagesPending = async (): Promise<number | null> => {
  return handleRequest("CountMessagesPending");
};