import { Outlet, Route, Routes } from "react-router-dom";
import { PageWrapper } from "../components";
import { Analytics, Chats } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <PageWrapper>
            <Outlet />
          </PageWrapper>
        }
      >
        <Route path="/" element={<Analytics />} />
        <Route path="/chat" element={<Chats />} />
      </Route>
    </Routes>
  );
};
