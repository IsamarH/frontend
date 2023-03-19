import { useState, useEffect } from "react";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "categories";

  const getCategories = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <ul>
        <h1>Categorias</h1>
        {categories.map((item) => (
          <li key={item.id}>
            <a href="">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
