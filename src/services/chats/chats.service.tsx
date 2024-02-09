import http from "../../pluggins/http";

class ChatService {
  async getChatData() {
    try {
      const { data } = await http.get("/chat_dashboard");

      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getMessages(params: { page: number; limit: number }) {
    try {
      const response: any = await http.get("/messages", { params });

      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export const chatService = new ChatService();
