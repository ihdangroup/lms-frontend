import React from "react";
import { ChapterContextProvider } from "@/app/_context/ChapterContext";
import { KursusContextProvider } from "@/app/_context/KursusContext";
import { UserContextProvider } from "@/app/_context/UserContext";
import { AuthContext } from "@/app/_context/AuthContext";
const MainPage = ({ children }) => {
  const { user } = React.useContext(AuthContext);
  return (
    <div>
      {user ? (
        <UserContextProvider>
          <KursusContextProvider>
            <ChapterContextProvider>
              <div className="p-4">{children}</div>
            </ChapterContextProvider>
          </KursusContextProvider>
        </UserContextProvider>
      ) : (
        <KursusContextProvider>
          <ChapterContextProvider>
            <div className="p-4">{children}</div>
          </ChapterContextProvider>
        </KursusContextProvider>
      )}
    </div>
  );
};
export default MainPage;
