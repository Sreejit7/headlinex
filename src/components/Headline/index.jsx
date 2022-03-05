import React from "react";
import { ExternalLink } from "react-external-link";
import { motion } from "framer-motion";
import "./Headline.css";

function Headline({ news }) {

  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5, duration: 0.75, stiffness: 80 }}
      className={`headline`}
    >
      {news.image ? (
        <img
          className="headline__image rounded-t-lg rounded-sm md:rounded-l-lg md:rounded-t-sm shadow-lg object-cover h-48 w-full md:w-48"
          src={news.image}
          alt={news.title}
        />
      ) : (
        <div className="headline__image-placeholder shadow-lg rounded-sm font-bold bg-blue-500 text-white">
          TOP NEWS
        </div>
      )}
      <div className="headline__content">
        <ExternalLink href={news.url}>
          <h2
            className={`text-2xl font-bold mb-2 transition duration-700 hover:text-blue-500`}
          >
            {news.title}
          </h2>
        </ExternalLink>
        <p className={`news__author`}>
          {" "}
          - By {news.author ? news.author : news.source.name} at{" "}
          {new Date(news.publishedAt).toLocaleString()}
        </p>
        <p className={`mt-4 px-2`}>{news.description}</p>
      </div>
      <img
        className="hidden md:inline absolute top-5 right-0 object-contain h-40 z-1 opacity-25"
        src="/images/headline-bg.png"
        alt="Headliner"
      />
    </motion.div>
  );
}

export default Headline;
