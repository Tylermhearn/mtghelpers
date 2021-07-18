import React, { useState } from "react";
import './index.scss'
import range from './../../utils/range'

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const Pagination = ({ data, RenderComponent, cardLimit = 16 }) => {

    // let [pages] = useState(Math.round(data.length / cardLimit));
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / cardLimit)

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    }

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }

    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * cardLimit - cardLimit;
        const endIndex = startIndex + cardLimit;
        return data.slice(startIndex, endIndex);
    }

    const fetchPageNumbers = () => {
        const pageNeighbours = 2;
        const totalNumbers = (pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }
                case (hasLeftSpill && hasRightSpill):
                default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }
            return [1, ...pages, totalPages];
        }
        return range(1, totalPages);
    }

    const pages = fetchPageNumbers();
    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim();

    return (
        <>
            <div className="row d-flex flex-row py-5">
                <div className="w-100 px-4 py-5 d-flex flex-row flex-wrap align-items-center justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <h2 className={headerClass}>
                            <strong className="text-secondary">{data.length}</strong> Cards
                        </h2>
                        {currentPage && (
                            <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                                Page <span className="font-weight-bold">{currentPage}</span> / <span className="font-weight-bold">{totalPages}</span>
                            </span>
                        )}
                    </div>
                    <div className="d-flex flex-row py-4 align-items-center">
                        <nav aria-label="Countries Pagination">
                            <ul className="pagination">
                                {pages.map((page, index) => {
                                    if (page === LEFT_PAGE) return (
                                        <li key={index} className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous" onClick={goToPreviousPage}>
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                    )
                                    if (page === RIGHT_PAGE) return (
                                        <li key={index} className="page-item">
                                            <a className="page-link" href="#" aria-label="Next" onClick={goToNextPage}>
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    )
                                    return (
                                        <li key={index} className={`page-item${currentPage === page ? ' active' : ''}`}>
                                            <a className="page-link" href="#" onClick={changePage}>{page}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
                {getPaginatedData().map((card) => (
                    <RenderComponent key={card.id} card={card} />
                ))}
            </div>
        </>
    )
}

export default Pagination