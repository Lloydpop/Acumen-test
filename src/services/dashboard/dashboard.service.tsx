import http from "../../pluggins/http";

class Dashboard {
  async getDashboardData() {
    try {
      const { data } = await http.get("/dashboard");

      return data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export const dashboardService = new Dashboard();
