import { createContext, useContext, useState, ReactNode } from "react";
import Alert from "./index";

interface AlertContextType {
  openAlert: (content: ReactNode) => void;
  closeAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alertContent, setAlertContent] = useState<ReactNode | null>(null);

  const openAlert = (content: ReactNode) => setAlertContent(content);
  const closeAlert = () => setAlertContent(null);

  return (
    <AlertContext.Provider value={{ openAlert, closeAlert }}>
      {children}
      <Alert isOpen={!!alertContent} onClose={closeAlert}>
        {alertContent}
      </Alert>
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};
