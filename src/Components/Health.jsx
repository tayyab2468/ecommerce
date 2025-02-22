import React, { useState, useEffect } from 'react';

const Health = () => {
  const [article, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Define the fetchCategoryData function inside this file
  const fetchCategoryData = async (category) => {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=6&apikey=4d41e386d60b4a5fd20a3cc5a408e309`
      );
      const data = await response.json();
      return data.articles || [];
    } catch (error) {
      console.error("Error fetching category data", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategoryData('health');
      setArticles(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <h2 className="text-center text-xl font-bold mt-10">Loading...</h2>;
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
        <div className="relative z-10 text-center max-w-2xl p-6">
        </div>
      <div>
<h2 className="text-4xl font-bold mb-6 text-center mt-8 font-Poppins">Health News</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center px-4">
  {article.map((article, index) => (
    <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-[400px] mx-auto">
      <img src={article.image} alt="news" className="w-full h-48 object-cover rounded-t-2xl" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-black">{article.title}</h3>
        <p className="text-sm text-gray-600 mb-4">
  {article.description ? article.description.slice(0, 25) + "..." : "No description available."}
</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full inline-block"
        >
          Read More
        </a>
        <div className="mt-3 text-gray-700 font-medium">
          <h4>Published At:</h4>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  );
};

export default Health;
