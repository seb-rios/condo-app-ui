import React, { useState } from "react";
import RegistrationPage1 from "./registration1.page";
import RegistrationPage2 from "./registration2.page";
import RegistrationPage3 from "./registration3.page";

const RegistrationFlow = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <RegistrationPage1 onNext={handleNextPage} />;
      case 2:
        return (
          <RegistrationPage2 onNext={handleNextPage} onBack={handlePrevPage} />
        );
      case 3:
        return (
          <RegistrationPage3 onNext={handleNextPage} onBack={handlePrevPage} />
        );
      default:
        return null;
    }
  };
  return <React.Fragment>{renderCurrentPage()}</React.Fragment>;
};

export default RegistrationFlow;
