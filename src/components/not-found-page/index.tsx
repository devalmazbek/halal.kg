import React from "react";
import { useNavigate } from "react-router-dom";

interface ErrorMessage {
  data?: string;
  message?: string;
}

const NotFoundPage: React.FC<{ errorMessage?: ErrorMessage }> = ({ errorMessage }) => {
  const navigate = useNavigate(); // Используем хук для навигации

  return (
    <div className="py-4 home page-container">
      <div className="container mx-auto mt-5">
        <div>
          <h1>Что-то пошло не так 😢</h1>
          <p>{errorMessage?.data || errorMessage?.message || "Страница не найдена"}</p>
          <button onClick={() => navigate(-1)}>&larr; Назад</button>
          <button onClick={() => navigate('/')}>&larr; На главную</button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
