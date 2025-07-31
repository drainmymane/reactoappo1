import React from 'react';

const pageCount = (totalPages, limit) => {
    return Math.ceil(totalPages / limit);
}

export default pageCount;
