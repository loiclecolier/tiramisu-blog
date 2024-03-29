import React, { useState, useMemo, useContext, useEffect } from 'react'
import './ArticlesList.css'
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination';
import { ArticlesContext } from '../../context/articlesContext';

let PageSize = 6;

export default function ArticlesList() {

    const { articles, isLoading } = useContext(ArticlesContext);

    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleChange = (e) => {
        e.preventDefault();
        let lowerCase = e.target.value.toLowerCase();
        setSearchInput(lowerCase);
    }

    const filteredData = articles.filter((article) => {
        if (searchInput === '') {
            return articles;
        }
        else {
            return article.title.toLowerCase().includes(searchInput);
        }
    });

    const paginatedData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [filteredData, currentPage]);

    return (
        <div className="container-articles">
            <div className="header-articles">
                <h1 className="home-title">{searchInput === '' ? "Toutes les recettes" : "Recherche"}</h1>
                <div className="search">
                    <input
                        type="search"
                        onChange={handleChange}
                        value={searchInput}
                        placeholder="Rechercher une recette..."
                        maxLength="50"
                        className="input-search"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
            <div className="container-cards">
                {isLoading ?
                    <div className="loading-icon"></div>
                    :
                    paginatedData.length > 0 ?
                        paginatedData.map(article => {
                            return (
                                <Card
                                    article={article}
                                    key={article.id}>
                                </Card>
                            )
                        })
                    : searchInput === '' ?
                        <h2 className="article-not-found">Aucune recette disponible actuellement.</h2>
                        :
                        <h2 className="article-not-found">Aucune recette ne correspond à votre recherche : {searchInput}</h2>
                }
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={filteredData.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}
