import React from "react";
import "./blog.css";
import "../Portfolio/portfolio.css";
import Card from "./Card";
import BlogApi from "./BlogApi";

const Blog = () => {
  return (
    <>
      <section className="Portfolio blog" id="portfolio">
        <div className="container">
          <div className="heading text-center">
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Blog</h1>
          </div>

          <div className="content grid">
            {BlogApi.map((value, index) => {
              return (
                <Card
                  key={index}
                  image={value.image}
                  category={value.date}
                  title_one={value.title_one}
                  desc_one={value.desc_one}
                  title_two={value.title_two}
                  desc_two={value.desc_two}
                  title_three={value.title_three}
                  desc_three={value.desc_three}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
